angular.module('movieApp')
.controller('MovieEditController', [
  'Movie',
  '$state',
  MovieEditController
])

function MovieEditController (Movie, $state) {
  this.movie = Notes.get({ id:$stateParams._id });

  this.createMovie = function () {
    this.newMovie.$save().then((movie) => {
      $state.go('movieShow', { id: movie._id })
    }).catch((err) => {
      console.log(err)
    })
  }
}
