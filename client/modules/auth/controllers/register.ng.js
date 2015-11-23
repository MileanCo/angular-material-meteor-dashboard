angular.module("app.auth").controller("RegisterCtrl", ['$meteor', '$state',
  function ($meteor, $state) {
    var vm = this;

    vm.credentials = {
      email: '',
      password: '',
      profile: {
        first_name: '',
        last_name: '',
      },
    };

    vm.error = '';

    vm.register = function () {
      $meteor.createUser(vm.credentials).then(
        function () {
          $state.go('core.dashboard');
        },
        function (err) {
          vm.error = 'Registration error - ' + err;
        }
      );
    };
  }
]);
