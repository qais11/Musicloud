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
          // console.log(response.data.results[0].artistName);
            var dataArr =[];
            var responseArray = response.data.results
                  for (var i =0 ; i <responseArray.length ; i++){
                    var songData = {
                      AlbumArt : responseArray[i].artworkUrl60,
                    Artist : responseArray[i].artistName,
                    Song : responseArray[i].trackName,
                    Collection : responseArray[i].collectionName,
                    CollectionPrice : responseArray[i].collectionPrice,
                    Play : responseArray[i].previewUrl,
                    Type : responseArray[i].primaryGenreName

                }
                dataArr.push(songData)
            }
    })
  }




})
