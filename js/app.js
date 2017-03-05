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
    })
    .state('about', {
        url : '/about'
      , templateUrl : './templates/about.html'
    })
    .state('likes', {
        url : '/likes'
      , templateUrl : './templates/likes.html'
    })
    .state('playlist', {
        url : '/playlist'
      , templateUrl : './templates/playlist.html'
    })
    .state('search-results', {
        url : '/search-results'
      , templateUrl : './templates/search-results.html'
    })

  $urlRouterProvider.otherwise('/')
})
