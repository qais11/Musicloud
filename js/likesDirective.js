angular.module('musicApp')
.directive('likesDirective' , function(){
  return {

    restrict: 'E'
   ,templateUrl:'templates/playDirective.html'
   ,controller: 'likesCtrl'
   ,link: function(scope){
     getWavesurfer(scope);
   }

  }
})
