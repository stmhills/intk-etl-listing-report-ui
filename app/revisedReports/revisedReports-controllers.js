'use strict';

var saffModuleControllers = angular.module('saffModuleControllers');

saffModuleControllers.controller('RevisedReportsCtrl', ['$scope','$state','$uibModal','$filter', 'RevisedReports',
	function($scope,$state,$modal,$filter, RevisedReports) {  

		$scope.refreshData = function(){    	
      		$scope.revisedReports = RevisedReports.query();           
	    	$scope.revisedReports.$promise.then(function(){
	        	if($scope.$state.current.name != "revisedReports.details")
	        	selectFirstItem();
	    	});
    	}
    	$scope.detailsUrl = "revisedReports.details";
    	$scope.refreshData();

		
	}]);


saffModuleControllers.controller('RevisedReportDetailsCtrl',['$scope', '$location', '$stateParams', 'RevisedReports',
  function($scope, $location, $stateParams, RevisedReports) {
    $scope.revisedReport = RevisedReports.get({id: $stateParams.revisedReportId});
    
    $scope.oneAtATime = true;
    $scope.status = {
	    isFirstOpen: true,
	  };

  }]);