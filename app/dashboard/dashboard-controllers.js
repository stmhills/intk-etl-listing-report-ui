'use strict';

var saffModuleControllers = angular.module('saffModuleControllers');

saffModuleControllers.controller('DashboardCtrl', [ '$translate','$scope','$state','$uibModal','$filter','DashboardService','c3Factory',
	function( $translate,$scope,$state,$modal,$filter,DashboardService, c3Factory) { 

		$scope.changeLanguage = function (langKey) {
			$translate.use(langKey);
  		}; 

		var customDateFormat = function(momentObj){ 
			return momentObj.format("YYYY-MM-DD");
		};
		
		var getLabel = function(label) { 
			return $filter('translate')(label); 
		} 
		
		$scope.selectedTimeRange = { startDate: customDateFormat(moment()), endDate: customDateFormat(moment())}; 
		$scope.dateRangesCollections = { firstColumn : [
			{ startDate: customDateFormat(moment()), 					endDate:customDateFormat(moment()), name: getLabel('dashboard_today_label') },
			{ startDate: customDateFormat(moment().startOf("week")), 	endDate:customDateFormat(moment()), name: getLabel('dashboard_thisWeek_label') },
			{ startDate: customDateFormat(moment().startOf("month")), 	endDate:customDateFormat(moment()), name: getLabel('dashboard_thisMonth_label') },
			{ startDate: customDateFormat(moment().startOf("year")), 	endDate:customDateFormat(moment()), name: getLabel('dashboard_thisYear_label') }
			]
		};

		$scope.checkActiveDateRangeFilter  = function(startDate, endDate){
			var selectedStartDate = $scope.selectedTimeRange.startDate; 
			var selectedEndDate = $scope.selectedTimeRange.endDate; 
			//console.log(selectedStartDate == startDate && selectedEndDate == endDate);
			return (selectedStartDate == startDate && selectedEndDate == endDate) ? true : false;
		};

		var filterReq = $.param({dateStart : $scope.selectedTimeRange.startDate, dateEnd : $scope.selectedTimeRange.endDate, attributeName : "username", timeUnit:"daily"});
		$scope.filterByDateRange = function(startDate, endDate){
			$scope.selectedTimeRange = { startDate: startDate, endDate: endDate}; 
			filterReq = $.param({dateStart : startDate, dateEnd : endDate, attributeName : "username", timeUnit:"daily"});
			$scope.refreshMessages();
		};
		/* Latest Msgs Section */
		$scope.limitLatestMessages = 10;
		$scope.updateLatestMessages = function() {
			$scope.latestMessages = DashboardService.getLatestMessages($scope.limitLatestMessages);	
		};
		$scope.updateLatestMessages();
		/*Donut Charts*/
		
		$scope.donutChartConfig = {
			data: {
				columns: [],
				type : 'donut'
			},
			donut: {
				title: function() { return $filter('translate')('dashboard_messagesCount_label'); }
			},
			legend: {
				position: 'right'
			},
			size: {
				height: 220
			}
		};

		$scope.refreshDonutChart = function(){
			var dataResponse;
			$scope.donutChartResponse = DashboardService.getMessageCount().post(filterReq).$promise.then(function(response){
				dataResponse = response;
				c3Factory.get('donutChart').then(function(chart){
					var columnsData = $filter('chartFormatDataColumn')(dataResponse, false);
					var xaxisKeys = chart.data().map(function(data){ return data.id });
					chart.load({
						columns : columnsData.columns,
						unload:xaxisKeys
					});
				});
			});
		}
		$scope.refreshDonutChart();
		/*Bar Charts*/
		$scope.barChartConfig ={
			axis: {
				rotated: true,
				x: {
					type: 'timeseries',
					tick: {
						format: '%Y-%m-%d'
					}
				}
			},
			data: {
				x:'x-axis',
				columns: [],
				groups: [],
				type: 'bar'
			},
			grid: {
				y: {
					show: true
				}
			},
			size: {
				height: 200
			}
		};
		$scope.refreshBarChart = function(){
			var dataResponse;
			$scope.barChartResponse = DashboardService.getMessageBar().post(filterReq).$promise.then(function(response){
				dataResponse = response;
				c3Factory.get('barChart').then(function(chart){
					var columnsData = $filter('chartFormatDataColumn')(dataResponse, true);
					var xaxisKeys = chart.data().map(function(data){ return data.id });
					chart.load({
						columns : columnsData.columns,
						unload :xaxisKeys
					});
					chart.groups([columnsData.keys]);
				});
			});
		}
		$scope.refreshBarChart();
		/*TimeSeries Charts*/
		$scope.timeSeriesChartConfig ={
			axis: {
				x: {
					tick: {
						format: '%Y-%m-%d',
						outer: false
					},
					type: 'timeseries'
				},
				y: {
					tick: {
						format: function(d) { return d + "%"; },
						outer: false
					}
				}
			},
			data: {
				columns: [],
				x: 'x-axis'
			},
			grid: {
				y: {
					show: true
				}
			},
			legend: {
				hide: true
			},
			point: {
				r: 4
			},
			size: {
				height: 220
			}
		};
		$scope.refreshTimeSeriesChart = function(){
			var dataResponse;
			$scope.timeseriesChartResponse = DashboardService.getMessageTimeSeries().post(filterReq).$promise.then(function(response){
				dataResponse = response;
				c3Factory.get('timeSeriesChart').then(function(chart){
					var columnsData = $filter('chartFormatDataColumn')(dataResponse, true);
					var xaxisKeys = chart.data().map(function(data){ return data.id });
					chart.load({
						columns : columnsData.columns,
						unload :xaxisKeys 
					});					
				});
			});
		}
		$scope.refreshTimeSeriesChart();
		/* Refresh Messages*/
		$scope.refreshMessages = function(){
			$scope.refreshTimeSeriesChart();
			$scope.refreshBarChart();
			$scope.refreshDonutChart();
		}
	}]);

