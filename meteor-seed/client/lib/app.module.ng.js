/*!
 *  AMM Dash Template!
 *
 * Version: 1.0.0
 * Author: @mystec
 * Website:
 * License: https://wrapbootstrap.com/help/licenses
 *
 */

// APP START
// -----------------------------------

(function() {
    'use strict';

    angular
        .module('app', [
            'app.core',
            'app.auth',
            'app.menu',
            'app.dashboard',
            'app.mdColors', // client/lib/theme/mdStyleColor
        ])
        .config(['$mdIconProvider', function ($mdIconProvider) {
          /**
          $mdIconProvider
            .iconSet("social", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg")
            .iconSet("action", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-action.svg")
            .iconSet("communication", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-communication.svg")
            .iconSet("content", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content.svg")
            .iconSet("toggle", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-toggle.svg")
            .iconSet("navigation", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg")
            .iconSet("image", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-image.svg");
          */

        }]);

    function onReady() {
      angular.bootstrap(document, ['app'], {
        strictDi: true
      });
    }

    if (Meteor.isCordova)
      angular.element(document).on("deviceready", onReady);
    else
      angular.element(document).ready(onReady);

})();
