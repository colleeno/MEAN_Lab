angular.module('movieApp')
.controller('MovieIndexController', [
  'Movie',
  '$state',
  MovieIndexController
])

function MovieIndexController (Movie, $state) {
  this.movies = Movie.query()
  this.showMovie = function (movieId) {
    $state.go('movieShow', {
      id: movieId
    })
  }
}
