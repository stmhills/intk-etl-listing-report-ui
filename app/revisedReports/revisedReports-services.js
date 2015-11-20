'use strict';

/* Services */

var saffModuleServices = angular.module('saffModuleServices');


saffModuleServices.factory('RevisedReports', ['$http','$resource','$appConstants',
  function($http, $resource,$appConstants){
  	$http.defaults.useXDomain = true;
  	var revisedReportEndPoint = './revisedReports/:id.json'; 
    
    return $resource(revisedReportEndPoint , {}, {
      query :  {method: 'GET',   params:{ id : 'revisedReports'}, isArray:true },
      post :  {method: 'POST',   params:{ id : ''}, isArray:true, headers: {'Content-Type': 'application/x-www-form-urlencoded'} }
    });
  }]);