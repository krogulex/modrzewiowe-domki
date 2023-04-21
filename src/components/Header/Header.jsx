import css from "./Header.module.css";
import image from "../../images/logo-domki.png"

const Header = () => {
  return (
    <header>
      <a className={css.name} href="#About">
        <img className={css.logo} src={image} alt="logo domków"></img>
        <p>Modrzewiowe Domki</p>
      </a>
      <nav className={css.navigation}>
        <ul className={css.navigationList}>
          <li className={css.navigationListItem}>
            <a className={css.navigationLink} href="#About">
              O nas
            </a>
          </li>
          <li className={css.navigationListItem}>
            <a className={css.navigationLink} href="#Contact">
              Kontakt
            </a>
          </li>
          <li className={css.navigationListItem}>
            <a className={css.navigationLink} href="#Gallery">
              Galeria
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
