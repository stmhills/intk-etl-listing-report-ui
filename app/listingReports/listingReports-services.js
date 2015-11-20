'use strict';

/* Services */

var saffModuleServices = angular.module('saffModuleServices');


saffModuleServices.factory('ListingReports', ['$http','$resource','$appConstants',
  function($http, $resource,$appConstants){
  	$http.defaults.useXDomain = true;
  	var listingReportEndPoint = './listingReports/:id.json'; 
    
    return $resource(listingReportEndPoint , {}, {
      query :  {method: 'GET',   params:{ id : 'listingReports'}, isArray:true },
      post :  {method: 'POST',   params:{ id : ''}, isArray:true, headers: {'Content-Type': 'application/x-www-form-urlencoded'} }
    });
  }]);