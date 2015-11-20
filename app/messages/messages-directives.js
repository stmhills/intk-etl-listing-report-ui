'use strict';

/* Controllers */
var saffModuleDirectives = angular.module('saffModuleDirectives');


saffModuleDirectives.directive('searchFilterMessage', function() {
	return {
		restrict: 'E',
		replace: true,
		scope : '@',
		template : "<p ng-show='{{showMessage}}'>Showing Results for the Daterange : {{fromDate}}	to {{toDate}}</p>",
		link: function($scope, $element, $attrs) {       
			//debugger;
			if($scope.$state.params.fromDate && $scope.$state.params.toDate){
				$scope.showMessage = false;
			}             
			$scope.fromDate = $scope.$state.params.fromDate;
			$scope.toDate = $scope.$state.params.toDate;
		}
	};
});

