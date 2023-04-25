import React from "react";
import { colors } from "./constants/constants";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import Slider from "./components/Slider/Slider";

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primaryColor,
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      letterSpacing: '0.1em',
    },
    fontSize: 12,
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },
  
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header></Header>
        <Slider></Slider>
        <About></About>
        <Contact></Contact>
        <Gallery></Gallery>
      </div>
    </ThemeProvider>
  );
}

export default App;
