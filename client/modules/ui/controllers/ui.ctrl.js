'use strict';
/**
 * @ngdoc function
 * @name dashboard.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dashboard
 */
angular.module('app.ui')
  .controller('UICtrl', ['$scope', '$rootScope', '$meteor', '$location', 'UIService', UICtrl ])
  ;


function UICtrl($scope, $rootScope, $meteor, $location, UIService) {
  // SLIDER COLOR
  $scope.color = {
    red: Math.floor(Math.random() * 255),
    green: Math.floor(Math.random() * 255),
    blue: Math.floor(Math.random() * 255)
  };

  // BUTTONS
  $scope.title1 = 'Button';
  $scope.title4 = 'Warn';
  $scope.isDisabled = true;
  $scope.googleUrl = 'http://google.com';

  //datepicker
  $scope.myDate = new Date();
  $scope.minDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() - 2,
      $scope.myDate.getDate());
  $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 2,
      $scope.myDate.getDate());

  // TABS
  var tabs = [
          { title: 'One', content: "Tabs will become paginated if there isn't enough room for them."},
          { title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},
          { title: 'Three', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
          { title: 'Four', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
          { title: 'Five', content: "If you remove a tab, it will try to select a new one."},
          { title: 'Six', content: "There's an ink bar that follows the selected tab, you can turn it off if you want."},
          { title: 'Seven', content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab."},
          { title: 'Eight', content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!"},
          { title: 'Nine', content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs."},
          { title: 'Ten', content: "If you're still reading this, you should just go check out the API docs for tabs!"}
        ],
        selected = null,
        previous = null;
  $scope.tabs = tabs;
  $scope.selectedIndex = 2;
  $scope.$watch('selectedIndex', function(current, old){
    previous = selected;
    selected = tabs[current];
  });
  $scope.addTab = function (title, view) {
    view = view || title + " Content View";
    tabs.push({ title: title, content: view, disabled: false});
  };
  $scope.removeTab = function (tab) {
    var index = tabs.indexOf(tab);
    tabs.splice(index, 1);
  };


}
