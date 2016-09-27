angular.module('starter.controllers', [])
.controller('DashCtrl', function($scope, Postvars) {
  $scope.postctrlscope = Postvars.all();

})
.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
  Chats.remove(chat);
};
})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {

$scope.chat = Chats.get($stateParams.chatId);

})
.controller('AccountCtrl', function($scope ) {
  // $scope.profilectrlscope = Profiles.all();
$scope.settings = {
  enableFriends: true
};

})
.controller('CameraCtrl', function($scope) {
})
.controller('NotificationCtrl', function($scope) {
});
