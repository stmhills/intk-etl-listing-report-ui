'use strict';

var saffModuleControllers = angular.module('saffModuleControllers');

saffModuleControllers.controller('ReportCategoriesCtrl', ['$scope','$state','$uibModal','$filter', 'ReportCategories',
	function($scope,$state,$modal,$filter, ReportCategories) {  

		$scope.refreshData = function(){    	
      		$scope.reportCategories = ReportCategories.query();           
	    	$scope.reportCategories.$promise.then(function(){
	        	if($scope.$state.current.name != "reportCategories.details")
	        	selectFirstItem();
	    	});
    	}
    	$scope.detailsUrl = "reportCategories.details";
    	$scope.refreshData();

		
	}]);


saffModuleControllers.controller('ReportCategoryDetailsCtrl',['$scope', '$location', '$stateParams', 'ReportCategories',
  function($scope, $location, $stateParams, ReportCategories) {
    $scope.reportCategory = ReportCategories.get({id: $stateParams.reportCategoryId});
    

  }]);


saffModuleControllers.controller('ReportCategoryNewCtrl',['$scope', '$location', '$stateParams', 'ReportCategories',
  function($scope, $location, $stateParams, ReportCategories) {
   
    
    $

  }]);