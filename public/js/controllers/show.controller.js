angular.module('movieApp')
.controller('MovieShowController', [
  'Movie',
  '$stateParams',
  MovieShowController
])

function MovieShowController (Movie, $stateParams) {
  // console.log(#);
  this.movie = Movie.get({ _id: $stateParams.id })
}
