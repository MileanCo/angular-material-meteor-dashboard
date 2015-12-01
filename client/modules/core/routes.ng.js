angular.module("app.core").run(function ($rootScope, $state, $window ) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page
    if (error === 'AUTH_REQUIRED') {
      $state.go('core.home');
    }
  });
  var SITENAME = "AMM Dash";

  // Set page title in rootscope
  $rootScope.page = {
        setTitle: function(title) {
            this.title = SITENAME + " - " + title ;
        }
  }
  // Change Title on stateChangeSuccess
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      // Change title
      if ($state.current.data) {
        $rootScope.page.setTitle($state.current.data.pageTitle );
      } else {
        $rootScope.page.setTitle(""); // no title if none specified
      }
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
    })
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

angular.module("app.core").config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  //
/**  $ocLazyLoad.load({
      name:'arank',
      files:[
        'client/modules/core/main.ctrl.ng.js'
      ]
  });
*/


  $stateProvider
    .state('core', {
      templateUrl: 'client/modules/core/views/main.ng.html',
      controller: 'SidemenuCtrl as vm',
    })
    .state('core.home', {
      url: '/',
      templateUrl: 'client/modules/core/views/home.ng.html',
      data : { pageTitle: 'Home' },
      //controller: 'LoginCtrl',
    })
    // DASHBOARD /////// /////// //////// //////////
    .state('core.dashboard', {
      url: '/dashboard',
      templateUrl: 'client/modules/dashboard/views/dashboard.ng.html',
      controller: 'DashboardCtrl',
      data: {
        pageTitle: 'Dashboard',
        'selectedTab': -1,
      },
      resolve: {
        "currentUser": function($meteor){
          // Resolves the promise successfully if a user is authenticated and rejects otherwise.
          return $meteor.requireUser();
        }
      }
    })
        .state('core.dashboard.profile', {
          url: '/profile',
          templateUrl: 'client/modules/dashboard/views/profile.ng.html',
          data: {
            pageTitle: 'Dashboard',
            'selectedTab': 0,
          },
        })
        .state('core.dashboard.instances', {
          url: '/instances',
          templateUrl: 'client/modules/dashboard/views/instances.ng.html',
          data: {
            pageTitle: 'Dashboard',
            'selectedTab': 1,
          },
        })
        .state('core.dashboard.mytimes', {
          url: '/mytimes',
          templateUrl: 'client/modules/dashboard/views/mytimes.ng.html',
          data: {
            pageTitle: 'Dashboard',
            'selectedTab': 2,
          },
        })

    // Material UI
    .state('core.ui', {
      url:'/ui',
      controller: 'UICtrl',
      data : { pageTitle: 'Material UI' },
      templateUrl: 'client/modules/ui/views/ui.ng.html',
    })
      .state('core.ui.buttons', {
        url:'/buttons',
        data : { pageTitle: 'Buttons' },
        templateUrl: 'client/modules/ui/views/buttons.ng.html',
      })
      .state('core.ui.cards', {
        url:'/cards',
        data : { pageTitle: 'Cards' },
        templateUrl: 'client/modules/ui/views/cards.ng.html',
      })
      .state('core.ui.components', {
        url:'/components',
        data : { pageTitle: 'Components' },
        templateUrl: 'client/modules/ui/views/components.ng.html',
      })
      .state('core.ui.tabs', {
        url:'/tabs',
        data : { pageTitle: 'Tabs' },
        templateUrl: 'client/modules/ui/views/tabs.ng.html',
      })/**
      .state('core.ui.icons', {
        url:'/icons',
        data : { pageTitle: 'Icons' },
        templateUrl: 'client/modules/ui/views/icons.ng.html',
      })
      .state('core.ui.timeline', {
        url:'/timeline',
        data : { pageTitle: 'Timeline' },
        templateUrl: 'client/modules/ui/views/timeline.ng.html',
      })
      .state('core.ui.typography', {
        url:'/typography',
        data : { pageTitle: 'Typography' },
        templateUrl: 'client/modules/ui/views/typography.ng.html',
      })*/
    .state('core.tables-static', {
      url:'/tables/static',
      data : { pageTitle: 'Static Tables' },
      templateUrl: 'client/modules/tables/views/static-table.ng.html',
    })
    .state('core.tables-dynamic', {
      url:'/tables/dynamic',
      data : { pageTitle: 'Dynamic Tables' },
      controller: "TableCtrl",
      templateUrl: 'client/modules/tables/views/dynamic-table.ng.html',
    })

    // FORMS
    .state('core.forms', {
      url:'/forms',
      controller: 'FormsCtrl',
      data : { pageTitle: 'Forms' },
      templateUrl: 'client/modules/forms/views/forms.ng.html',
    })
      .state('core.forms.elements', {
        url:'/elements',
        data : { pageTitle: 'Elements' },
        templateUrl: 'client/modules/forms/views/elements.ng.html',
      })
      .state('core.forms.validation', {
        url:'/validation',
        data : { pageTitle: 'Validation' },
        templateUrl: 'client/modules/forms/views/validation.ng.html',
      })
      .state('core.forms.wizard', {
        url:'/wizard',
        data : { pageTitle: 'Wizard' },
        templateUrl: 'client/modules/forms/views/wizard.ng.html',
      })

    .state('core.charts', {
      url:'/charts',
      data : { pageTitle: 'Charts' },
      templateUrl: 'client/modules/charts/views/charts.ng.html',
    })
        .state('core.charts.google', {
          url:'/google',
          data : { pageTitle: 'Google Charts' },
          controller:"GoogleChartCtrl",
          templateUrl: 'client/modules/charts/views/googlecharts.ng.html',
        })
        .state('core.charts.chartjs', {
          url:'/chartjs',
          data : { pageTitle: 'Angular ChartJS' },
          controller:"ChartJsCtrl",
          templateUrl: 'client/modules/charts/views/chartjs.ng.html',
        })

    // AUTH /////// /////// //////// //////////
    .state('core.login', {
      url: '/login',
      templateUrl: 'client/modules/auth/views/login.ng.html',
      controller: 'LoginCtrl',
      data : { pageTitle: 'Login' },
      controllerAs: 'lc'
    })
    .state('core.register',{
      url: '/register',
      templateUrl: 'client/modules/auth/views/register.ng.html',
      controller: 'RegisterCtrl',
      data : { pageTitle: 'Register' },
      controllerAs: 'rc'
    })
    .state('core.resetpw', {
      url: '/resetpw',
      templateUrl: 'client/modules/auth/views/reset-password.ng.html',
      controller: 'ResetCtrl',
      data : { pageTitle: 'Reset Password' },
      controllerAs: 'rpc'
    })
    .state('core.logout', {
      url: '/logout',
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
