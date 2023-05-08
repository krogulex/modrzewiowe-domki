import css from "./Footer.module.css";
import image from "../../images/logo-domki.png";

const Footer = () => {
  return (
    <footer>
      <div className={css.name}>
        <img className={css.logo} src={image} alt="logo domków"></img>
        <p>Modrzewiowe Domki &#169;</p>
      </div>
    </footer>
  );
};

export default Footer;
