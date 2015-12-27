'use strict';

/**
 * @ngdoc directive
 * @name
 * @description
 * # adminPosHeader
 */
angular.module('app.dashboard')
    // widgetStat --> (translates to) --> widget-stat
    .directive('widgetTask', function() {
      return {
        templateUrl: 'client/modules/dashboard/directives/templates/widget-task.ng.html',
        restrict: 'E',
        replace: true,
        /**scope: {
          'model': '=',
          'title': '@',
          'headline': '@',
          'subhead': '@',
        },*/
        scope: {
          'model': '=',
          'title': '@',
          'comments': '@',
          'number': '@',
          'colour': '@',
          'type': '@',
          'icon': '@',
          'stat': '@',
    		}
        /**
        <!--
        <md-card>
          <md-card-title style="background-color:#F4F4F4" >
            <md-card-title-media class="md-padding widget-1" >
              <h1 class="md-display-3">{{title}}</h1>
            </md-card-title-media>
            <md-card-title-text class="md-padding" style="background-color:#F0F0F0">
              <span class="md-headline">{{headline}}</span>
              <span class="md-subhead">{{subhead}}</span>
            </md-card-title-text>
          </md-card-title>
        </md-card>
        -->
        */

  	}
  });
