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
        sanitizePosition();
        return Object.keys($scope.toastPosition)
          .filter(function(pos) { return $scope.toastPosition[pos]; })
          .join(' ');
      };
      function sanitizePosition() {
        var current = $scope.toastPosition;
        if ( current.bottom && last.top ) current.top = false;
        if ( current.top && last.bottom ) current.bottom = false;
        if ( current.right && last.left ) current.left = false;
        if ( current.left && last.right ) current.right = false;
        last = angular.extend({},current);
      }
      $scope.showCustomToast = function() {
        $mdToast.show({
          controller: 'ToastCtrl',
          templateUrl: 'toast-template.html',
          parent : $document[0].querySelector('#toastBounds'),
          hideDelay: 6000,
          position: $scope.getToastPosition()
        });
      };
      function showToast (message, ttheme) {
        $mdToast.show(
          $mdToast.simple()
            .content(message) // textContent in newer Material versions
            .position($scope.getToastPosition())
            .hideDelay(4000)
            .theme(ttheme)
        );
        /**
        $mdToast.show(
          $mdToast.simple()
            .textContent(message)
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

        );
        */
      };
      $scope.showSuccessToast = function() {
        showToast("Success! Your order has been submitted.", "success-toast");
      };
      $scope.showFailToast = function() {
        showToast("Failed. Your shopping cart is empty!", "error-toast");
      };
      $scope.showInfoToast = function() {
        showToast("New message from John: \"Yo! Lunch?\"", "info-toast");
      }
  }]);
