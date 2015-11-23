'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('app.charts') // TO-DO: ONLY ADD CHARTS.JS HERE & MODULARIZE
  .controller('ChartsCtrl', ['$scope', '$rootScope', '$timeout', 'ExplorerService', function ($scope, $rootScope, $timeout, ExplorerService) {

    $scope.teams = [];
    $scope.chart = {
      type: "chart-bar",
    };

    /**
    $scope.$on("postResults", function (event, args) {
       $scope.teams = args.data ;
       $scope.updateChart();
    });
    */

    $scope.updateChart = function ( team_times, you ) {
      console.log("update chart!");
      $scope.chart = {
        type: "chart-bar",
        legend: true,
        labels: [],
        data: [],
      };
      // Calculate avgs, insert into data
      for (var team_name in team_times) {
        // calcualte avg
        var t = team_times[team_name];
        t.avg = t.avg.milliseconds / t.n ;
        console.log(t.avg);

        $scope.chart.labels.push(team_name);
        $scope.chart.data.push(t.avg);
      }
      console.log($scope.chart);

    }

    /**
    $rootScope.updateC3Chart = function ( team_times, you ) {
      $scope.chart.type = "BarChart";
      $scope.chart.data = {
         'cols': [
            { id: 'team', label: 'Team', type:'string'},
            { id: 'hi', label: 'High', type:'number'},
            { id: 'lo', label: 'Low', type:'number'},
            { id: 'avg', label: 'Average', type:'number'},
            { id: 'you', label: 'You', type:'number'}
         ],
         'rows' : []
      };

      // C3 data.json 'graph data' values
      var chart_json = {
          team: [],
          high: [],
          low: [],
          avg: [],
          you: [],
      };
      var low_y = 90;
      for (var team_name in teams) {
          var t = teams[team_name];
          chart_json.team.push(team_name);

          chart_json.low.push(t.low);
          var avg_point = (t.avg - t.low );
          chart_json.avg.push( t.avg );
          chart_json.high.push(t.high );//t.high - avg_point );
          chart_json.you.push(you);
          if (t.low < low_y) {
            low_y = t.low;
          }
      }
      console.log(chart_json);
      var config = {
        data: {
          x: 'team',
          json: chart_json,
          type: 'bar',
          types: {
              you: "line",
          },
        },
        axis: {
          rotated: true,
          x: {
              type: 'category' // this needed to load string x value
          },
          y: {
              min: low_y,
              max: 80,
              //type: 'time',
          }
        }
      }
      $scope.chart = c3.generate( config );
    }
    */

}]);
