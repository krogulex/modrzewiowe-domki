import css from "./Header.module.css";
import image from "../../images/logo-domki.png";

const Header = () => {
  return (
    <header>
      <div className={css.headerContent}>
        <a className={css.name} href=".">
          <img className={css.logo} src={image} alt="logo domków"></img>
          <h2 className={css.nameText}>Modrzewiowe Domki</h2>
        </a>
        <nav className={css.navigation}>
          <ul className={css.navigationList}>
            <li className={css.navigationListItem}>
              <a className={css.navigationLink} href="#Home">
                Strona główna
              </a>
            </li>
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
            <li className={css.navigationListItem}>
              <a className={css.navigationLink} href="#Mapa">
                Mapa
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
