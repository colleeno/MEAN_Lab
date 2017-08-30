const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlantSchema = new Schema ({
  name: String,
  description: String,
  imgUrl: String
})

mongoose.model('Plant', PlantSchema)
