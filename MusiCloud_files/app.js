angular.module('musicApp' , ['ui.router'])
.config(function($stateProvider , $urlRouterProvider) {
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
    .state('search-results', {
        url : '/search-results'
      , templateUrl : './templates/search-results.html'
    })

  $urlRouterProvider.otherwise('/')
})
