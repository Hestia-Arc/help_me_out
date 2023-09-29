import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Icon from "../images/icon.png";


function Profile() {
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
          <Typography variant="h5" fontWeight={600} sx={{ marginLeft: "5px" }}>
            HelpMeOut
          </Typography>
        </Stack>
      </Stack>

      <Box sx={{ height: "700px", background: "grey" }}></Box>
    </Box>
  );
}

export default Profile;
