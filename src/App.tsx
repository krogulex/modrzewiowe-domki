import * as React from "react";
import { colors } from "./constants/constants";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import Modal1 from "./components/Modal/Modal";
import Home from "./components/Home/Home";

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { pl } from "date-fns/locale";

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
      fontSize: 14,
      "@media (min-width:768px)": {
        fontSize: 15,
      },
      "@media (min-width:1024px)": {
        fontSize: 18,
      },
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

  //Animations
  function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 50;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <LocalizationProvider
      adapterLocale={pl}
      localeText={{
        cancelButtonLabel: "Anuluj",
        okButtonLabel: "Zapisz",
        todayButtonLabel: "vhu",
      }}
      dateAdapter={AdapterDateFns}
    >
      <ThemeProvider theme={theme}>
        <Header></Header>
        <Home toggleModal={toggleModal}></Home>
        <About></About>
        <Gallery></Gallery>
        <Contact></Contact>
        <Footer></Footer>
        <Modal1 modal={modal} toggleModal={toggleModal}></Modal1>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
