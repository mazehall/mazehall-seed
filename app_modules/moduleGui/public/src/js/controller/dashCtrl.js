'use strict';

angular.module('mazehall')
    .controller('dashCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.dashGreetings = {
          "title": "Mazehall",
          "headline": "Mazehall dashbord"
        }
    }]);