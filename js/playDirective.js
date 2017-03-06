angular.module('musicApp')
.directive('playDirective' , function(){

    return {
      restrict:'E'
     ,templateUrl:'templates/playDirective.html'
     ,link : function(scope){
       var wavesurfer = WaveSurfer.create({
           container: '#waveform',
           scrollParent: true,
           progressColor: '#ff6940',
           waveColor: 'lightgray',
           barWidth: 2,
           height: 65
         });
         wavesurfer.on('ready', function () {
           wavesurfer.play();

         });
         scope.wavesurfer = wavesurfer;
         scope.playSong = function(song){
             wavesurfer.play()
             wavesurfer.load(song)

         }

      }
     }
})
