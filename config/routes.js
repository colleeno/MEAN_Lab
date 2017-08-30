const join = require('path').join
const apiMovieRoutes = require('./api/movieRoutes')
const config = require('./')

function routesConfig (app) {
  app.use('/api', apiMovieRoutes)
  app.get('*', (req, res) => {
    res.sendFile(join(config.root, 'public/index.html'))
  })
}

module.exports = routesConfig
