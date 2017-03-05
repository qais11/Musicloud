angular.module('musicApp')
.service('mainService' , function($state, $rootScope){
this.sign =  function(name , password){
  if(name === 'admin' && password === 'admin'){
    $rootScope.isSignedIn = true
    $rootScope.$emit("signedIn", {})
     $state.go('home')
 }
 else if (name !== 'admin' && password !== "admin") {
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

})
