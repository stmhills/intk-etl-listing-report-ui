'use strict';

var saffModuleApp = angular.module('saffModuleApp');

saffModuleApp.config([ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider){
  $stateProvider
  .state('message', {
    url: '/message',
    controller:'MessageListCtrl',
    templateUrl:'messages/layout_default.html',
    data : { pageTitle: 'Messages' }
  })
  .state('message.details', {
    url: '/details/:integrationMessageId',
    controller:'MessageDetailsCtrl',
    templateUrl:'messages/message_details.html',
    data : { pageTitle: 'Messages Details' }
  })
  .state('search-message', {
    url: '/search-message/:fromDate/:toDate',
    controller:'SearchMessagesListCtrl',
    templateUrl:'messages/layout_default.html',
    data : { pageTitle: 'Search Messages' }
  })
  .state('search-message.details', {
    url: '/details/:integrationMessageId',
    controller:'MessageDetailsCtrl',
    templateUrl:'messages/message_details.html',
    data : { pageTitle: 'Search Messages' }
  })    
  .state('message-grid', {
    url: '/message-card/:fromDate/:toDate',
    controller:'MessageGridCtrl',
    templateUrl:'messages/layout_alternate.html',
    data : { pageTitle: 'Messages' },
    params: {
      fromDate: { squash: true, value: null },
      toDate: { squash: true, value: null }
    }
  });
}]);
