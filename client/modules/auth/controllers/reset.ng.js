angular.module("app.auth").controller("ResetCtrl", ['$meteor', '$state',
  function ($meteor, $state) {
    var vm = this;

    vm.credentials = {
      email: ''
    };

    vm.error = '';

    vm.reset = function () {
      $meteor.forgotPassword(vm.credentials).then(
        function () {
          $state.go('home');
        },
        function (err) {
          vm.error = 'Error sending forgot password email - ' + err;
        }
      );
    };
  }
]);
