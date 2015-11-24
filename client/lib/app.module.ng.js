/*!
 *
 * Angle - Bootstrap Admin App + AngularJS
 *
 * Version: 3.2.0
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */

// APP START
// -----------------------------------

(function() {
    'use strict';

    angular
        .module('arank', [
            'app.core',
            'app.auth',
            'app.sidemenu',
            'app.dashboard',
            'app.ui',
            'app.tables',
            'app.forms',
            'app.charts',
        ])
        .config(['$mdIconProvider', '$mdThemingProvider', function ($mdIconProvider, $mdThemingProvider) {
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
          // DEFAULT THEME

          $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey', {default:"800"})
            .accentPalette('light-blue') //, {default:"100"})
            .warnPalette('yellow', {default: '700'})
            ;

          // TOAST themes
          $mdThemingProvider.theme("success-toast");
          $mdThemingProvider.theme("error-toast");
          $mdThemingProvider.theme("info-toast");

        }]);

    function onReady() {
      angular.bootstrap(document, ['arank'], {
        strictDi: true
      });
    }

    if (Meteor.isCordova)
      angular.element(document).on("deviceready", onReady);
    else
      angular.element(document).ready(onReady);

})();
