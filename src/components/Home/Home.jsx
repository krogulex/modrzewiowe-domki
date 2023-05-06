import css from "./Home.module.css";

import { Button } from "@mui/material";

import bałtyk from "../../images/bałtyk.png";

const Home = ({ toggleModal }) => {
  return (
    <div className={css.home}>
      <h6 id="Home"></h6>
      <div className={css.box}></div>
      <div className={css.backgroundImage}>
        <h1 className={css.slogan}>Domki wypoczynkowe w Sarbinowie</h1>
        <Button
          variant="contained"
          onClick={toggleModal}
          sx={{
            "@media (min-width:1024px)": {
              width: 200,
              height: 60,
              fontSize: 24,
              letterSpacing: "0.15em",
            },
          }}
        >
          Zarezerwuj!
        </Button>
      </div>
    </div>
  );
};

export default Home;
