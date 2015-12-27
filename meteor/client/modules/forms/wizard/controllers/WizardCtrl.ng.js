'use strict';
/**
 * @ngdoc function
 * @name dashboard.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dashboard
 */
angular.module('app.forms')
  .controller('WizardCtrl', ['$scope', '$rootScope', '$meteor', '$location', WizardCtrl ]);

function WizardCtrl($scope, $rootScope, $meteor, $location) {
  $scope.price = "20";
  $scope.message= "";
  $scope.showStartWizard = false;

  // we will store all of our form data in this object
  $scope.user = {
    company : '',
    firstName: '',
    lastName: '',
    state: '',
    city: '',
    postalCode: '',
    address: '',
    biography: '',
  };
  $scope.card = {
      fullName: '',
      number: '',
      cvc: '',
      expireMonth: '',
      expireYear: '',
  };

  /** True when Search Button pressed */
  $scope.searched = false;
  /** True when querying server */
  $scope.loading = false;


  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    console.log(toState);
    // If we are on just "core.forms.wizard", show start button
    if ( toState.url == '/wizard' ) {
        $scope.showStartWizard = true;
    } else {
        $scope.showStartWizard = false;
    }
  });


  $scope.start = function () {
    $scope.wizardStarted = true;
  }

  // function to process the form
  $scope.postResults = function () {
    $scope.loading=true;
    var valid_msg = $scope.validateFormData($scope.formData ) ;
    if ( valid_msg.indexOf("yes") > -1) {
      // Get(Query) records from server into local/client Minimongo
      // THEN 'query' client Minimongo for all Records
      /**
      var subscription = $meteor.subscribe('recordsByFormData', $scope.formData);
      subscription.then(function() {
        // Process ALL RECORDS in local DB
        $scope.processRecords( $meteor.collection(Records) );
        // Done loading when records processed
        $scope.loading=false;
      });
      */

    } else {
      $scope.loading=false;
      console.log(valid_msg);
    }
  }

  $scope.validateFormData = function (formData ) {
    // validate time input
    return 'yes';
  }

  $scope.exploreAgain = function () {
    $scope.searched = false;
    $scope.avgChart = null;
    $scope.tableChart = null;
    //$scope.$apply();
    //$location.path('/explorer/times');
  }

  $scope.states = [ 'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming'
    ];
}
