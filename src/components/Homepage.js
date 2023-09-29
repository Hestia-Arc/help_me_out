import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Box, } from "@mui/material";


function Homepage() {
  return (
    <>
    <Box sx={{padding: '0px 140px'}}>
    <NavBar/>
    <Box sx={{height: '700px', background: 'grey'}}></Box>
    
    </Box>
    <Footer/>
    </>
  )
}

export default Homepage