import mongoose from 'mongoose'

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-erfifnx-shard-00-00.orhb60i.mongodb.net:27017,ac-erfifnx-shard-00-01.orhb60i.mongodb.net:27017,ac-erfifnx-shard-00-02.orhb60i.mongodb.net:27017/?ssl=true&replicaSet=atlas-g4v9ho-shard-0&authSource=admin&retryWrites=true&w=majority`
  try {
    await mongoose.connect(URL, { useNewUrlParser: true })
    console.log('Database connected successfully')
  } catch (error) {
    console.log('Error while connecting to the database ', error)
  }
}

export default Connection
