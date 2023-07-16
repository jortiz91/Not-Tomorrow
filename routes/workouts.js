const express = require('express')
const Workout = require('../models/workoutModel')
const {
  createWorkout,
  getWorkout,
  getWorkouts
} = require('../controllers/workoutController')

const router = express.Router()

//Get all workouts
router.get('/', getWorkouts)

//Get one workout
router.get('/:id', getWorkout)
//Post one workout
router.post('/', createWorkout)
//Delete one workout
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'DELETE one workout' })
})
//update one workout
router.put('/:id', (req, res) => {
  res.json({ mssg: 'UPDATE one workout' })
})

module.exports = router
