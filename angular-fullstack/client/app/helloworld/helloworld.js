'use strict';

angular.module('angularFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('helloworld', {
        url: '/helloworld',
        templateUrl: 'app/helloworld/helloworld.html',
        controller: 'HelloworldCtrl'
      });
  });