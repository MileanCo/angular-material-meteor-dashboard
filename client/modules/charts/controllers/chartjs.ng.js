'use strict';
/**
 * @ngdoc function
 * @name app.charts.controller:GoogleChartCtrl
 * @description
 * # GoogleChartCtrl
 * Controller of the Google Charts
 */
angular.module('app.charts') // TO-DO: ONLY ADD CHARTS.JS HERE & MODULARIZE
  .controller('ChartJsCtrl', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
    var self = {};
    // Colros
    //Chart.defaults.global.colours
    // TO-DO: SET COLROS TO THEME COLORS

    // LINE CHART
    $scope.line = {};
    $scope.line.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.line.series = ['Downloads', 'Uploads'];
    $scope.line.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };

    // PIE CHART
    $scope.pie = {};
    $scope.pie.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
    $scope.pie.data = [300, 450, 100, 50, 180];
    $scope.pie.type = 'Pie';

    $scope.toggle = function () {
      $scope.pie.type = $scope.pie.type === 'Pie' ?
        'PolarArea' : 'Pie';
    };

    // Randomize pie chart data
    $scope.randomizeData = function () {
      // reset data
      var new_data = [];

      for (var i = 0; i < $scope.pie.data.length; i++) {
          var num = $scope.pie.data[i];
          // format variables
          num = self._random_change( num );
          // add to data array
          new_data.push(num);
      }
      $scope.pie.data = new_data;
      console.log($scope.pie.data);
    }

    // Change value by random percent
    self._random_change= function (v) {
      // increase power by 10 for visual effect
      var min = -0.3;
      var max = 0.3;
      // If value less than 5, put them back in the game
      if (v < 50.0) max = max * 3;
      // if value GREATER than 29, reduce power
      if (v > 450.0) min = min * 3;
      // and the formula is:
      var random = Math.random() * (max - min) + min;
      v = v*(1+random);
      return parseFloat(v.toFixed(2));
    }

    //BAR CHART
    $scope.bar = {};
    $scope.bar.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.bar.series = ['Downloads', 'Uploads'];
    $scope.bar.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

    // DOUGHNUT CHART
    $scope.doughnut = {};
    $scope.doughnut.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.doughnut.data = [300, 500, 100];


    // RADAR
    $scope.radar = {};
    $scope.radar.labels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];
    $scope.radar.data = [
      [65, 59, 90, 81, 56, 55, 40],
      [28, 48, 40, 19, 96, 27, 100]
    ];
}]);
