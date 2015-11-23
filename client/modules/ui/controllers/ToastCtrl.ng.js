angular
  .module('app.ui')
  .controller('ToastCtrl', ['$scope', '$mdToast', '$document', function($scope, $mdToast, $document) {
      // TOAST STUFF
      var last = {
            bottom: false,
            top: true,
            left: false,
            right: true
      };

      $scope.toastPosition = angular.extend({},last);
      $scope.getToastPosition = function() {
        _sanitizePosition();
        return Object.keys($scope.toastPosition)
          .filter(function(pos) { return $scope.toastPosition[pos]; })
          .join(' ');
      };
      function _sanitizePosition() {
        var current = $scope.toastPosition;
        if ( current.bottom && last.top ) current.top = false;
        if ( current.top && last.bottom ) current.bottom = false;
        if ( current.right && last.left ) current.left = false;
        if ( current.left && last.right ) current.right = false;
        last = angular.extend({},current);
      }
      $scope.showToast = function(message, theme) {
        $mdToast.show(
          $mdToast.simple()
            .content(message)
            .theme(theme)
            .position($scope.getToastPosition())
            .hideDelay(2000)
        );
      };
      $scope.showSuccessToast = function(message) {
        $scope.showToast("Success! Bought new iPad.", "success-toast");
      }
      $scope.showFailToast = function() {
        $scope.showToast("Fail: the logic on line 15 is bad.", "error-toast");
      }
      $scope.showInfoToast = function() {
        $scope.showToast("Useful information to the user", "info-toast");
      }
  }]);
