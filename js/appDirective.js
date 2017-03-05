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
    // var wavesurfer = WaveSurfer.create({
    //     container: '.waveform',
    //     scrollParent: true,
    //     barWidth: 1.7
    //   });
    //   wavesurfer.load('../test.m4a');
    //
    //   wavesurfer.on('ready', function () {
    //     wavesurfer.play();
    //
    //   });
    //   scope.wavesurfer = wavesurfer;
    //

  }
  }

})
