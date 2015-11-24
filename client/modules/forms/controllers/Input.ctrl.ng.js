'use strict';
/**
 * @ngdoc function
 * @name dashboard.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dashboard
 */
 angular.module('app.forms')
   .controller('InputCtrl', function($scope) {
     $scope.user = {
       title: 'Developer',
       email: 'ipsum@lorem.com',
       firstName: 'Cersei',
       lastName: 'Lannister',
       company: 'Game of Thrones',
       address: '1600 Lannister Way',
       city: 'Westeros',
       state: 'NA',
       biography: 'Loves dragons, swords, brothels, and wine. \n\nAnd rumor has it she bouldered up on the Iron Throne in Westeros!',
       postalCode: '94043'
     };
     $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
     'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
     'WY').split(' ').map(function(state) {
         return {abbrev: state};
       })
  })
 .config(function($mdThemingProvider) {
   // Configure a dark theme with primary foreground yellow
   $mdThemingProvider.theme('docs-dark', 'default')
     .primaryPalette('yellow')
     .dark();
 });
