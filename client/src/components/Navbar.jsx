import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/logo.png'
import { red } from '@mui/material/colors'

const Navbar = () => {
  return (
    <header>
      <div className="header"></div>
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: '72px', height: '72px', margin: '0 20px' }}
        />
      </Link>
    </header>
  )
}

export default Navbar
