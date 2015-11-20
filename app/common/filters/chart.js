'use strict';

var saffModuleFilters = angular.module('saffModuleFilters');

saffModuleFilters.filter('chartFormatDataColumn', function($filter) {    	
	return function(dataObj, returnXAxis) {
		var formattedData = [];
		var formattedKeys = [];
		if(returnXAxis && dataObj.length && typeof dataObj[0] == "object"){
			var xAxisData = dataObj[0]["x-axis"];
			xAxisData.unshift("x-axis");
			formattedData.push(xAxisData);
		}
		if(dataObj.length && typeof dataObj[1] == "object"){
			for(var key in dataObj[1].data){ 
				var arrayValues= dataObj[1].data[key];
				arrayValues.unshift(key);
				formattedKeys.push(key);
				formattedData.push(arrayValues);
			}
		}
		return { columns : formattedData, keys : formattedKeys };
	}
});
