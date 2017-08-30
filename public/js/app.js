/* global angular */
angular.module('movieApp', [
  'ui.router',
  'ngResource'
])
.config([
  '$stateProvider',
  RouterFunction
])

function RouterFunction ($stateProvider) {
  $stateProvider
  .state('movieIndex', {
    url: '/movies',
    templateUrl: 'js/ng-views/index.html',
    controller: 'MovieIndexController',
    controllerAs: 'vm'
  })
}
