import css from "./Contact.module.css";

import { ContactForm } from "../ContactForm/ContactForm";

import icons from "../../icons/symbol-defs.svg";

const Contact = () => {
  return (
    <div className={css.Contact}>
      <div>
        <h5 id="Contact"></h5>
        <h2>Kontakt</h2>
        <address className={css.address}>
          <h4>Modrzewiowe Domki</h4>
          <ul className={css.addressList}>
            <li className={css.addressListItem}>
              <h4 className={css.addressSubtitle}>
                <svg className={css.icon}>
                  <use href={`${icons}#icon-envelop`}></use>
                </svg>
                Mail
              </h4>
              <a href="mailto:modrzewiowe.domki@onet.pl">
                modrzewiowe.domki@onet.pl
              </a>
            </li>
            <li className={css.addressListItem}>
              <h4 className={css.addressSubtitle}>
                <svg className={css.icon}>
                  <use href={`${icons}#icon-phone`}></use>
                </svg>
                Telefon
              </h4>
              <a href="tel:+48694225226">+48 694 225 226</a>
            </li>
            <li className={css.addressListItem}>
              <h4 className={css.addressSubtitle}>
                <svg className={css.icon}>
                  <use href={`${icons}#icon-location`}></use>
                </svg>
                Lokalizacja
              </h4>
              Wrzosowa 10, 76-034, Sarbinowo, woj. zachodniopomorskie
            </li>
          </ul>
          <iframe
            className={css.map}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9325.739327391402!2d15.9670371!3d54.2431906!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4700302da9bdde1f%3A0x25e6e63a0f214f2b!2sModrzewiowe%20Domki!5e0!3m2!1spl!2spl!4v1682419126130!5m2!1spl!2spl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </address>
      </div>
      <div>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default Contact;
