const express = require('express')

const router = express.Router()
const movies = require('../../app/controllers/movies')

module.exports = router

router.param('movieId', movies.load)

router.get('/movies', movies.index)
router.post('/movies', movies.create)
router.get('/movies/:movieId', movies.show)
// router.put('/movies/:movieId', movies.update)
// router.delete('/movies/:movieId', movies.destroy)

/* Error Handling */

router.use(handleIdError)
router.use(handleMiddlewareError)

function handleIdError (err, req, res, next) {
  if (err.message &&
    (~err.message.indexOf('not found') ||
    (~err.message.indexOf('Cast to ObjectId failed')))) {
    return next()
  }

  console.log(err.stack)

  res.status(500).json({
    message: 'internal server error',
    error: err.stack
  })
}

function handleMiddlewareError (req, res) {
  const payload = {
    url: req.originalUrl,
    error: 'Not found'
  }
  return res.status(404).json(payload)
}
