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
        SITENAME : "Frozen",
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
    .state('core.documentation', {
      url: '/documentation',
      templateUrl: 'client/modules/core/views/documentation.ng.html',
      ncyBreadcrumb: {
        label: 'documentation' // display Page title still
      },
      controller: 'DocumentationCtrl',
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
          // Resolves the promise successfully if a user is authenticated and rejects otherwise.
          return $meteor.requireUser();
        }
      }
    })
        .state('core.dashboard.home', {
          url: '/home',
          templateUrl: 'client/modules/dashboard/views/example1.ng.html',
          ncyBreadcrumb: {
            label: 'Home'
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


    // Material UI //////////////////////////////////////////
    .state('core.ui', {
      url:'/ui',
      controller: 'UICtrl',
      ncyBreadcrumb: {
        label: 'Material UI'
      },
      templateUrl: 'client/modules/ui/views/ui.ng.html',
    })
      .state('core.ui.buttons', {
        url:'/buttons',
        ncyBreadcrumb: {
          label: 'Buttons'
        },
        templateUrl: 'client/modules/ui/views/buttons.ng.html',
      })
      .state('core.ui.cards', {
        url:'/cards',
        ncyBreadcrumb: {
          label: 'Material Cards'
        },
        templateUrl: 'client/modules/ui/views/cards.ng.html',
      })
      .state('core.ui.components', {
        url:'/components',
        ncyBreadcrumb: {
          label: 'Components'
        },
        templateUrl: 'client/modules/ui/views/components.ng.html',
      })
      .state('core.ui.tabs', {
        url:'/tabs',
        ncyBreadcrumb: {
          label: 'Tabs'
        },
        templateUrl: 'client/modules/ui/views/tabs.ng.html',
      })
      .state('core.ui.icons', {
        url:'/icons',
        ncyBreadcrumb: {
          label: 'Icons'
        },
        templateUrl: 'client/modules/ui/views/icons.ng.html',
      })
      .state('core.ui.timeline', {
        url:'/timeline',
        controller: 'TimelineCtrl',
        controllerAs: 'ctrl',
        ncyBreadcrumb: {
          label: 'Timeline'
        },
        templateUrl: 'client/modules/ui/views/timeline.ng.html',
      })
      .state('core.ui.typography', {
        url:'/typography',
        ncyBreadcrumb: {
          label: 'Typography'
        },
        templateUrl: 'client/modules/ui/views/typography.ng.html',
      })
      .state('core.ui.widgets', {
        url:'/widgets',
        //controller: 'WidgetsCtrl',
        ncyBreadcrumb: {
          label: 'Widgets'
        },
        templateUrl: 'client/modules/ui/views/widgets.ng.html',
      })



    .state('core.tables-static', {
      url:'/tables/static',
      ncyBreadcrumb: {
        label: 'Static Tables'
      },
      templateUrl: 'client/modules/tables/views/static-table.ng.html',
    })
    .state('core.tables-dynamic', {
      url:'/tables/dynamic',
      ncyBreadcrumb: {
        label: 'Dynamic Tables'
      },
      controller: "TableCtrl",
      templateUrl: 'client/modules/tables/views/dynamic-table.ng.html',
    })

    // FORMS //////////////////////////////////////////
    .state('core.forms', {
      url:'/forms',
      controller: 'FormsCtrl',
      ncyBreadcrumb: {
        label: 'Forms'
      },
      templateUrl: 'client/modules/forms/views/forms.ng.html',
    })
      .state('core.forms.elements', {
        url:'/elements',
        ncyBreadcrumb: {
          label: 'Material Elements'
        },
        templateUrl: 'client/modules/forms/views/elements.ng.html',
      })
      // WIZARD ////////////////
      .state('core.forms.wizard', {
        url:'/wizard',
        controller:'WizardCtrl',
        ncyBreadcrumb: {
          label: 'Wizard'
        },
        data: {showStartWizard: true,},
        templateUrl: 'client/modules/forms/wizard/views/wizard.ng.html',
      })
          .state('core.forms.wizard.profile', {
            url:'/profile',
            ncyBreadcrumb: {
              label: 'Profile'
            },
            templateUrl: 'client/modules/forms/wizard/views/profile.ng.html',
          })
          .state('core.forms.wizard.payment', {
            url:'/payment',
            ncyBreadcrumb: {
              label: 'Payment'
            },
            templateUrl: 'client/modules/forms/wizard/views/payment.ng.html',
          })
          .state('core.forms.wizard.launch', {
            url:'/launch',
            ncyBreadcrumb: {
              label: 'Launch'
            },
            templateUrl: 'client/modules/forms/wizard/views/launch.ng.html',
          })

    // CHARTS //////////////////////////////////////////
    .state('core.charts', {
      url:'/charts',
      ncyBreadcrumb: {
        label: 'Charts'
      },
      templateUrl: 'client/modules/charts/views/charts.ng.html',
    })
        .state('core.charts.google', {
          url:'/google',
          ncyBreadcrumb: {
            label: 'Google Charts'
          },
          controller:"GoogleChartCtrl",
          templateUrl: 'client/modules/charts/views/googlecharts.ng.html',
        })
        .state('core.charts.chartjs', {
          url:'/chartjs',
          ncyBreadcrumb: {
            label: 'Angular ChartJS'
          },
          controller:"ChartJsCtrl",
          templateUrl: 'client/modules/charts/views/chartjs.ng.html',
        })
        .state('core.charts.nvd3', {
          url:'/nvd3',
          ncyBreadcrumb: {
            label: 'nvD3 Charts'
          },
          controller:"nvD3Ctrl",
          templateUrl: 'client/modules/charts/views/nvd3.ng.html',
        })

    // CHARTS //////////////////////////////////////////
    .state('core.maps', {
      url:'/maps',
      ncyBreadcrumb: {
        label: 'Maps'
      },
      templateUrl: 'client/modules/maps/views/maps.ng.html',
    })
        .state('core.maps.googlemaps', {
          url:'/googlemaps',
          ncyBreadcrumb: {
            label: 'Google Maps'
          },
          controller:"MapsCtrl",
          templateUrl: 'client/modules/maps/views/googlemaps.ng.html',
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
