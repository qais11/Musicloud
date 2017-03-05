angular.module('musicApp')
.controller('homeCtrl' , function($scope , mainService){

  $scope.getArtist = function () {
    mainService.getArtist('Love')
    .then(function(result){
      // console.log(result);
        $scope.songData = result.data.results;
        console.log($scope.songData);
    })
  }
  $scope.getArtist();

})
