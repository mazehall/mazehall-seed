'use strict';

angular.module('mazehall', [
    'ngRoute'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/dash.html',
        controller: 'dashCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
