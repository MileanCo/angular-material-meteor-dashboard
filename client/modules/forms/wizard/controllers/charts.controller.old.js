'use strict';
/**
 * @ngdoc function
 * @name dashboard.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dashboard
 */
angular.module('app.charts')
  .controller('ChartsCtrl', ['$scope', '$rootScope', '$timeout', 'ExplorerService', function ($scope, $rootScope, $timeout, ExplorerService) {

    $scope.teams = [];
    $scope.chart = {};
    $scope.loading = true;
    $scope.message = null;

    //$scope.$on("postResults", function (event, args) {
    //   $scope.teams = args.data ;
    //   $scope.updateChart();
    //});

    $scope.getChartData = function (teams) {

    }

    $rootScope.updateChart = function ( teams, you ) {
      // Data for Table
      var table = {
         'cols': [
            { id: 'team', label: 'Team', type:'string'},
            { id: 'hi', label: 'Highest', type:'number'},
            { id: 'lo', label: 'Best Time', type:'number'},
            { id: 'avg', label: 'Average Time', type:'number'},
            //{ id: 'you', label: 'You', type:'number'}
         ],
         'rows' : []
      };

      // Data for Avg Graph
      var avg_graph = {
        'cols': [
           { id: 'team', label: 'Team', type:'string'},
           { id: 'avg', label: 'Average Time', type:'number'},
           //{ id: 'you', label: 'You', type:'number'}
        ],
        'rows' : []
      };

      // GOOGLE CHART THING
      var low_y = 90;
      for (var team_name in teams) {
          var team = teams[team_name];
          var table_row = {
            c: [
              {v: team_name},
              {v: team.high},
              {v: team.low},
              {v: team.avg},
            ]
          };
          var avg_row = {
            c: [
              { v: team_name },
              { v: team.avg },
            ]
          };
          table['rows'].push( table_row );
          avg_graph['rows'].push( avg_row );

          if (team.low < low_y) {
            low_y = team.low;
          }
      }
      avg_graph['rows'].push( { c : [
        {v: "You"},
        {v: you },
      ]}) ;


      $scope.tableChart = {
        type : "Table",
        options : {
          title: 'Suggested Teams',
          alternatingRowStyle: true,
          showRowNumber: true,
        },
        data : table,
      };

      $scope.avgChart = {
        type: "BarChart",
        options : {
          title: " Average Time per Team",
          vAxis: {title: 'Team'},
          hAxis: {title: 'Time'},
          series: {2: {type: 'line'}}


        },
        data: avg_graph
      };

      // Error message
      if (table['rows'].length == 1 ) {
          $scope.message = "No records found." ;
      } else {
          $scope.loading = false;
      }
    }

    /**
    $scope.updateChartJs = function ( team_times, you ) {
      console.log("update chart!");
      var chart = {
        type: "chart-bar",
        legend: true,
        labels: [],
        data: [],
      };

      // Calculate avgs, insert into data
      for (var team_name in team_times) {
        // calcualte avg
        var t = team_times[team_name];
        //
        if (t.n > 1) {
          t.avg = moment.duration(t.avg.asMilliseconds() / t.n );
        }
        console.log(t.avg);

        chart.labels.push(team_name);
        chart.data.push(t.avg.asSeconds());

              //    times[t]['avg']  = times[t]['avg']  / (times[t]['n'])
              //    print "avg: %s \nhigh: %s \nlow: %s" % (times[t]['avg'] , times[t]['high'] , times[t]['low'] )
      }
      // apply entire update
      $scope.chart = chart;
      console.log($scope.chart);

    }
    */

}]);
