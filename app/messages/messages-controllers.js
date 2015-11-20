'use strict';

var saffModuleControllers = angular.module('saffModuleControllers');

saffModuleControllers.controller('MessageListCtrl', ['$scope','$state','$uibModal','$filter','IntegrationMessages',
  function($scope,$state,$modal,$filter,IntegrationMessages) {

  
    $scope.refreshData = function(){
      //for today
      $scope.integrationMessages = IntegrationMessages.query();      
      //testing mode        
      //var filterReq = $.param({dateStart :"2015-10-20", dateEnd: "2015-10-22"});
      //$scope.integrationMessages = IntegrationMessages.post(filterReq);
      //testing mode ends
      $scope.integrationMessages.$promise.then(function(){
        if($scope.$state.current.name != "message.details")
          selectFirstItem();
      });
    }
    $scope.detailsUrl = "message.details";
    $scope.refreshData();
    $scope.openModal=function(){
      $scope.modalInstance=$modal.open({
        templateUrl: 'messages/search_modal.html',
        controller:'MessageSearchModalCtrl',
        scope: $scope
      });
    };

    $scope.searchFilterMessage = "";
  //
}]);

saffModuleControllers.controller('SearchMessagesListCtrl', ['$scope','$state','$filter', '$uibModal','$stateParams','IntegrationMessages',
  function($scope,$state,$filter,$modal,$stateParams, IntegrationMessages) {
    var getLabel = function(label) { 

      return $filter('translate')(label); 
    } 

    //$scope.searchFilterMessage = "Showing results for Date Range: " + $stateParams.fromDate + " to "+ $stateParams.toDate ;
    $scope.searchFilterMessage = " "+ getLabel('messages_showingResults_label') +" "+  $stateParams.fromDate + " "+ getLabel('messages_to_label') +" "+  $stateParams.toDate ;

    $scope.refreshData = function(){
      var filterReq = $.param({dateStart : moment(new Date($stateParams.fromDate)).format('YYYY-MM-DD'), dateEnd : moment(new Date($stateParams.toDate)).format('YYYY-MM-DD')});
      $scope.integrationMessages = IntegrationMessages.post(filterReq);
      $scope.integrationMessages.$promise.then(function(){
        if($scope.$state.current.name != "search-message.details")
          selectFirstItem();
      });
    }
    $scope.detailsUrl = "search-message.details";
    $scope.refreshData();
    $scope.openModal=function(){
      $scope.modalInstance=$modal.open({
        templateUrl: 'messages/search_modal.html',
        controller:'MessageSearchModalCtrl',
        scope: $scope
      });
    };

  }]);


saffModuleControllers.controller('MessageDetailsCtrl',['$scope', '$location', '$stateParams', 'IntegrationMessages',
  function($scope, $location, $stateParams, IntegrationMessages) {
    $scope.integrationMessage = IntegrationMessages.get({id: $stateParams.integrationMessageId});
  }]);


saffModuleControllers.controller('MessageSearchModalCtrl', ['$scope','$state','$uibModal','$filter','IntegrationMessages',
  function($scope,$state,$modal,$filter,IntegrationMessages) {

    $scope.messageType = '';
    $scope.fromDate = '';
    $scope.toDate = '';

    $scope.search = function(){
      if($scope.fromDate !== "" && $scope.toDate !== ""){
        $scope.modalInstance.close();
        $scope.showDateErrorMsg = false;
        $state.go('search-message', { fromDate: $filter('saffDateTimeForUrl')($scope.fromDate), toDate:$filter('saffDateTimeForUrl')($scope.toDate)});        
      } else {
        $scope.showDateErrorMsg = true;
      }
    };

    $scope.cancel = function(){
      $scope.messageType = '';
      $scope.fromDate = '';
      $scope.toDate = '';
      $scope.showDateErrorMsg = false;
      $scope.modalInstance.dismiss('cancel');
    };
  }]);


saffModuleControllers.controller('MessageGridCtrl', ['$scope','$state','$stateParams','$filter','IntegrationMessages',
  function($scope,$state,$stateParams, $filter, IntegrationMessages) {

    var getLabel = function(label) { 
      return $filter('translate')(label); 
    } 

    if($state.params.fromDate && $state.params.toDate){
      $scope.searchFilterMessage = " "+ getLabel('messages_showingResults_label') +" "+  $stateParams.fromDate + " "+ getLabel('messages_to_label') +" "+  $stateParams.toDate ;
    }
    $scope.refreshData = function(){      
      var filterReq = $.param({dateStart : moment(new Date($stateParams.fromDate)).format('YYYY-MM-DD'), dateEnd : moment(new Date($stateParams.toDate)).format('YYYY-MM-DD') });
      $scope.integrationMessages = IntegrationMessages.post(filterReq);
    };
    $scope.refreshData();

    $scope.messageType = '';
    $scope.fromDate = '';
    $scope.toDate = '';

    $scope.search = function(){
      if($scope.fromDate !== "" && $scope.toDate !== ""){
        $scope.showDateErrorMsg = false;
        $state.go('message-grid', { fromDate: $filter('saffDateTimeForUrl')($scope.fromDate), toDate:$filter('saffDateTimeForUrl')($scope.toDate)});        
      } else {
        $scope.showDateErrorMsg = true;
      }
    };

    $scope.cancel = function(){
      $scope.messageType = '';
      $scope.fromDate = '';
      $scope.toDate = '';
      $scope.showDateErrorMsg = false;
    };

  }]);