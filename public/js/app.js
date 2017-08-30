/* global angular */
angular.module('movieApp', [
  'ui.router',
  'ngResource'
])
.config([
  '$stateProvider',
  '$locationProvider',
  RouterFunction
])

function RouterFunction ($stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true)
  $stateProvider
  .state('movieIndex', {
    // doesn't work why?
    //     url: '/movies',
    url: '/movies',
    templateUrl: 'js/ng-views/index.html',
    controller: 'MovieIndexController',
    controllerAs: 'vm'
  })
  $stateProvider
  .state('movieShow', {
    // doesn't work why?
    //     url: '/movies',
    url: '/movies/:id',
    templateUrl: 'js/ng-views/show.html',
    controller: 'MovieShowController',
    controllerAs: 'vm'
  })
}
