function getWavesurfer(scope){
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
        console.log(song);
        wavesurfer.load(song)
        var currentPage = window.location.href;

        // listen for changes
        setInterval(function()
        {
          if (currentPage != window.location.href)
          {
            // page has changed, set new page as 'current'
            currentPage = window.location.href;
            wavesurfer.stop();

          }
        }, 0);

    }
}
var hidePlay = function( obj ){
  showWaveform();
  obj.style.display = 'none';
  $(obj).next().show();

}
var hideStop = function( obj ){
  hideWaveform()
  obj.style.display = 'none';
  $('button.stop').hide();
  $('button.play').show();
  $(obj).prev().show();

}
function showWaveform(){
  $('#waveform').animate({
    bottom : '0'
  })
}
function hideWaveform(){
  $('#waveform').animate({
    bottom: '-65px'
  })
}
function hightlight(obj){
  $(obj).toggleClass('hightlight');
}
$('.menu-img').click(function(){
  console.log('hi');
  $('.my-dropdown-menu').fadeIn( 300 )
})
$('section , .my-dropdown-menu a').click(function(){
  $('.my-dropdown-menu').hide()
})
