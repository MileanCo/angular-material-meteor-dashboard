/** (function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['angular', 'chart.js'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('angular'), require('chart.js'));
  } else {
    // Browser globals
    factory(angular, Chart);
  }
}
*/
(function(Chart) {
    'use strict';

    // Chart Js Colors

    /**
    Chart.defaults.global.colours = [
      '#97BBCD', // blue
      '#DCDCDC', // light grey
      '#F7464A', // red
      '#46BFBD', // green
      '#FDB45C', // yellow
      '#949FB1', // grey
      '#4D5360'  // dark grey
    ];
    Chart.defaults.global.colours = [
        { // blue
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,0.8)"
        },
        { // light grey
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,0.8)"
        },
        { // red
            fillColor: "rgba(247,70,74,0.2)",
            strokeColor: "rgba(247,70,74,1)",
            pointColor: "rgba(247,70,74,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(247,70,74,0.8)"
        },
        { // green
            fillColor: "rgba(70,191,189,0.2)",
            strokeColor: "rgba(70,191,189,1)",
            pointColor: "rgba(70,191,189,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(70,191,189,0.8)"
        },
        { // yellow
            fillColor: "rgba(253,180,92,0.2)",
            strokeColor: "rgba(253,180,92,1)",
            pointColor: "rgba(253,180,92,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(253,180,92,0.8)"
        },
        { // grey
            fillColor: "rgba(148,159,177,0.2)",
            strokeColor: "rgba(148,159,177,1)",
            pointColor: "rgba(148,159,177,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(148,159,177,0.8)"
        },
        { // dark grey
            fillColor: "rgba(77,83,96,0.2)",
            strokeColor: "rgba(77,83,96,1)",
            pointColor: "rgba(77,83,96,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(77,83,96,1)"
        }
    ];
    */

    angular
        .module('app.charts', [
            'googlechart',
            'chart.js',
            'nvd3',
          ]);
})();
