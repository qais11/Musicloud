angular.module('musicApp')
.controller('homeCtrl' , function($scope , mainService){

  $scope.getArtist = function () {
    mainService.getArtist('jazz')
    .then(function(result){
        $scope.songData = result.data.results;
        console.log($scope.songData);
    })
  }
  $scope.getArtist();
  $scope.addToPlayList = mainService.addToPlayList;
  $scope.addTolikes = mainService.addTolikes;

})
