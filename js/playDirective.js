angular.module('musicApp')
.directive('playDirective' , function(){

    return {
      restrict:'E'
     ,templateUrl:'templates/playDirective.html'
     ,link : function(scope){
       getWavesurfer(scope)

      }
     }
})
