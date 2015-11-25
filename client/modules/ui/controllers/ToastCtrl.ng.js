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
      $scope.showToast = function(message, ttheme) {
        $mdToast.show(
          $mdToast.simple()
            .content(message)
            .position($scope.getToastPosition())
            .hideDelay(2000)
            .theme(ttheme)
          /**{
              template : '<md-toast md-style-color="{\'background-color\': \'{{toast.theme}}\'}">\
                            {{ toast.content }}\
                            <md-button ng-click="toast.resolve()" > \
                                Ok\
                            </md-button>\
                        </md-toast>' ,
              controller: [function () {
                  this.content = message;
                  this.theme = ttheme;
              }],
              controllerAs: 'toast',
              theme: ttheme,
              parent : $document[0].querySelector('#toastBounds'),
              hideDelay: 2000,
              position: $scope.getToastPosition()
            }
        */
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
