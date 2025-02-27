import React from 'react'
import {Box, Typography, Button } from '@mui/material';

import HeroBanner from '../assets/images/gym.jpg'

const HeroBannner = () => {
  return (
    <Box sx={{mt: {lg: '212px', xs: '70px'}, ml: {sm: '50px'}}} position="relative" p="20px">
    <Typography color="#ff2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs:'40px'}}} mb="23px" mt="30px">
      Sweat, Smile <br/> and Repeat
    </Typography>
    <Typography fontSize= "22px" lineHeight="35px" mb={4}>
      Check out the most effective exercises
    </Typography>
    <Button variant='contained' color='error' href='#exercises' sx={{backgroundColor: '#ff2625', padding: '10px'}}>Explore Exercises</Button>
    <Typography
    fontWeight={600}
    color='#ff2625'
    sx={{
      opacity: 0.1,
      display: {lg:'block', xs:'none'},
      fontSize: '200px'
    }}>
     Exercise
    </Typography>
    {/* <img src={HeroBanner} alt="" className='hero-banner-img' style={{opacity: '0.8', borderBottomLeftRadius: '200px'}} /> */}
    <img 
  src={HeroBanner} 
  alt="" 
  className='hero-banner-img' 
  style={{
    marginTop:'2px',
    position: 'absolute',
    right: 0,
    top: 0,
    width: '36%', // Adjust as needed
    height: 'auto',
    opacity: '0.8',
    borderBottomLeftRadius: '200px',
    zIndex: -1
  }} 
/>

    </Box>
  )
}

export default HeroBannner
