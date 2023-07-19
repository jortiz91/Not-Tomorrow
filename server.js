require('dotenv').config()
//import
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const nutrition = require('./routes/nutrition')
// express app
const app = express()
//middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
//routes
app.use('/api/nutrition', nutrition)
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)
//connect to db
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('listening on port', process.env.PORT)
    })
  })
  .catch((e) => {
    console.log(e)
  })
