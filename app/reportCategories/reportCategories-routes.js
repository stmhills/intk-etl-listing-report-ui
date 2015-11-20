'use strict';

var saffModuleApp = angular.module('saffModuleApp');

saffModuleApp.config([ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider){

	$stateProvider
	.state('reportCategories', {
		url: '/reportCategories',
		controller:'ReportCategoriesCtrl',
		templateUrl:'reportCategories/reportCategories.html',
		data : { pageTitle: 'Report Categories' }
	})
	.state('reportCategories.details', {
	    url: '/details/:reportCategoryId',
	    controller:'ReportCategoryDetailsCtrl',
	    templateUrl:'reportCategories/reportCategory_details.html',
	    data : { pageTitle: 'Report Category Details' }
	})
	.state('reportCategories.new', {
	    url: '/new/:reportCategoryId',
	    controller:'ReportCategoryNewCtrl',
	    templateUrl:'reportCategories/reportCategory_empty.html',
	    data : { pageTitle: 'Add a Report Category' }
	})

}]);