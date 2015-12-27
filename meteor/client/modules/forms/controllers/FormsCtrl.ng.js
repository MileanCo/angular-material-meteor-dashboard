'use strict';
/**
 * @ngdoc function
 * @name dashboard.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dashboard
 */
 angular.module('app.forms')
   .controller('FormsCtrl', ['$scope', '$rootScope', '$meteor', '$location', FormsCtrl ])
   ;


 function FormsCtrl($scope, $rootScope, $meteor, $location) {
    // CHECKBOXES
    $scope.data = {};
    $scope.data.cb1 = true;
    $scope.data.cb2 = false;
    $scope.data.cb3 = false;
    $scope.data.cb4 = false;
    $scope.data.cb5 = false;

    // SWITCH
    $scope.data = {
      cb1: true,
      cb4: true,
      cb5: false
    };
    $scope.message = 'false';
    $scope.onChange = function(cbState) {
      $scope.message = cbState;
    };
}
