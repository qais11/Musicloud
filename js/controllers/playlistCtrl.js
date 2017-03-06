angular.module('musicApp')
.controller('playlistCtrl' , function($scope , mainService){

  $scope.songData = mainService.playlist;
  $scope.addToPlayList = mainService.addToPlayList;
  $scope.addTolikes = mainService.addTolikes;


})
