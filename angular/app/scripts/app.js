'use strict';

/**
 * @ngdoc overview
 * @name videostoreApp
 * @description
 * # videostoreApp
 *
 * Main module of the application.
 */
angular
  .module('videostoreApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/video', {
        templateUrl: 'views/video.html',
        controller: 'VideoCtrl',
        controllerAs: 'video'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
