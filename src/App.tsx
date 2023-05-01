import * as React from "react";
import { colors } from "./constants/constants";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal"

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primaryColor,
      dark: colors.secondColor,
      contrastText: "#fff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      letterSpacing: "0.1em",
      fontSize: 12,
      "&:hover": {
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
  const [modal, setModal] = React.useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header toggleModal={toggleModal}></Header>
      <Slider></Slider>
      <About></About>
      <Gallery></Gallery>
      <Contact></Contact>
      <Footer></Footer>
      {modal && <Modal toggleModal={toggleModal}></Modal>}
    </ThemeProvider>
  );
}

export default App;