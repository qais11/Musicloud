angular.module('musicApp')
.controller('mainCtrl' , function($scope ,mainService, $rootScope , $state){
  var logged = false;
  $rootScope.$on("isLoggedIn", function () {
    $scope.isLoggedIn = $rootScope.isLoggedIn
    logged = $rootScope.isLoggedIn;
    console.log($rootScope.isLoggedIn);
  })

  $scope.sign = mainService.sign

  $scope.getArtist = function () {
    mainService.getArtist($scope.artistName)
    .then(function(result){
      // console.log(result);
        $scope.songData = result.data.results;
        console.log($scope.songData);
    })
  }
  $scope.getRandomSongs = function () {
    mainService.getArtist('hi')
    .then(function(result){
        $scope.randomSongs = result.data.results;
    })
  }
  $scope.getRandomSongs()


  $scope.goToSearchResults = function(){
    // ng-keydown
    if(logged){
      $state.go('search-results');
    //   console.log('qais');
    }
    else{
      alert("please Sign In")
    }

  }

  $scope.signOut = function(){
  $state.go('login')
  logged = false;
  }

})
