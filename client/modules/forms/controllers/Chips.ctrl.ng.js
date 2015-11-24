(function () {
  'use strict';
  angular
      .module('app.forms')
      .controller('ChipsCtrl', ChipsCtrl);
  function ChipsCtrl ($timeout, $q) {
    var self = this;
    self.readonly = false;
    // Lists of fruit names and Vegetable objects
    self.fruitNames = ['Apple', 'Banana', 'Orange'];
    self.roFruitNames = angular.copy(self.fruitNames);
    self.tags = [];
    self.vegObjs = [
      {
        'name' : 'Broccoli',
        'type' : 'Brassica'
      },
      {
        'name' : 'Cabbage',
        'type' : 'Brassica'
      },
      {
        'name' : 'Carrot',
        'type' : 'Umbelliferous'
      }
    ];
    self.newVeg = function(chip) {
      return {
        name: chip,
        type: 'unknown'
      };
    };
  }
})();
