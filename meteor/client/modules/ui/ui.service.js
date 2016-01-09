/**
TIPS:
Services DO NOT have $scope !
Services are GLOBAL to the application/all controllers that use it.
IN THIS application; Services are only used on "Pages"
*/

// NOT USED CURRENTLY
angular.module('app.ui')
  // '$cookieStore' // TO-DO: ADD THIS
 .factory('UIService', ['$http', '$rootScope', '$timeout', UIService ]);


function UIService ($http, $rootScope, $timeout) {
    var service = {
        teams : null,
    	  //graphJson : null,
    };

    //use on changing clients
    service.clearAll = function() {
      service.teams = null;
    };

    service.setResults = function (teams) {
      service.teams = teams;

    }

    return service;
};
