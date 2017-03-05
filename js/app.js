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
      , controller: 'mainCtrl'
    })
    .state('playlist', {
        url : '/playlist'
      , templateUrl : './templates/playlist.html'
      , controller: 'mainCtrl'
    })
    .state('search-results', {
        url : '/search-results'
      , templateUrl : './templates/search-results.html'
      , controller: 'mainCtrl'
    })

  $urlRouterProvider.otherwise('/')
})
