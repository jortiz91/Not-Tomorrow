import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Header from '../components/Header'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
    }
    fetchWorkouts()
  }, [])
  return (
    <div className="Home">
      <h2>Home</h2>
    </div>
  )
}

export default Home
