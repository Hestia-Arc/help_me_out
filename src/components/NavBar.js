import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import Icon from "../images/icon.png";
import { Link } from 'react-router-dom';



function NavBar() {
  return (
    <Stack direction='row' justifyContent='space-between' alignItems="center" sx={{height: '90px'}}>
        <Stack direction="row" alignItems="center">
          <img
            src={Icon}
            style={{ width: "40px", height: "40px" }}
            alt="icon"
          />
          <Link to='/'>
          <Typography variant="h5" fontWeight={600} sx={{ marginLeft: "5px" }}>
            HelpMeOut
          </Typography>
          </Link>
        </Stack>
        <Stack direction="row" spacing={3}>
        <Typography>Features</Typography>
        <Typography>How it Works</Typography>

        </Stack>
        <Box>
          <Link to='authpage'>  <Typography>Get Started</Typography></Link>
        </Box>
    </Stack>
  )
}

export default NavBar