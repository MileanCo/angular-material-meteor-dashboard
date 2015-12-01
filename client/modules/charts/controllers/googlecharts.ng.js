'use strict';
/**
 * @ngdoc function
 * @name app.charts.controller:GoogleChartCtrl
 * @description
 * # GoogleChartCtrl
 * Controller of the Google Charts
 */
angular.module('app.charts') // TO-DO: ONLY ADD CHARTS.JS HERE & MODULARIZE
  .controller('GoogleChartCtrl', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
    $scope.loading = false;

    // MATERIAL BAR CHART
    var bar_data = {
      cols: [
        {
            id: "year",
            label: "Year",
            type: "string"
        },
        {
            id: "sales",
            label: "Sales",
            type: "number"
        },
        {
            id: "expenses",
            label: "Expenses",
            type: "number"
        },
        {
            id: "profit",
            label: "Profit",
            type: "number"
        }
      ],
      rows: [
                { c: [ { v: "2014" }, { v: 1000 }, { v: 400 }, { v: 200 } ]},
                { c: [ { v: "2015" }, { v: 1170 }, { v: 460 }, { v: 250 } ]},
                { c: [ { v: "2016" }, { v: 660 }, { v: 1120 }, { v: 300 } ]},
                { c: [ { v: "2017" }, { v: 1030 }, { v: 540 }, { v: 350 } ]},
            ]
    };
    $scope.barChart = {
      type: 'google.charts.Bar', // MATERIAL
      options : {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },
        bars: 'horizontal' // Required for Material Bar Charts.
      },
      data: bar_data
    };


    // MATERIAL LINE CHART
    var line_data = {
      cols: [
        {
            id: "year",
            label: "Year",
            type: "string"
        },
        {
            id: "sales",
            label: "Sales",
            type: "number"
        },
        {
            id: "expenses",
            label: "Expenses",
            type: "number"
        },
        {
            id: "profit",
            label: "Profit",
            type: "number"
        }
      ],
      rows: [
                { c: [ { v: "2014" }, { v: 900 }, { v: 300 }, { v: 188 } ]},
                { c: [ { v: "2015" }, { v: 1270 }, { v: 560 }, { v: 350 } ]},
                { c: [ { v: "2016" }, { v: 960 }, { v: 1320 }, { v: 400 } ]},
                { c: [ { v: "2017" }, { v: 1330 }, { v: 440 }, { v: 550 } ]},
            ]
    };
    $scope.lineChart = {
      type: 'google.charts.Line', // MATERIAL
      options : {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },
        bars: 'horizontal' // Required for Material Bar Charts.
      },
      data: line_data
    };


    // PIE CHART
    $scope.pieChart = {};
    $scope.onions = [
        {v: "Onions"},
        {v: 3},
    ];
    $scope.pieChart.data = {"cols": [
        {id: "t", label: "Topping", type: "string"},
        {id: "s", label: "Slices", type: "number"}
    ], "rows": [
        {c: [
            {v: "Mushrooms"},
            {v: 3},
        ]},
        {c: $scope.onions},
        {c: [
            {v: "Olives"},
            {v: 31}
        ]},
        {c: [
            {v: "Zucchini"},
            {v: 1},
        ]},
        {c: [
            {v: "Pepperoni"},
            {v: 2},
        ]}
    ]};


    // $routeParams.chartType == BarChart or PieChart or ColumnChart...
    $scope.pieChart.type = 'PieChart';
    $scope.pieChart.options = {
        'title': 'How Much Pizza I Ate Last Night'
    };
}]);
