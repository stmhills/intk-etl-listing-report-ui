'use strict';

var saffModuleDirectives = angular.module('saffModuleDirectives');

saffModuleDirectives.directive('title', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      link: function() {

        var listener = function(event, toState) {

          $timeout(function() {
            var title_postfix = ' - Transmition Log';
            $rootScope.title = (toState.data && toState.data.pageTitle) 
            ? toState.data.pageTitle + title_postfix 
            : 'Default title';
          });
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }
  ]);