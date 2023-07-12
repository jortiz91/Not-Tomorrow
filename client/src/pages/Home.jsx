import React, { useState } from 'react'
import { Box } from '@mui/material'
import Header from '../components/Header'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
  return (
    <Box>
      <Header />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home
