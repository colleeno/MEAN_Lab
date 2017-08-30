/* global angular */
angular.module('movieApp', [
  'ui.router',
  'ngResource'
])
.config([
  '$stateProvider',
  '$locationProvider',
  '$urlRouterProvider',
  RouterFunction
])

function RouterFunction ($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true)
  $stateProvider
  .state('movieIndex', {
    url: '/movies',
    templateUrl: 'js/ng-views/index.html',
    controller: 'MovieIndexController',
    controllerAs: 'vm'
  })
  $stateProvider
  .state('movieNew', {
    url: '/movies/new',
    templateUrl: 'js/ng-views/new.html',
    controller: 'MovieNewController',
    controllerAs: 'vm'
  })
  $stateProvider
  .state('movieShow', {
    url: '/movies/:id',
    templateUrl: 'js/ng-views/show.html',
    controller: 'MovieShowController',
    controllerAs: 'vm'
  })
  $urlRouterProvider.otherwise('/movies')
}
