angular.module('movieApp')
.controller('MovieEditController', [
  'Movie',
  '$state',
  '$stateParams',
  MovieEditController
])

function MovieEditController (Movie, $stateParams, $state) {
  this.movie = Movie.get({ id: $stateParams.id })

  this.updateMovie = function () {
    this.movie.$save().then((movie) => {
      $state.go('movieShow', { id: movie._id })
    }).catch((err) => {
      console.log(err)
    })
  }
}
