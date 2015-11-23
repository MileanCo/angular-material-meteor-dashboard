
angular.module("app.dashboard")
  .controller("DashboardCtrl", ['$scope', '$rootScope', '$meteor', '$state', '$location', '$mdToast', function ($scope, $rootScope, $meteor, $state, $location, $mdToast) {
    var vm = this;

    vm.error = '';

    //$scope.user = {'first_name':'','last_name':'','email':''};
    $scope.complete = false;
    // Profile should always be {}
    $scope.profile = $rootScope.currentUser.profile;

    // Set 'selectedTab' for highlight/underscore [DOES NOT CHANGE STATE]
    $scope.$on('$stateChangeSuccess', function (event, toState) {
      if (toState.data) {
        $scope.currentTab = toState.data.selectedTab;
      } else {
        console.log("ERROR: " + toState.url + " didnt have 'data'.");
      }
    });

    // Go to page as directed by TAB INDEX [make sure they match!]
    $scope.goToTab = function (tab) {
      switch ( tab ) {
          case 0:
              $location.url("/dashboard/profile");
              break;
          case 1:
              $location.url("/dashboard/instances");
              break;
          case 2:
              $location.url("/dashboard/mytimes");
              break;
      }
    }

    $scope.updateProfile = function(formData) {
      if ($rootScope.currentUser.profile == null) {
        console.log ("ERROR: PROFILE IS NULL");
      }
      $scope.errors = [];
      //Validate.form_validation(formData,$scope.errors);
      console.log($rootScope.currentUser);
      console.log($scope.profile);

      $meteor.call('updateProfile', $scope.profile).then(
        function(data){
          $scope.showToast("Success: " + data, "success-toast"); //console.log('success inviting', data);
        },
        function(err){
          $scope.showToast(err, "error-toast");
        }
      );
    }


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

  }
]);
