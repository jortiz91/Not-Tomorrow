const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

//Get all workouts
router.get('/', (req, res) => {
  res.json({ mssg: 'GET all workout' })
})
//Get one workout
router.get('/:id', (req, res) => {
  res.json({ mssg: 'GET one workout' })
})
//Post one workout
router.post('/', async (req, res) => {
  const { title, load, reps } = req.body
  try {
    const workout = await Workout.create({ title, load, reps })
    res.status(200).json({ workout })
  } catch (e) {
    res.status(400).json({ e: e.message })
  }
})
//Delete one workout
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'DELETE one workout' })
})
//update one workout
router.put('/:id', (req, res) => {
  res.json({ mssg: 'UPDATE one workout' })
})

module.exports = router
