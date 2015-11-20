'use strict';

/* Services */

var saffModuleServices = angular.module('saffModuleServices');


saffModuleServices.factory('DashboardService', ['$http','$resource','$appConstants',
  function($http, $resource,$appConstants){
  	$http.defaults.useXDomain = true;
  	var msgCountEndPoint = $appConstants.apiEndPoint + "transmissionlog/integration/transmissionlogs/messagecount";  
    var msgCountBarEndPoint = $appConstants.apiEndPoint + "transmissionlog/integration/transmissionlogs/messagecountbar";  
    var msgCountTimeSeriesEndPoint = $appConstants.apiEndPoint + "transmissionlog/integration/transmissionlogs/messagetimeseries";  
    var latestMessagesEndPoint = $appConstants.apiEndPoint + "transmissionlog/integration/transmissionlogs/latestmessages";  
    return {
      getMessageCount : function(){
        return $resource(msgCountEndPoint , {}, {
          post :  {method: 'POST', params:{}, isArray:true, headers: {'Content-Type': 'application/x-www-form-urlencoded'} }
        });
      },
      getMessageBar : function(){
        return $resource(msgCountBarEndPoint , {}, {
          post :  {method: 'POST', params:{}, isArray:true, headers: {'Content-Type': 'application/x-www-form-urlencoded'} }
        });
      },
      getMessageTimeSeries : function(){
        return $resource(msgCountTimeSeriesEndPoint , {}, {
          post :  {method: 'POST', params:{}, isArray:true, headers: {'Content-Type': 'application/x-www-form-urlencoded'} }
        });
      },
      getLatestMessages : function(limit){
        return $resource(latestMessagesEndPoint).query({ maxResults : limit });
      }
    };
  }]);