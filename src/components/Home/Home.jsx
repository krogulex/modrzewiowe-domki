import css from "./Home.module.css";

import { Button } from "@mui/material";

const Home = ({ toggleModal }) => {
  return (
    <div className={css.home}>
      <h6 id="Home">'</h6>
      <div className={css.box}></div>
      <div className={css.backgroundImage} loading="eager">
        <h1 className={css.slogan}>
          Domki wypoczynkowe nad morzem{" "}
          <span className={css.noWrap}>w Sarbinowie</span>
        </h1>
        <Button
          variant="contained"
          onClick={toggleModal}
          sx={{
            "@media (min-width:768px)": {
              fontSize: 18,
              width: 150,
              height: 55,
            },
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
