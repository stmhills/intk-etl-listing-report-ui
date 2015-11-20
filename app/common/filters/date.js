'use strict';

var saffModuleFilters = angular.module('saffModuleFilters');

saffModuleFilters.filter('saffDateTimeFormat', function($filter) {    
	var angularDateFilter = $filter('date');
	return function(theDate) {
		return angularDateFilter(theDate, 'dd/MM/yyyy HH:mm:ss');
	}
});

saffModuleFilters.filter('saffDateTimeForUrl', function($filter) {    
	var angularDateFilter = $filter('date');
	return function(theDate) {
		return moment(new Date(theDate)).format('YYYY-MM-DD');
	}
});