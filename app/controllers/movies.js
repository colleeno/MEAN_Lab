const mongoose = require('mongoose')
const Movie = mongoose.model('Movie')

module.exports = {
  load: (req, res, next, id) => {
    Movie.findOne({_id: id})
    .then((movie) => {
      req.movie = movie
      if (!req.movie) return next(new Error('Movie not found'))
      next()
    })
    .catch((err) => { next(err) })
  }, // load

  index: (req, res, next) => {
    Movie.find({})
    .then(movies => res.json(movies))
    .catch((err) => { next(err) })
  },

  show: (req, res) => {
    res.json(req.movie)
  },

  create: (req, res) => {
    const movie = new Movie(req.body)
    movie.save()
    .then((movie) => { res.json(movie) })
    .catch((err) => {
      res.json({
        message: `Error creating movie`,
        errors: [err.toString()]
      })
    })
  },

  update: (req, res) => {
    const movie = req.movie
    Object.assign(movie, req.body)
    movie.save()
    .then(movie => res.json(movie))
    .catch((err) => {
      res.json({
        message: `Error updating Movie id: ${movie._id}`,
        errors: [err.toString()]
      })
    })
  },
  destroy: (req, res) => {
    req.movie.remove()
    .then(_ => res.json({
      message: 'Movie deleted'
    }))
  }
} // end export
