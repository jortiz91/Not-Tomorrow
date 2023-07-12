import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import HeaderImage from '../assets/images/header.png'

const Header = () => {
  return (
    <Box
      sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
      position="relative"
      p="20px"
    >
      <Typography
        color="black"
        fontWeight="600"
        fontSize="26px"
        fontFamily="Poppins"
      >
        Come on, Let's Sweat!
      </Typography>
      <Typography
        mb={2}
        color="lightgreen"
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
      >
        Train Today, <br /> Not Tomorrow
      </Typography>
      <Typography fontSize="16px" lineHeight="36px" mb={2}>
        Train Today, Not Tomorrow is here to help you on your fitness journey.
        Embrace the <br />
        challenge, stay consistent, and remember, every workout counts. Let's
        achieve your <br /> fitness goals together!
      </Typography>
      <Button variant="contained" color="success" href="#exercises">
        Let's Start{' '}
      </Button>
      <img src={HeaderImage} alt="banner" className="header-img" />
    </Box>
  )
}

export default Header
