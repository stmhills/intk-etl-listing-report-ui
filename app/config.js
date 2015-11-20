'use strict';

var saffModuleApp = angular.module('saffModuleApp');

saffModuleApp
.config([ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/dashboard');  
}])
.constant("$appConstants", {
	"apiEndPoint": "https://ahri-dev.sematree.com/"
})
.config(function($httpProvider) { 
	$httpProvider.defaults.useXDomain = true; 
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
})
.config(function($translateProvider) {
	//
	
	$translateProvider.useStaticFilesLoader({
	    prefix: 'locale-',
	    suffix: '.json'
	    
	});
	$translateProvider.preferredLanguage('en');
	$translateProvider.forceAsyncReload(true);
	$translateProvider.useLocalStorage();
});


var languageKey = localStorage.getItem('NG_TRANSLATE_LANG_KEY');
var saffModuleControllers = angular.module('saffModuleControllers'); 
saffModuleControllers.controller('languageController', ['$translate', '$scope','$state','$stateParams', function ($translate, $scope, $state, $stateParams ) {
 
  $scope.changeLanguage = function (langKey) {
  	languageKey = langKey;
    $translate.use(langKey);
    //
    $state.transitionTo($state.current, $stateParams, {
	    reload: true,
	    inherit: false,
	    notify: true
	});
	//
  };

}]);
