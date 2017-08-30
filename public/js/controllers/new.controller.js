angular.module('movieApp')
.controller('MovieNewController', [
  'Movie',
  '$state',
  MovieNewController
])

function MovieNewController (Movie, $state) {
  this.newMovie = new Movie()
  this.createMovie = function () {
    this.newMovie.$save().then((movie) => {
      $state.go('movieShow', { id: movie._id })
    }).catch((err) => {
      console.log(err)
    })
  }
}
