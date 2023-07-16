import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/logo.png'
import { red } from '@mui/material/colors'

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Body</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
