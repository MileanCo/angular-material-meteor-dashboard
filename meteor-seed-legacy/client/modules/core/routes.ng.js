angular.module("app.core").run(function ($rootScope, $state, $window ) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page
    if (error === 'AUTH_REQUIRED') {
      $state.go('core.home');
    }
  });

  // CUSTOMIZE
  $rootScope.page = {
        SITENAME : "SITENAME",
        // Sets page title
        setTitle: function(title) {
            this.title = title ;
        },
  }

  // Change Title on stateChangeSuccess
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      // Change title
      if ($state.current.ncyBreadcrumb) {
        $rootScope.page.setTitle($state.current.ncyBreadcrumb.label );
      } else {
        $rootScope.page.setTitle(""); // no title if none specified
      }
      // For Header to display Blue Breadcrumbs Header or nah
      $rootScope.state_name = $state.current.name;
      // Scroll to top of page on refresh
      $window.scrollTo(0, 0);
  });
});

angular.module("app.core")
    //take all whitespace out of string
    .filter('nospace', function () {
      return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
      };
    });

    /**
    //replace uppercase to regular case
    .filter('humanizeDoc', function () {
      return function (doc) {
        if (!doc) return;
        if (doc.type === 'directive') {
          return doc.name.replace(/([A-Z])/g, function ($1) {
            return '-' + $1.toLowerCase();
          });
        }

        return doc.label || doc.name;
      };
    });
  */

angular.module("app.core").config(function ($breadcrumbProvider, $urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  // Set Breadcrumb Directive template
  $breadcrumbProvider.setOptions({
     //template: 'bootstrap2'
     templateUrl: 'client/modules/core/directives/breadcrumbs.ng.html'
   });

  $stateProvider
    .state('core', {
      templateUrl: 'client/modules/core/views/core.ng.html',
      controller: 'MenuCtrl as vm',
      ncyBreadcrumb: {
        label: 'Home'
      }
    })
    .state('core.home', {
      url: '/',
      templateUrl: 'client/modules/core/views/home.ng.html',
      ncyBreadcrumb: {
        skip:true, //skip breadcrumb creation (no Home / Home )
        label: 'Welcome!' // display Page title still
      },
      //controller: 'LoginCtrl',
    })
    // DASHBOARD /////// /////// //////// //////////
    .state('core.dashboard', {
      url: '/dashboard',
      templateUrl: 'client/modules/dashboard/views/dashboard.ng.html',
      controller: 'DashboardCtrl',
      ncyBreadcrumb: {
        label: 'Dashboard'
      },
      data: {
        'selectedTab': -1,
      },
      resolve: {
        "currentUser": function($meteor){
          // Temporarry, test (fake) user!
          var user = {
            emails: [ {address:"admin@yoursite.com", verified:false} ],
            profile: {
              first_name:"Administrator",
              last_name: "Smith",
            },
          };

          return user;
          // TO ENABLE THIS FOR LOGGED IN USERS ONLY
          // Resolves the promise successfully if a user is authenticated and rejects otherwise
          // return $meteor.requireUser() ;

        }
      }
    })
        .state('core.dashboard.home', {
          url: '/home',
          templateUrl: 'client/modules/dashboard/views/example1.ng.html',
          ncyBreadcrumb: {
            label: 'Example 1'
          },
          data: {
            'selectedTab': 0,
          },
        })
        .state('core.dashboard.profile', {
          url: '/profile',
          templateUrl: 'client/modules/dashboard/views/profile.ng.html',
          ncyBreadcrumb: {
            label: 'Profile'
          },
          data: {
            'selectedTab': 1,
          },
        })
        .state('core.dashboard.instances', {
          url: '/instances',
          templateUrl: 'client/modules/dashboard/views/instances.ng.html',
          ncyBreadcrumb: {
            label: 'Instances'
          },
          data: {
            'selectedTab': 2,
          },
        })



    // AUTH /////// /////// //////// //////////
    .state('login', {
      url: '/login',
      templateUrl: 'client/modules/auth/views/login.ng.html',
      controller: 'LoginCtrl',
      ncyBreadcrumb: {
        label: 'Login'
      },
      controllerAs: 'lc'
    })
    .state('core.register',{
      url: '/register',
      templateUrl: 'client/modules/auth/views/register.ng.html',
      controller: 'RegisterCtrl',
      ncyBreadcrumb: {
        label: 'Register'
      },
      controllerAs: 'rc'
    })
    .state('core.resetpw', {
      url: '/resetpw',
      templateUrl: 'client/modules/auth/views/reset-password.ng.html',
      controller: 'ResetCtrl',
      ncyBreadcrumb: {
        label: 'Reset Password'
      },
      controllerAs: 'rpc'
    })
    .state('core.logout', {
      url: '/logout',
      ncyBreadcrumb: {
        label: 'Logout'
      },
      resolve: {
        "logout": function($meteor, $state) {
          return $meteor.logout().then(function(){
            $state.go('core.home');
          }, function(err){
            console.log('logout error - ', err);
          });
        }
      }
    });
  // SHOULD GO TO 404
  $urlRouterProvider.otherwise("/home");
});
