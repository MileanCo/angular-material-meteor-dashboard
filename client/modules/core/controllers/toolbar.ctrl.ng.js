angular.module('app.core')
.controller('ToolbarCtrl', function($scope, $mdDialog) {
  $scope.notifications = [
    {icon: "fa fa-twitter", title: "Twitter", text:"You have 5 new followers"},
    {icon: "fa fa-user", title: " Friend requests", text:"You have 3 new friend requests"},
    {icon: "fa fa-tasks", title: "Pending tasks", text:"You have 3 pending tasks"},
  ];

  $scope.messages = [
    {avatar: "images/avatars/malecostume.svg", user: "Joey", text: "lorem ipsum diaga simone al paramana elo fateta..."},
    {avatar: "images/avatars/matureman1.svg", user: "David", text: "lorem ipsum diaga simone al paramana elo fateta..."},
    {avatar: "images/avatars/female1.svg", user: "Sarah", text: "lorem aipsum diaga simone al paramana..."},
  ];

  $scope.goToNotification = function(person, event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Navigating')
        .textContent('Inspect ' + person)
        .ariaLabel('Person inspect demo')
        .ok('Neat!')
        .targetEvent(event)
    );
  };
  $scope.navigateTo = function(to, event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Navigating')
        .textContent('Imagine being taken to ' + to)
        .ariaLabel('Navigation demo')
        .ok('Neat!')
        .targetEvent(event)
    );
  };
  $scope.doPrimaryAction = function(event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Primary Action')
        .textContent('Primary actions can be used for one click actions')
        .ariaLabel('Primary click demo')
        .ok('Awesome!')
        .targetEvent(event)
    );
  };
  $scope.doSecondaryAction = function(event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Secondary Action')
        .textContent('Secondary actions can be used for one click actions')
        .ariaLabel('Secondary click demo')
        .ok('Neat!')
        .targetEvent(event)
    );
  };
});
