angular.module('musicApp')
.directive('appDirective' , function(){

  return{
    restrict:"E"
  , templateUrl:'templates/playDirective.html'
  , controller: 'homeCtrl'
  , link: function(scope){
      getWavesurfer(scope);
    }
  }

})
