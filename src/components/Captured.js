import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Box, Typography, Button, Stack, Divider, styled } from "@mui/material";
import { Link } from "react-router-dom";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import DeleteIcon from "@mui/icons-material/Delete";
import Telegram from "../images/telegram.png";
import Whatsapp from "../images/whatsapp (2).png";
import Facebook from "../images/Facebook.png";

const ButtonBox = styled(Button)({
  border: "1px solid rgba(65, 60, 109, 1)",
  color: "rgba(20, 20, 20, 1)",
  textTransform: "capitalize",
});

function Captured() {
  const [language, setLanguage] = React.useState("English");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <>
      <Box sx={{ padding: "0px 140px",fontFamily: 'Sora' }}>
        <NavBar />
        <Stack
          direction="row"
          spacing={4}
          sx={{ marginTop: 5, height: "700px", background: "#fff" }}
        >
          <Stack spacing={3} sx={{ flex: 1 }}>
            <Box sx={{ height: "60px", width: "100%" }}>
              <Typography variant="h3">Your video is ready!</Typography>
            </Box>
            <Box
              sx={{ background: "grey", height: "60px", width: "100%" }}
            ></Box>

            <Box
              sx={{ background: "grey", height: "60px", width: "100%" }}
            ></Box>
            <Box
              sx={{ background: "grey", height: "60px", width: "100%" }}
            ></Box>

            <Box sx={{ height: "60px", width: "100%" }}>
              <Typography>Share your video</Typography>
              <Stack direction="row" spacing={5} sx={{}}>
                <ButtonBox
                  variant="outlined"
                  startIcon={<img src={Facebook} alt="icon" />}
                >
                  Facebook
                </ButtonBox>

                <ButtonBox
                  variant="outlined"
                  startIcon={<img src={Whatsapp} alt="icon" />}
                >
                  WhatsApp
                </ButtonBox>

                <ButtonBox
                  variant="outlined"
                  startIcon={<img src={Telegram} alt="icon" />}
                  sx={{}}
                >
                  Telegram
                </ButtonBox>
              </Stack>
            </Box>
          </Stack>

          <Divider orientation="vertical" variant="middle" flexItem />

          <Stack sx={{ flex: 1 }}>
            <Box
              sx={{
                border: "1px solid rgba(65, 60, 109, 1)",
                height: "450px",
                width: "100%",
                borderRadius: "8px",
              }}
            ></Box>

            <Stack sx={{ marginTop: 8 }}>
              <Typography variant="h5">Transcript</Typography>
              {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
              <Select
                inputProps={{ "aria-label": "Without label" }}
                value={language}
                displayEmpty
                onChange={handleChange}
                sx={{ width: "40%" }}
              >
                <MenuItem value={10}>English</MenuItem>
                <MenuItem value={20}>French</MenuItem>
                <MenuItem value={30}>Spanish</MenuItem>
              </Select>
            </Stack>
          </Stack>
        </Stack>
      </Box>

      <Stack
        spacing={7}
        alignItems="center"
        justifyContent="center"
        sx={{
          background: "rgba(231, 231, 237, 0.20)",
          height: "380px",
          margin: "65px 0px",
          textAlign: "center",
        }}
      >
        <Typography variant="h5">
          To ensure the availability and privacy of your video,
          <br /> we recommend saving it to your account.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#120B48",
          }}
        >
          Save Video
        </Button>
        <Box>
          <Typography variant="h6" component="span">
            Don't have an account?{" "}
          </Typography>
          <Link>Create account</Link>
        </Box>
      </Stack>

      <Footer />
    </>
  );
}

export default Captured;
