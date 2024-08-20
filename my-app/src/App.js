import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Item from "@mui/material/Grid";
import logo from "./images/header_pic.png";
import pic1 from "./images/pic1.avif";
import pic2 from "./images/pic2.avif";
import pic3 from "./images/pic3.avif";
import Features from "./components/features";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    ochre: {
      main: "#000000",
      light: "#E9DB5D",
      dark: "#000000",
      contrastText: "#242105",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ bgcolor: "white" }} position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Box
                  component="img"
                  sx={{ height: 75, mr: 2 }} // Adjust height as needed
                  alt="Logo"
                  src={logo}
                />
                <Box sx={{ flexGrow: 1 }} />{" "}
                <Button variant="text" color="ochre" sx={{ mx: 1 }}>
                  Features
                </Button>
                <Button variant="text" color="ochre" sx={{ mx: 1 }}>
                  Pricing
                </Button>
                <Button variant="text" color="ochre" sx={{ mx: 1 }}>
                  Contact
                </Button>
                <Button variant="outlined" color="secondary" sx={{ mx: 1 }}>
                  Login
                </Button>
                <Button variant="contained" color="secondary" sx={{ mx: 1 }}>
                  Sign Up
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
        </header>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            height: "87vh",
            background: "linear-gradient(180deg, #FFFFFF 0%, #c0b1ff 100%)", // Gradient background
            padding: 4,
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "#8352fc", fontWeight: 600, letterSpacing: 1.5 }}
          >
            YOUR MULTI-LINGUAL INTERVIEW ASSISTANT
          </Typography>
          <Typography
            variant="h2"
            sx={{ color: "#151B28", fontWeight: 700, margin: "20px 0" }}
          >
            Ace your interviews with
            <br />
            Personalized AI
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#6F7284", maxWidth: "600px", marginBottom: 3 }}
          >
            Elevate your career prospects with our tailored interview questions
            and personalized resume assistance available in up to 30 languages,
            all designed to help you secure your next job with confidence and
            finesse in today’s global job market.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ borderRadius: 2 }}
          >
            Try for free now!
          </Button>
        </Box>
        <Box sx={{ padding: 10 }}>
          <Typography variant="h3" sx={{ color: "#7421fc", fontWeight: 900 }}>
            Features
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gap: 1,
            gridTemplateColumns: "repeat(2,1fr)",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Item>
            <Features
              title="AI Powered Interviews"
              description="Our innovative AI analyzes job descriptions and your resume in order to generate tailored interview questions and answers that prepare you for the real thing."
              highlight="10+"
              subtext="Questions and Answers per Job"
            />
          </Item>
          <Item>
            <Box
              component="img"
              sx={{ height: 500, mr: 2 }} // Adjust height as needed
              alt="pic1"
              src={pic1}
            />
          </Item>
          <Item>
            <Box
              component="img"
              sx={{ height: 500, mr: 2 }} // Adjust height as needed
              alt="pic2"
              src={pic2}
            />
          </Item>
          <Item>
            <Features
              title="Multiple Languages Supported "
              description="Bridge the language barrier by practicing questions in languages including English, Spanish, Mandarin, French, and German with additional languages being added regularly for a global job market "
              highlight="30+"
              subtext="Languages Available "
            />
          </Item>
          <Item>
            <Features
              title="Instant Feedback "
              description="Gain immediate and actionable insights into your performance, helping you refine your responses and master the art of the interview "
              highlight="10+"
              subtext="Slots Available to Save Jobs "
            />
          </Item>
          <Item>
            <Box
              component="img"
              sx={{ height: 500, mr: 2 }} // Adjust height as needed
              alt="pic3"
              src={pic3}
            />
          </Item>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
