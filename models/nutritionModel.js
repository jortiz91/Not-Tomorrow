const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nutritionSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    calories: {
      type: Number,
      required: true
    },
    protein: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Nutrition', nutritionSchema)
