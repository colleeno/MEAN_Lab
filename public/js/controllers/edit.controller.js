angular.module('movieApp')
.controller('MovieEditController', [
  'Movie',
  '$state',
  '$stateParams',
  '_movie',
  MovieEditController
])

function MovieEditController (Movie, $state, $stateParams, _movie) {
  this.params = { id: $stateParams.id }
  this.movie = _movie
  this.updateMovie = function () {

    this.movie.$update(this.params).then((movie) => {
      $state.go('movieShow', this.params)
    }).catch((err) => {
      console.log(err)
    })
  }

  this.deleteMovie = function () {
    this.movie.$delete(this.params).then(() => {
      $state.go('movieIndex')
    }).catch((err) => {
      console.log(err)
    })
  }
}

MovieEditController.resolve = {
  _movie: function (Movie, $stateParams) {
    this.params = { id: $stateParams.id }
    return Movie.get(this.params)
  }
}
