var hidePlay = function( obj ){
  showWaveform();
  obj.style.display = 'none';
  // $('button.play').hide();
  // $('button.stop').show();
  $(obj).next().show();
  // $('test ~ button').show()
  // $(obj + '+ button').css('display' , 'inline-block')
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
