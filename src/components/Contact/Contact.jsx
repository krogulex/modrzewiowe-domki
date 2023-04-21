import css from "./Contact.module.css";
import { TextField } from "@mui/material";

const Contact = () => {
  return (
    <div>
      <h5 id="Contact"></h5>
      <h2>Kontakt</h2>
      <address>
        <p>Modrzewiowe Domki</p>
        <a href="mailto:modrzewiowe.domki@onet.pl">
          mail: modrzewiowe.domki@onet.pl
        </a>
        <a href="tel:+48694225226">tel: +48 694 225 226</a>
        <p>Wrzosowa 10 76-034 Sarbinowo woj. zachodniopomorskie</p>
      </address>
      <form>
        <TextField id="name" label="Imię" variant="outlined" />
        <TextField id="phone" label="Numer telefonu" variant="outlined" />
        <TextField id="text" label="Zapytanie" variant="outlined" />
      </form>
    </div>
  );
};

export default Contact;
