(function(){
  'use strict';

  angular.module('app.sidemenu')
    .controller('SidemenuCtrl', function ($scope, $rootScope, $timeout, $mdSidenav, $state, $location, $log, MenuService) {
        var vm = this;

        //vars for menu-link and menu-toggle
        vm.autoFocusContent = false;
        vm.menu = MenuService;

        console.log('menu: ', vm.menu)

        vm.status = {
          isFirstOpen: true,
          isFirstDisabled: false
        };

        vm.isOpen = function (section) {
          return MenuService.isSectionSelected(section);
        }

        vm.toggleOpen = function (section) {
          MenuService.toggleSelectSection(section);
        }

        vm.isSectionSelected = function (section) {
          var selected = false;
          var openedSection = MenuService.openedSection;
          if(openedSection === section){
            selected = true;
          }
          else if(section.children) {
            section.children.forEach(function(childSection) {
              if(childSection === openedSection){
                selected = true;
              }
            });
          }
          return selected;
        }
        vm.focusSection = function () {
          vm.autoFocusContent = true;
          vm.close("left");
        }
        vm.close = function (side) {
          $mdSidenav(side).close()
            .then(function () {
              $log.debug("close " + side + " is done");
            });
        }

        // MENU TOGGLE STUFF ////////// / / / / //
        $scope.toggleLeft = buildDelayedToggler('left');
        $scope.toggleRight = buildToggler('right');
        $scope.isOpenRight = function(){
          return $mdSidenav('right').isOpen();
        };
        /**
         * Supplies a function that will continue to operate until the
         * time is up.
         */
        function debounce(func, wait, context) {
          var timer;
          return function debounced() {
            var context = $scope,
                args = Array.prototype.slice.call(arguments);
            $timeout.cancel(timer);
            timer = $timeout(function() {
              timer = undefined;
              func.apply(context, args);
            }, wait || 10);
          } ;
        }
        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildDelayedToggler(navID) {
          return debounce(function() {
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug("toggle " + navID + " is done");
              });
          }, 200);
        }
        function buildToggler(navID) {
          return function() {
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug("toggle " + navID + " is done");
              });
          }
        }
    })
    .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    /** close btn
    <md-button ng-click="close()" hide-gt-md aria-label="menu" class="md-icon-button" >
      <md-icon md-font-set="material-icons">menu</md-icon>
    </md-button> */
      $scope.close = function () {
        $mdSidenav('left').close()
          .then(function () {
            $log.debug("close LEFT is done");
          });
      };
    })
    .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
      $scope.close = function () {
        $mdSidenav('right').close()
          .then(function () {
            $log.debug("close RIGHT is done");
          });
      };
    });


})();
