const express = require('express')
const router = express.Router()
// You'll be creating this controller module next
const moviesCtrl = require('../controllers/exercises')

// GET /movies
router.get('/', exercisesCtrl.index)
// GET /movies/new
router.get('/new', exercisesCtrl.new)
// GET /movies/:id (show functionality) MUST be below new route
router.get('/:id', exercisesCtrl.show)
// POST /movies
router.post('/', exercisesCtrl.create)

module.exports = router
