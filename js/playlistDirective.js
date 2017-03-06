angular.module('musicApp')
.directive('playlistDirective' , function(){
  return {

    restrict: 'E'
   ,templateUrl:'templates/playDirective.html'
   ,controller: 'playlistCtrl'
   ,link: function(scope){
     getWavesurfer(scope);
   }

  }
})
