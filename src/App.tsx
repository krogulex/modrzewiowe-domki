import React from "react";
import { colors } from "./constants/constants";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primaryColor,
      dark: colors.secondColor,
      contrastText: "#000",
      
    },
  },
  typography: {
    button: {
      color: "#000",
      textTransform: "none",
      letterSpacing: "0.1em",
      fontSize: 12,
      '&:hover': {
        backgroundColor: colors.secondColor,
    },
    },
    fontSize: 10,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ].join(","),
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
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
