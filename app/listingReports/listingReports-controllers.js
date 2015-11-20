'use strict';

var saffModuleControllers = angular.module('saffModuleControllers');

saffModuleControllers.controller('ListingReportsCtrl', ['$scope','$state','$uibModal','$filter', 'ListingReports',
	function($scope,$state,$modal,$filter, ListingReports) {  

		$scope.refreshData = function(){    	
      		$scope.listingReports = ListingReports.query();           
	    	$scope.listingReports.$promise.then(function(){
	        	if($scope.$state.current.name != "listingReports.details")
	        	selectFirstItem();
	    	});
    	}
    	$scope.detailsUrl = "listingReports.details";
    	$scope.refreshData();

		
	}]);


saffModuleControllers.controller('ListingReportDetailsCtrl',['$scope', '$location', '$stateParams', 'ListingReports',
  function($scope, $location, $stateParams, ListingReports) {
    $scope.listingReport = ListingReports.get({id: $stateParams.listingReportId});
    
    $scope.oneAtATime = true;
    $scope.status = {
	    isFirstOpen: true,
	    isFirstDisabled: false
	  };

  }]);