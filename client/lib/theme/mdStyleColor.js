/**
Get md theme colors in other HTML elements! (non-md)

USAGE:
<md-button md-style-color="{'background-color': 'hue-1'}">My Button</md-button>
<md-button md-style-color="{'background-color': '100'}">My Button</md-button>
<md-button md-style-color="{'background-color': 'warn.hue-3'}">My Button</md-button>
<md-button md-style-color="{'background-color': 'accent.400'}">My Button</md-button>
<md-button md-style-color="{'background-color': 'green.900'}">My Button</md-button>

<span md-style-color="{'color': 'primary'}">Text that is of color Primary!</span>
*/
(function () {
  "use strict";

  var _theme;
  var _palettes;

  angular
    .module('mdColors',['mdColors'])

    .config(['$mdThemingProvider', function($mdThemingProvider) {
      // CUSTOMIZE THEME COLORS HERE
      $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey', {default:"800"})
        .accentPalette('light-blue') //, {default:"100"})
        .warnPalette('yellow', {default: '900'})
        //.backgroundPalette("white")
        ;

      // TOAST themes
      $mdThemingProvider.theme("success-toast");
      $mdThemingProvider.theme("error-toast");
      $mdThemingProvider.theme("info-toast");


      // Some costume palette from the docs
      $mdThemingProvider.definePalette('amazingPaletteName', {
        '50': 'ffebee',
        '100': 'ffcdd2',
        '200': 'ef9a9a',
        '300': 'e57373',
        '400': 'ef5350',
        '500': 'f44336',
        '600': 'e53935',
        '700': 'd32f2f',
        '800': 'c62828',
        '900': 'b71c1c',
        'A100': 'ff8a80',
        'A200': 'ff5252',
        'A400': 'ff1744',
        'A700': 'd50000',
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                            // on this palette should be dark or light
        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
         '200', '300', '400', 'A100'],
        'contrastLightColors': undefined    // could also specify this if default was 'dark'
      });

      // what you really need
      _theme = $mdThemingProvider.theme();
      _palettes = $mdThemingProvider._PALETTES;
    }])

    .directive('mdStyleColor',
      function ($mdColorPalette) {
        return {
          restrict: 'A',
          scope: { mdStyleColor: '=' },
          link: function (scope, element, attrs) {
            for (var p in scope.mdStyleColor) {
              if (scope.mdStyleColor.hasOwnProperty(p)) {

                var themeColors = _theme.colors;

                var split = (scope.mdStyleColor[p] || '').split('.');
                if (split.length < 2) split.unshift('primary');

                var hueR   = split[1] || 'hue-1';    // 'hue-1'
                var colorR = split[0] || 'primary';  // 'warn'

                // Absolute color: 'orange'
                var colorA = themeColors[colorR] ?
                  themeColors[colorR].name : colorR;

                // Absolute Hue: '500'
                var hueA =
                  themeColors[colorR] ?
                  themeColors[colorR].hues[hueR] || hueR :
                  hueR;

                var colorValue = _palettes[colorA][hueA] ?
                  _palettes[colorA][hueA].value :
                  _palettes[colorA]['500'].value;

                element.css(p, 'rgb('+colorValue.join(',')+')');

              }
            }
          }
        }
      });
}());
