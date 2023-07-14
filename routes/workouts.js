const express = require('express')

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
router.post('/', (req, res) => {
  res.json({ mssg: 'POST one workout' })
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
