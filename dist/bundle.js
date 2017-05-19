angular.module('musicApp' , ['ui.router'])
.config(function($stateProvider , $urlRouterProvider, $sceProvider) {
  $sceProvider.enabled(false)
  $stateProvider
    .state('login', {
        url : '/'
      , templateUrl : './templates/login.html'
      , controller: 'mainCtrl'
    })
    .state('home', {
        url : '/home'
      , templateUrl : './templates/home.html'
      ,controller:'homeCtrl'
    })
    .state('about', {
        url : '/about'
      , templateUrl : './templates/about.html'
      , controller: 'mainCtrl'
    })
    .state('likes', {
        url : '/likes'
      , templateUrl : './templates/likes.html'
      , controller: 'likesCtrl'
    })
    .state('playlist', {
        url : '/playlist'
      , templateUrl : './templates/playlist.html'
      , controller: 'playlistCtrl'
    })
    .state('search-results', {
        url : '/search-results'
      , templateUrl : './templates/search-results.html'
      , controller: 'mainCtrl'
    })

  $urlRouterProvider.otherwise('/')
})

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

angular.module('musicApp')
.service('mainService' , function($state , $rootScope , $http , $q ){
this.sign =  function(name , password){
  if(name === 'admin' && password === 'admin'){
    $rootScope.isLoggedIn = true;
    $rootScope.$emit("isLoggedIn", {})
    $state.go('home')
   }
  if (name !== 'admin' && password !== "admin") {
     document.querySelector('.name').style.border = '1px solid red'
     document.querySelector('.password').style.border = '1px solid red'
     var warrning = document.getElementById('warrning');
     warning.style.display = 'inline-block';
   }
   else if (name !== "admin") {
    document.querySelector('.password').style.border = '1px solid #ccc'
    document.querySelector('.name').style.border = '1px solid red'
    var warrning = document.getElementById('warrning');
    warning.style.display = 'inline-block';
    warning.innerText = "Invalid name"
   }
   else {
     document.querySelector('.password').style.border = '1px solid red'
     document.querySelector('.name').style.border = '1px solid #ccc'
     var warrning = document.getElementById('warrning');
     warning.style.display = 'inline-block';
     warning.innerText = "Invalid password"

   }
  }
  this.getArtist = function(artistName){
        return $http({
              method:'JSONP',
              url:'http://itunes.apple.com/search?term=' + artistName,
        }).then(function(response){
          return response
    })
  }
  var self = this
  this.playlist = [];
  this.likes = [];
  this.addToPlayList = function(obj){
    for (var i = 0 ; i < self.playlist.length ; i++){
      if(self.playlist[i].previewUrl === obj.previewUrl){
        self.playlist.splice(i , 1)
        return;
      }
    }
  self.playlist.push(obj)
 }

 this.addTolikes = function(obj){
   for (var i = 0 ; i < self.likes.length ; i++){
     if(self.likes[i].previewUrl === obj.previewUrl){
       self.likes.splice(i , 1)
       console.log(self.likes , 'Removed');
       return;
     }
   }
 self.likes.push(obj)

 console.log(self.likes , 'addedd');
}



})

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
  console.log('clicked');
  $('.my-dropdown-menu').fadeIn( 300 )
})
$('section , .my-dropdown-menu a').click(function(){
  $('.my-dropdown-menu').hide()
})

angular.module('musicApp')
.controller('homeCtrl' , function($scope , mainService){

  $scope.getArtist = function () {
    mainService.getArtist('jazz')
    .then(function(result){
        $scope.songData = result.data.results;
        console.log($scope.songData);
    })
  }
  $scope.getArtist();
  $scope.addToPlayList = mainService.addToPlayList;
  $scope.addTolikes = mainService.addTolikes;
  
})

angular.module('musicApp')
.controller('likesCtrl' , function($scope , mainService){

  $scope.songData = mainService.likes;
  console.log($scope.songData);
  $scope.addTolikes = mainService.addTolikes;


})

angular.module('musicApp')
.controller('mainCtrl' , function($scope ,mainService, $rootScope , $state){
  var logged = false;
  $scope.logged = logged
  $rootScope.$on("isLoggedIn", function () {
    $scope.isLoggedIn = $rootScope.isLoggedIn
    logged = $rootScope.isLoggedIn;
    $scope.logged = logged
    console.log($rootScope.isLoggedIn);
  })
  $scope.sign = mainService.sign

  $scope.getArtist = function () {
    mainService.getArtist($scope.artistName)
    .then(function(result){
        $scope.songData = result.data.results;
        console.log($scope.songData);
    })
  }
  $scope.goToSearchResults = function(){
    // ng-keydown
    if(logged){
      $state.go('search-results');
    //   console.log('qais');
    }
    else{
      alert("please Sign In")
    }

  }
  $scope.signOut = function(){
  $state.go('login')
  logged = false;
  $scope.logged = logged
  }
  $scope.addToPlayList = mainService.addToPlayList
  $scope.addTolikes = mainService.addTolikes;
  $scope.newPage = function (){
    $rootScope.isLoggedIn = true;
    $rootScope.$emit("isLoggedIn", {})
    $state.go('home')
};
})

angular.module('musicApp')
.controller('playlistCtrl' , function($scope , mainService){

  $scope.songData = mainService.playlist;
  $scope.addToPlayList = mainService.addToPlayList;
  $scope.addTolikes = mainService.addTolikes;


})
