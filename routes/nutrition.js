const express = require('express')
const router = express.Router()
const nutritionCtrl = require('../controllers/nutrition')

router.post('/exercises/:id/nutrition', nutritionCtrl.create)

module.exports = router
