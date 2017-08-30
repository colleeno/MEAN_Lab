const join = require('path').join
const apiMovieRoutes = require('./api/movieRoutes')
const config = require('./')

function routesConfig (app) {
  app.use('/api', apiMovieRoutes)
}

module.exports = routesConfig
