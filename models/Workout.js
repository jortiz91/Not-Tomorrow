const mongoose = requre('mongoose')

const Schema = mongoose.Schema
const workoutSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    reps: {
      type: Number,
      required: true
    },
    load: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
)
