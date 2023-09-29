import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Icon from "../images/icon-white.png";

function Footer() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        backgroundColor: "#120B48",
        height: "450px",
        padding: "50px 150px",
        color: "#fff",
        // fontFamily:
      }}
    >
      <Box sx={{ height: "40%" }}>
        <Stack direction="row" alignItems="center">
          <img
            src={Icon}
            style={{ width: "40px", height: "40px" }}
            alt="icon"
          />
          <Typography variant="h5" fontWeight={600} sx={{ marginLeft: "5px" }}>
            HelpMeOut
          </Typography>
        </Stack>
      </Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: "60%" }}
      >
        <Stack spacing={5} useFlexGap sx={{ height: "100%" }}>
          <Typography variant="h5">Menu</Typography>
          <Typography>Home</Typography>
          <Typography>Converter</Typography>
          <Typography>How it Works</Typography>
        </Stack>
        <Stack spacing={5} useFlexGap sx={{ height: "100%" }}>
          <Typography variant="h5">About us</Typography>
          <Typography>About</Typography>
          <Typography>Contact Us</Typography>
          <Typography>Privacy Policy</Typography>
        </Stack>
        <Stack spacing={5} useFlexGap sx={{ height: "100%" }}>
          <Typography variant="h5">Screen Record</Typography>
          <Typography>Browser Window</Typography>
          <Typography>Desktop</Typography>
          <Typography>Application</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Footer;
