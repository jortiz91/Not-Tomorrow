const Nutrition = require('../models/nutritionModel')
const Comment = require('../models/commentModel')
const User = require('../models/userModel')
const mongoose = require('mongoose')

//get all nutrition

const getNutritions = async (req, res) => {
  const nutritions = await Nutrition.find({})
    .populate('comments')
    .sort({ createdAt: -1 })

  res.status(200).json(nutritions)
}
const makeComment = async (req, res) => {
  const nutrition = await Nutrition.findById(req.params.id)
  const user = await User.findOne({ email: req.body.userEmail })

  const comment = await Comment.create({ ...req.body, user: user._id })
  nutrition.comments.push(comment._id)
  nutrition.save()
  user.comments.push(comment._id)
  user.save()
  res.send(comment)
}

//get a single nutrition
const getNutrition = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: 'No such Nutrition' })
  }
  const nutrition = await Nutrition.findById(id)

  if (!nutrition) {
    return res.status(404).json({ err: 'Nutrition not found' })
  }
  res.status(200).json(nutrition)
}

//create a nutrition
const createNutrition = async (req, res) => {
  const { title, calories, protein } = req.body

  try {
    const nutrition = await Nutrition.create({ title, calories, protein })
    res.status(200).json(nutrition)
  } catch (err) {
    res.status(404).json({ err: err.message })
  }
}

//delete a nutrition
const deleteNutrition = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: 'Invalid ID' })
  }
  const nutrition = await Nutrition.findOneAndDelete({ _id: id })

  if (!nutrition) {
    return res.status(404).json({
      err: 'No such Nutrition'
    })
  }
  res.status(200).json(nutrition)
}

//update a nutrition
const updateNutrition = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: 'Invalid ID' })
  }
  const nutrition = await Nutrition.findOneAndUpdate(
    { _id: id },
    {
      ...req.body
    }
  )
  if (!nutrition) {
    return res.status(404).json({
      err: 'No such Nutrition'
    })
  }
  res.status(200).json(nutrition)
}

module.exports = {
  getNutritions,
  getNutrition,
  createNutrition,
  deleteNutrition,
  updateNutrition,
  makeComment
}
