'use strict';

var saffModuleApp = angular.module('saffModuleApp');

saffModuleApp.config([ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider){
	$stateProvider.state('dashboard', {
		url: '/dashboard',
		controller:'DashboardCtrl',
		templateUrl:'dashboard/dashboard.html',
		data : { pageTitle: 'DashBoard' }
	});
}]);