import css from "./Contact.module.css";

import icons from "../../icons/symbol-defs.svg";

import statute from "../../Regulamin/REGULAMIN-MODRZEWIOWE-DOMKI.docx"

const Contact = () => {
  return (
    <div className={`${css.contact} reveal fade-bottom`}>
      <div className={css.contactContent}>
        <div className={css.contactLeft}>
          {
// eslint-disable-next-line
          }<h6 id="Contact">'</h6>
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
                <a
                  className={css.contactLink}
                  href="mailto:modrzewiowe.domki@onet.pl"
                >
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
                <a className={css.contactLink} href="tel:+48694225226">
                  +48 694 225 226
                </a>
              </li>
              <li className={css.addressListItem}>
                <h4 className={css.addressSubtitle}>
                  <svg className={css.icon}>
                    <use href={`${icons}#icon-location`}></use>
                  </svg>
                  Lokalizacja
                </h4>
                ul. Wrzosowa 10, Sarbinowo, 76-034, woj. zachodniopomorskie
              </li>
              <li className={css.addressListItem}>
                <h4 className={css.addressSubtitle}>
                  <svg className={css.icon}>
                    <use href={`${icons}#icon-file-text`}></use>
                  </svg>
                  Regulamin
                </h4>
                <a href={statute} download className={css.statute}>Regulamin obiektu</a>
              </li>
            </ul>
          </address>
        </div>
        <div className={`${css.contactRight} reveal fade-bottom active`}>
          <h2>Mapa</h2>
          <iframe
            title="location"
            className={css.map}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9325.739327391402!2d15.9670371!3d54.2431906!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4700302da9bdde1f%3A0x25e6e63a0f214f2b!2sModrzewiowe%20Domki!5e0!3m2!1spl!2spl!4v1683387315021!5m2!1spl!2spl"
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
                  {
// eslint-disable-next-line
          }<h5 id="Mapa">'</h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
