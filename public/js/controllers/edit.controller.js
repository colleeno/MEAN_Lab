angular.module('movieApp')
.controller('MovieEditController', [
  'Movie',
  '$state',
  '$stateParams',
  MovieEditController
])

function MovieEditController (Movie, $state, $stateParams) {
  this.movie = Movie.get({ id: $stateParams.id })

  this.updateMovie = function () {
    this.movie.$save().then((movie) => {
      $state.go('movieShow', { id: movie._id })
    }).catch((err) => {
      console.log(err)
    })
  }

  this.deleteMovie = function () {
    this.movie.$delete({ id: $stateParams.id }).then(() => {
      $state.go('movieIndex')
    }).catch((err) => {
      console.log(err)
    })
  }
}
