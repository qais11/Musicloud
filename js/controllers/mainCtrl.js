angular.module('musicApp')
.controller('mainCtrl' , function($scope ,mainService, $rootScope , $state){
  var logged = false;
  $scope.logged = logged
  $rootScope.$on("isLoggedIn", function () {
    $scope.isLoggedIn = $rootScope.isLoggedIn
    logged = $rootScope.isLoggedIn;
    $scope.logged = logged
    console.log($rootScope.isLoggedIn);
  })
  $scope.sign = mainService.sign

  $scope.getArtist = function () {
    mainService.getArtist($scope.artistName)
    .then(function(result){
        $scope.songData = result.data.results;
        console.log($scope.songData);
    })
  }
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
  $scope.logged = logged
  }
  $scope.addToPlayList = mainService.addToPlayList
  $scope.addTolikes = mainService.addTolikes;
  $scope.newPage = function (){
    $rootScope.isLoggedIn = true;
    $rootScope.$emit("isLoggedIn", {})
    $state.go('home')
};
})
