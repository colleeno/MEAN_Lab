angular
.module('movieApp')
.factory('Movie', [
  '$resource',
  movieService
])

function movieService ($resource) {
  return $resource('http://localhost:3000/api/movies', {}, {
      update: {method: 'PUT'}
    })
}
