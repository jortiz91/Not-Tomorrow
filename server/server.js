// const express = require('express')
// const path = require('path')
// const routes = require('./routes')
// const db = require('./server/config/connection')

// const PORT = process.env.PORT || 3001
// const app = express()

// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// app.use(routes)

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`)
//   })
// })
const express = require('express')
const path = require('path')
const routes = require('./routes')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)
app.listen(3001, () => console.log('Now listening on localhost:3001'))
