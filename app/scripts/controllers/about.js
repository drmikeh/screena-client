'use strict';

/**
 * @ngdoc function
 * @name screenaClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the screenaClientApp
 */
angular.module('screenaClientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
