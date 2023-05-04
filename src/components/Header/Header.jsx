import css from "./Header.module.css";
import image from "../../images/logo-domki.png";
import { Button } from "@mui/material";

const Header = ({ toggleModal }) => {
  return (
    <header>
      <a className={css.name} href=".">
        <img className={css.logo} src={image} alt="logo domków"></img>
        <h2>Modrzewiowe Domki</h2>
      </a>
      <nav className={css.navigation}>
        <ul className={css.navigationList}>
          <li className={css.navigationListItem}>
            <a className={css.navigationLink} href="#About">
              O nas
            </a>
          </li>
          <li className={css.navigationListItem}>
            <a className={css.navigationLink} href="#Gallery">
              Galeria
            </a>
          </li>
          <li className={css.navigationListItem}>
            <a className={css.navigationLink} href="#Contact">
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
      <div className={css.button}>
        <Button
          sx={{
            backgroundColor: "#14326a",
            "&:hover": {
              backgroundColor: "#2a57aa",
            },
          }}
          variant="contained"
          onClick={toggleModal}
        >
          Zarezerwuj!
        </Button>
      </div>
    </header>
  );
};

export default Header;
