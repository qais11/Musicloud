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
              url:'https://itunes.apple.com/search?term=' + artistName,
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
