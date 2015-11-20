//@ sourceURL=app.js
'use strict';
/* _ Module */
var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function($window) {
  return $window._; // assumes underscore has already been loaded on the page
}]);
/* App Module */
var saffModuleApp = angular.module('saffModuleApp', [
  //'ngRoute',
  'ngCookies',
  'ngAnimate',
  'ui.router', 
  'saffModuleControllers',
  'saffModuleServices',
  'saffModuleDirectives',
  'saffModuleFilters',
  'cgBusy',
  'underscore',
  'ui.bootstrap',
  //'angularChart'
  //'gridshore.c3js.chart'
  'angular-c3',
  'pascalprecht.translate'
])
.value('cgBusyDefaults',{
  message:'',
  backdrop: true,  
  templateUrl: '/common/progress_template.html',
  delay: 0,
  minDuration: 300,
  wrapperClass: ''
})

saffModuleApp.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
  $rootScope.$state       = $state;
  $rootScope.$stateParams = $stateParams;
}]);


angular.module('saffModuleControllers', []);  

angular.module('saffModuleServices', ['ngResource']);

angular.module('saffModuleDirectives', []); 

angular.module('saffModuleFilters', []);  
