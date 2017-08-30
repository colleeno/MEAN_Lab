const mongoose = require('mongoose')
const connect = require('./connect')
const config = require('../')
const movieSeeds = require('./seedMovies')

const Movie = mongoose.model('Movie')

connect(config.db, {useMongoClient: true})
.then(_ => Movie.remove({}))
.then(_ => Movie.collection.insert(movieSeeds))
.then(movies => {
  console.log(movies)
  process.exit()
})
.catch((err) => {
  console.log(err)
  process.exit()
})
