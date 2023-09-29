import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import Icon from "../images/icon.png";



function AuthPage() {
  return (
    <Box sx={{ padding: "0px 140px" }}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ height: "90px" }}
      >
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
      </Stack>

      <Box sx={{ height: "700px", background: "grey" }}></Box>
    </Box>
  )
}

export default AuthPage