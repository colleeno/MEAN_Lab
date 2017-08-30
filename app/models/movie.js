const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ActorSchema = new Schema({
  name: String,
  age: Number,
  bio: String
})

const MovieSchema = new Schema({
  title: String,
  year: Number,
  tagline: String,
  director: String,
  score: Number,
  rating: String,
  description: String,
  actors: [ActorSchema]
})

mongoose.model('Movie', MovieSchema)
