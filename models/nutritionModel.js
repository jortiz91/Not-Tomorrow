const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nutritionSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    calories: {
      type: Number
    },
    protein: {
      type: Number
    },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Nutrition', nutritionSchema)
