
(function(){
  angular.module('app.sidemenu')
    .directive('menuToggle', [ '$timeout', function($timeout) {
      return {
        scope: {
          section: '='
        },
        templateUrl: 'client/modules/sidemenu/directives/templates/menu-toggle.ng.html',
        restrict: 'E',
        replace: true,
        link: function($scope, $element) {
          var controller = $element.parent().controller();

          $scope.isOpen = function() {
            return controller.isOpen($scope.section);
          };
          $scope.toggle = function() {
            controller.toggleOpen($scope.section);
          };
        },
      };
    }])

})();
