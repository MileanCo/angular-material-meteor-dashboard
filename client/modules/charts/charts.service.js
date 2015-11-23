/**
TIPS:
Services DO NOT have $scope !
Services are GLOBAL to the application/all controllers that use it.
IN THIS application; Services are only used on "Pages"
*/


angular.module('app.charts')
  // '$cookieStore' // TO-DO: ADD THIS
 .factory('ExplorerService', ['$http', '$rootScope', '$timeout', ExplorerService ]);


function ExplorerService ($http, $cookieStore, $rootScope, $timeout) {
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

    service.getGraphData = function () {
      return service.teams;
    }

    return service;
};
