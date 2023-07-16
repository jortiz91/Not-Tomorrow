const express = require('express')
// const Workout = require('../models/workoutModel')
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

//Get all workouts
router.get('/', getWorkouts)

//Get one workout
router.get('/:id', getWorkout)
//Post one workout
router.post('/', createWorkout)
//Delete one workout
router.delete('/:id', deleteWorkout)

//update one workout
router.put('/:id', updateWorkout)

module.exports = router
