'use strict';

/**
 * @ngdoc function
 * @name screenaClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the screenaClientApp
 */
angular.module('screenaClientApp')
  .controller('MainCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $scope.applicant = function() {
    $location.path( '#applicant' );
  };
  
  $scope.employer = function() {
    $location.path( '#employer' );
  };

}]);
