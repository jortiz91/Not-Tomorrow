const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '1d' })
}

const loginUser = async (req, res) => {
  res.json({ mssg: 'login user' })
}
const signupUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const token = createToken(user._id)

    const user = await User.signup(email, password)
    res.status(200).json({ email, user })
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}
module.exports = { loginUser, signupUser }
