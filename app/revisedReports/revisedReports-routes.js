'use strict';

var saffModuleApp = angular.module('saffModuleApp');

saffModuleApp.config([ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider){

	$stateProvider
	.state('revisedReports', {
		url: '/revisedReports',
		controller:'RevisedReportsCtrl',
		templateUrl:'revisedReports/revisedReports.html',
		data : { pageTitle: 'Revised Reports' }
	})
	.state('revisedReports.details', {
	    url: '/details/:revisedReportId',
	    controller:'RevisedReportDetailsCtrl',
	    templateUrl:'revisedReports/revisedReport_details.html',
	    data : { pageTitle: 'Revised Report Details' }
	})

}]);