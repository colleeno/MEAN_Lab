angular.module('movieApp')
.controller('MovieShowController', [
  'Movie',
  '$stateParams',
  MovieShowController
])

function MovieShowController (Movie, $stateParams) {
  console.log($stateParams);
  this.movie = Movie.get({ id: $stateParams.id })
}
