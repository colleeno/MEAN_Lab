const express = require('express')
const connect = require('./config/db/connect')

const port = process.env.PORT || 3002
const app = express()

// export app for testing
module.exports = app

// Configure app and routes
require('./config/express')(app)

connect()
  .then(db => {
    db.on('error', console.log)
  })
  .catch(err => {
    console.log(`Error connecting to mongo`)
    console.log(err)
  })

function listen () {
  // no need to listen while testing
  if (app.get('env') === 'test') return
  app.listen(port)
  console.log(`Listening on port ${port}`)
}
