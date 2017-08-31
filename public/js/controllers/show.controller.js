angular.module('movieApp')
.controller('MovieShowController', [
  'Movie',
  '$state',
  '$stateParams',
  MovieShowController
])

function MovieShowController (Movie, $state, $stateParams) {
  this.params = { id: $stateParams.id }
  this.movie = Movie.get(this.params)

  this.editMovie = function () {
    $state.go('movieEdit', this.params)
  }
}
