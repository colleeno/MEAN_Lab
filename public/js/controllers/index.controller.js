angular.module('movieApp')
.controller('MovieIndexController', [
  'Movie',
  MovieIndexController
])

function MovieIndexController (Movie) {
    this.movies = Movie.query()
  }
