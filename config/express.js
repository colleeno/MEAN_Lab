const express = require('express')
// middleware
const morgan = require('morgan')
const bodyParser = require('bodyParser')
const cors = require('cors')

const config = require('./')
const env = process.env.NODE_ENV || 'development'

function expressConfig (app) {
  // set up cors
  app.use(cors({
    origin: ['http://localhost:3000', '*'],
    optionsSuccessStatus: 200,
    credentials: true
  }))

// static files middleware
  app.use(express.static(config.root + '/public'))
  app.use(express.static(config.root + '/node_modules'))

// no need for morgan during tests
  if (env !== 'test') app.use(morgan('dev'))

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
}
module.exports = expressConfig
