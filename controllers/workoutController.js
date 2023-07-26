const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//get all workouts
const getWorkouts = async (req, res) => {
  const user = req.user._id

  const workouts = await Workout.find({ user }).sort({ createdAt: -1 })
  console.log('getting workouts', workouts)
  res.status(200).json(workouts)
}
//get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ e: 'Invalid ID' })
  }

  const workout = await Workout.findById(id)
  if (!workout) {
    return res.status(404).json({ e: 'Workout not found' })
  }
  res.status(200).json({ workout })
}
//create a workout
const createWorkout = async (req, res) => {
  const { title, weight, reps } = req.body
  let emptyFields = []

  if (!title) {
    emptyFields.push('title')
  }
  if (!weight) {
    emptyFields.push('Weight')
  }
  if (!reps) {
    emptyFields.push('reps')
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'Please fill in all the fields', emptyFields })
  }

  try {
    const user_id = req.user._id
    const workout = await Workout.create({ title, weight, reps, user_id })
    res.status(200).json(workout)
  } catch (e) {
    res.status(404).json({ e: e.message })
  }
}

//delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ e: 'Invalid ID' })
  }
  const workout = await Workout.findOneAndDelete({ _id: id })
  if (!workout) {
    return res.status(404).json({ e: 'Workout not found' })
  }
  res.status(200).json(workout)
}

//update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ e: 'Invalid ID' })
  }
  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      title: req.body.title,
      weight: req.body.weight,
      reps: req.body.reps
    }
  )
  if (!workout) {
    return res.status(404).json({ e: 'Workout not found' })
  }
  res.status(200).json({ workout })
}

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
}
