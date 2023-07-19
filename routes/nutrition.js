const express = require('express')
const {
  createNutrition,
  getNutritions,
  getNutrition,
  deleteNutrition,
  updateNutrition
} = require('../controllers/nutritionController')
const router = express.Router()

router.get('/', getNutritions)

router.get('/:id', getNutrition)

router.post('/', createNutrition)

router.delete('/:id', deleteNutrition)

router.put('/:id', updateNutrition)

module.exports = router
