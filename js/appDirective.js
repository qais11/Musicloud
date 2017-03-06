angular.module('musicApp')
.directive('appDirective' , function(){

  return{
    restrict:"E"
  , templateUrl:'templates/playDirective.html'
  , scope:{

  }
  , controller: 'homeCtrl'
  , link: function(scope){

    // var wav = getElementsByClassName('waveform')
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
