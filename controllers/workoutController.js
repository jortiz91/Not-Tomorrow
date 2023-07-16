const Workout = require('../models/workoutModel')

//get all workouts

//get a single workout

//create a workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body

  try {
    const workout = await Workout.create({ title, load, reps })
    res.status(200).json({ workout })
  } catch (e) {
    res.status(400).json({ e: e.message })
  }
}

//delete a workout

//update a workout

module.exports = {
  createWorkout
}
