import * as React from "react";
import { colors } from "./constants/constants";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
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
      '@media (min-width:768px)': {
        fontSize: 15,
      },
      '@media (min-width:1024px)': {
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

  return (
    <LocalizationProvider adapterLocale={pl}  localeText={{ cancelButtonLabel: 'Anuluj', okButtonLabel: 'Zapisz', todayButtonLabel: 'vhu',}} dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <Header toggleModal={toggleModal}></Header>
        <Slider></Slider>
        <About></About>
        <Gallery></Gallery>
        <Contact></Contact>
        <Footer></Footer>
        {modal && <Modal toggleModal={toggleModal}></Modal>}
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
