angular
  .module('app.maps')
  .controller('MapsCtrl', function($scope) {
    $scope.googlemap = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

  });
