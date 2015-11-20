'use strict';

var saffModuleApp = angular.module('saffModuleApp');

saffModuleApp.config([ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider){

	$stateProvider
	.state('listingReports', {
		url: '/listingReports',
		controller:'ListingReportsCtrl',
		templateUrl:'listingReports/listingReports.html',
		data : { pageTitle: 'Listing Reports' }
	})
	.state('listingReports.details', {
	    url: '/details/:listingReportId',
	    controller:'ListingReportDetailsCtrl',
	    templateUrl:'listingReports/listingReport_details.html',
	    data : { pageTitle: 'Listing Report Details' }
	})

}]);