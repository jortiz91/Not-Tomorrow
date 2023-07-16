import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Header from '../components/Header'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')

      const json = await response.json()
      console.log(json)

      if (response.ok) {
        setWorkouts(json)
      }
    }
    fetchWorkouts()
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => <p key={workout._id}>{workout.title}</p>)}
      </div>
    </div>
  )
}

export default Home
