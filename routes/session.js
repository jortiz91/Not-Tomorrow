const express = require('express')
const router = express.Router()
const sessionCtrl = require('../controllers/session')

// This router is mounted to a "starts with" path of '/'

// GET /performers/new (new functionality)
router.get('/session/new', sessionCtrl.new)
// POST /performers (create functionality)
router.post('/session', sessionCtrl.create)
// POST /movies/:id/performers (associate a performer with a movie)
router.post('/exercises/:id/session', sessionCtrl.addToCast)

module.exports = router
