import css from "./Contact.module.css";

const Contact = () => {
  return (
    <div id="Contact">
      <h2>Kontakt</h2>
      <address>
        <p>Modrzewiowe Domki</p>
        <a href="mailto:modrzewiowe.domki@onet.pl">
          mail: modrzewiowe.domki@onet.pl
        </a>
        <a href="tel:+48694225226">tel: +48 694 225 226</a>
        <p>Wrzosowa 10 76-034 Sarbinowo woj. zachodniopomorskie</p>
      </address>
    </div>
  );
};

export default Contact;
