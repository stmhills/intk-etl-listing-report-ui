'use strict';

/* Services */

var saffModuleServices = angular.module('saffModuleServices');


saffModuleServices.factory('ReportCategories', ['$http','$resource','$appConstants',
  function($http, $resource,$appConstants){
  	$http.defaults.useXDomain = true;
  	var reportCategoryEndPoint = './reportCategories/:id.json'; 
    
    return $resource(reportCategoryEndPoint , {}, {
      query :  {method: 'GET',   params:{ id : 'reportCategories'}, isArray:true },
      post :  {method: 'POST',   params:{ id : ''}, isArray:true, headers: {'Content-Type': 'application/x-www-form-urlencoded'} }
    });
  }]);