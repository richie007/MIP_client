angular.module('someklone.controllers', [])

.controller('HomeCtrl', function($scope, Posts) {
    Posts.following().then(function(data)
        {
            $scope.posts = data;
        }
    );
})

.controller('BrowseCtrl', function($scope, $state) {

    $scope.activateSearch = function()
    {
        $state.go('tab.browse-search');
    }

    $scope.browseDetail = function(id)
    {
        $state.go('tab.browse-detail', { id: id });
    }

})
.controller('MyCtrl', function($scope, Camera) {

   $scope.takePicture = function (options) {

      var options = {
         quality : 75,
         targetWidth: 200,
         targetHeight: 200,
         sourceType: 1
      };

      Camera.getPicture(options).then(function(imageData) {
         $scope.picture = imageData;;
      }, function(err) {
         console.log(err);
      });

   };

})

.controller('BrowseDetailCtrl', function($scope, $stateParams) {
    console.log($stateParams);
})

.controller('SearchCtrl', function($scope, $state, $ionicHistory, Users) {

    $scope.input = {
        searchText: ""
    };

    $scope.searchResults = {
        people: [],
        tags: []
    }

    $scope.tabs = {
        people: true,
        tags: false
    }

    $scope.goBack = function()
    {
        $ionicHistory.nextViewOptions({
            disableBack: true
        });

        $state.go('tab.browse');
    }

    $scope.emptySearch = function()
    {
        $scope.input.searchText = "";
    }

    $scope.tabActivate = function(tab)
    {
        for (var k in $scope.tabs) {
            if ($scope.tabs.hasOwnProperty(k))
            {
                $scope.tabs[k] = false;
            }
        }
        $scope.tabs[tab] = true;
    }

    $scope.updateSearch = function()
    {
        if($scope.tabs.people == true)
        {
            Users.searchUser($scope.input.searchText).then(function(result) {
                $scope.searchResults.people = result;
            });
        }
        else // search for posts with tags
        {

        }
    }



})

.controller('PostCtrl', function($scope, $state, $ionicHistory) {

    $scope.tabs = {
        gallery: true,
        photo: false
    }

    $scope.goBack = function()
    {
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $state.go('tab.home');
    }

    $scope.photo = function()
    {
        $scope.tabs.photo = true;
        $scope.tabs.gallery = false;

        // activate camera
    }

    $scope.gallery = function()
    {
        $scope.tabs.photo = false;
        $scope.tabs.gallery = true;

        // fetch photos
    }

    $scope.confimPost = function()
    {
        $state.go('post-confirm');
    }

})
// .controller('ImageController', function($scope, $cordovaDevice, $cordovaFile, $ionicPlatform, $ionicActionSheet, ImageService, FileService, $timeout) {
//    $ionicPlatform.ready(function() {
//      $scope.images = FileService.images();
//     // if(!$scope.$$phase) {
//     //
//     // }
//      $timeout(function(){
//        $scope.$apply();
//      }, 0);
//    });
//    $scope.urlForImage = function(imageName) {
//      var trueOrigin = cordova.file.dataDirectory + imageName;
//      return trueOrigin;
//    };
//    $scope.addMedia = function() {
//      $scope.hideSheet = $ionicActionSheet.show({
//        buttons: [
//          { text: 'Take photo' },
//          { text: 'Photo from library' }
//        ],
//        titleText: 'Add images',
//        cancelText: 'Cancel',
//        buttonClicked: function(index) {
//          $scope.addImage(index);
//        }
//      });
//    };
//    $scope.addImage = function(type) {
//      $scope.hideSheet();
//      ImageService.handleMediaDialog(type).then(function() {
//        $scope.$apply();
//      });
//    }
//  })

.controller('PostConfirmCtrl', function($scope, $state, $ionicHistory){
    $scope.goBack = function()
    {
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $state.go('post');
    }

    $scope.sharePost = function()
    {
        console.log("not implemented yet");
    }
})

.controller('ActivityCtrl', function($scope, Users) {
    $scope.activity = Users.getActiveUserActivity();
})

.controller('AccountCtrl', function($scope, Users, Posts) {
    $scope.userData = Users.getActiveUser();

    Posts.getUserPosts($scope.userData.id).then(function(results){
        $scope.posts = results;
    });
});
