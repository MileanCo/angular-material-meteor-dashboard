
angular.module("app.dashboard")
  .controller("DashboardCtrl", ['$scope', '$rootScope', '$meteor', '$state', '$location', '$mdToast', function ($scope, $rootScope, $meteor, $state, $location, $mdToast) {

    // LINE CHART
    $scope.line = {};
    $scope.line.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.line.series = ['Visitors', 'New Users'];
    $scope.line.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

    // Map
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

    // SOLD CHART
    $scope.sold = {};
    $scope.sold.options = {
      chart: {
         type: "pieChart",
         height: 255,
         x: function(d) {return d.key;},
         y: function(d) {return d.y;},
         showLabels: false,
         duration: 700,
         labelThreshold: 0.01,
         labelSunbeamLayout: true,
         legend: {
           /**
           "margin": {
             "top": 5,
             "right": 35,
             "bottom": 5,
             "left": 0
           }*/
         }
       },
       "title": {
        "enable": true,
        "text": "Units Sold",
        "className": "h3",
        "css": {
          //"width": "500px",
          "margin-top": "15px",
          "textAlign": "center",
        }
      },
     };
     $scope.sold.data = [
         {
             key: "Product 0",
             y: 78
         },
         {
             key: "Product 1",
             y: 128
         },
         {
             key: "Product 2",
             y: 256
         },
     ];

    // MONEY CHART
    $scope.sales = {};
    $scope.sales.options = {
            "chart": {
                type: 'multiBarChart',
                height: 200,
                clipEdge: true,
                duration: 1400,
                stacked: true,
                showControls: false,
                xAxis: {
                    axisLabel: 'Time (months)',
                    showMaxMin: false,
                    tickFormat: function(d){
                        return "Month: " + d3.format(',f')(d);
                    }
                },
                yAxis: {
                    axisLabel: 'Revenue ($)',
                    axisLabelDistance: -20,
                    tickFormat: function(d){
                        return d3.format(',.1f')(d);
                    }
                }
            },
          "title": {
            "enable": true,
            "text": "Monthly Sales",
            "className": "h3",
            "css": {
              "width": "nullpx",
              "textAlign": "center"
            }
          },
          "subtitle": {
            "enable": false,
            "text": "Write Your Subtitle",
            "css": {
              "width": "nullpx",
              "textAlign": "center"
            }
          },
        };

        $scope.sales.data = generateData();
        console.log("data:");
        console.log($scope.sales.data);

        $scope.revenue = {};
        $scope.revenue.options = {
            chart: {
                type: 'bulletChart',
                transitionDuration: 500
            }
        };
        $scope.revenue.data = {
            "title": "Revenue",
            "subtitle": "US$ (Thousands))",
            "ranges": [150,225,300],
            "measures": [220],
            "markers": [250]
        }

        function getProductName(i) {
          return "Product " + i;
          /**
          if (i == 0) return "Product 1";
          if (i == 1) return "Store";
          if (i == 2) return "Retailer";*/
        }

        /* Random Data Generator (took from nvd3.org) */
        function generateData() {
            return stream_layers(3,50+Math.random()*50,.1).map(function(data, i) {
                return {
                    key: getProductName(i),//'Product ' + i,
                    values: data
                };
            });
        }

        /* Inspired by Lee Byron's test data generator. */
        function stream_layers(n, m, o) {
            if (arguments.length < 3) o = 0;
            function bump(a) {
                var x = 1 / (.1 + Math.random()),
                    y = 2 * Math.random() - .5,
                    z = 10 / (.1 + Math.random());
                for (var i = 0; i < m; i++) {
                    var w = (i / m - y) * z;
                    a[i] += x * Math.exp(-w * w);
                }
            }
            return d3.range(n).map(function() {
                var a = [], i;
                for (i = 0; i < m; i++) a[i] = o + o * Math.random();
                for (i = 0; i < 5; i++) bump(a);
                return a.map(stream_index);
            });
        }

        /* Another layer generator using gamma distributions. */
        function stream_waves(n, m) {
            return d3.range(n).map(function(i) {
                return d3.range(m).map(function(j) {
                    var x = 20 * j / m - i / 3;
                    return 2 * x * Math.exp(-.5 * x);
                }).map(stream_index);
            });
        }

        function stream_index(d, i) {
            return {x: i, y: Math.max(0, d)};
        }


    var vm = this;
    vm.error = '';

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
              $location.url("/dashboard/home");
              break;
          case 1:
              $location.url("/dashboard/profile");
              break;
          case 2:
              $location.url("/dashboard/instances");
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
