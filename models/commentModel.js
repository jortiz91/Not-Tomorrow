const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    nutrition: {
      type: Schema.Types.ObjectId,
      ref: 'Nutrition'
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Comment', commentSchema)
