import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/logo.png'
import { red } from '@mui/material/colors'

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: '122px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none'
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: '72px', height: '72px', margin: '0 20px' }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontsize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: 'black',
            borderBottom: '3px solid lightgreen'
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: 'none',
            color: 'black',
            borderBottom: '3px solid lightgreen'
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  )
}

export default Navbar
