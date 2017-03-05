angular.module('musicApp')
.controller('mainCtrl' , function($scope ,mainService, $rootScope){
  $rootScope.$on("signedIn", function(data) {
    $scope.isSignedIn = $rootScope.isSignedIn;
  })
  $scope.sign = mainService.sign

  (function(){
    $scope.isSignedIn = $rootScope.isSignedIn
  }) ()
})
