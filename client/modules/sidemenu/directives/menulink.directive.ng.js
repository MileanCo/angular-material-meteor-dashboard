(function(){
  'use strict';

  angular.module('app.sidemenu')
    .directive('menuLink', function () {
      return {
        scope: {
          section: '='
        },
        templateUrl: 'client/modules/sidemenu/directives/templates/menu-link.ng.html',
        restrict: 'E',
        replace: true,
        link: function ($scope, $element) {
          var controller = $element.parent().controller();
          $scope.focusSection = function () {
            // set flag to be used later when
            // $locationChangeSuccess calls openPage()
            controller.focusSection();
          };
        }
      };
    })
})();
