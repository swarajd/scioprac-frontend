'use strict';

/**
 * @ngdoc overview
 * @name yoProjRnd2App
 * @description
 * # yoProjRnd2App
 *
 * Main module of the application.
 */
angular
  .module('yoProjRnd2App', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/upload', {
        templateUrl: 'views/upload.html',
        controller: 'UploadCtrl'
      })
      .when('/upload/how', {
        templateUrl: 'views/uploadhow.html',
        controller: 'UploadHowCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/results', {
        templateUrl: 'views/results.html',
        controller: 'SearchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
