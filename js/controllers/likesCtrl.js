angular.module('musicApp')
.controller('likesCtrl' , function($scope , mainService){

  $scope.songData = mainService.likes;
  console.log($scope.songData);
  $scope.addTolikes = mainService.addTolikes;


})
