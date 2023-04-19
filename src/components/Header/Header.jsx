import css from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <h1>Modrzewiowe Domki</h1>
      <nav>
        <ul>
          <li>
            <a className={css.navigationLink} href="#About">
              O nas
            </a>
          </li>
          <li>
            <a className={css.navigationLink} href="#Contact">
              Kontakt
            </a>
          </li>
          <li>
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
