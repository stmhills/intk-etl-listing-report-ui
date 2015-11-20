'use strict';

/* Services */

var saffModuleServices = angular.module('saffModuleServices');


saffModuleServices.factory('IntegrationMessages', ['$http','$resource','$appConstants',
  function($http, $resource,$appConstants){
  	$http.defaults.useXDomain = true;
  	var integrationMsgEndPoint = $appConstants.apiEndPoint + "transmissionlog/integration/transmissionlogs/:id";  
  	//return $resource(integrationMsgEndPoint); 
    return $resource(integrationMsgEndPoint , {}, {
      query :  {method: 'GET',   params:{ id : ''}, isArray:true },
      post :  {method: 'POST',   params:{ id : ''}, isArray:true, headers: {'Content-Type': 'application/x-www-form-urlencoded'} }
      //post : { method: 'POST', data : {@data}, headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
    });
  }]);