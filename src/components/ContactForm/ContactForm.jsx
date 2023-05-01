import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Alert,
  AlertTitle,
} from "@mui/material";

import css from "./ContactForm.module.css";
import icons from "../../icons/symbol-defs.svg";

import { useState } from "react";
import { send } from "emailjs-com";


export const ContactForm = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Modrzewiowe Domki",
    message: "",
    reply_to: "",
    phone: "",
  });
  const [alert, setAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    send(
      process.env.REACT_APP_EMAILSERVICE_API_KEY,
      "template_gb6bs67",
      toSend,
      "leA1bBvklfwVhKpjl"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    form.reset();
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    //Zmienić font size globalnie dla mui i ogólnie
    <Card
      className={css.card}
      sx={{
        fontSize: "0.6rem",
        boxShadow: "0",
      }}
    >
      <CardContent>
        <Typography gutterBottom className={css.ask} variant="h4">
          Zadzwoń
          <a className={css.contactLink} href="tel:+48694225226">
          <svg className={css.icon}>
                <use href={`${icons}#icon-phone`}></use>
              </svg>
            +48 694 225 226
          </a>
          lub spytaj o dostępność!
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid xs={12} item>
              <TextField
                id="name"
                name="from_name"
                type=""
                label="Imię i nazwisko"
                variant="outlined"
                placeholder="Np. Jan Kowalski"
                fullWidth
                required
                onChange={handleChange}
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                id="phone"
                name="phone"
                type="number"
                label="Numer telefonu"
                placeholder="Np. +48 123 456 789"
                variant="outlined"
                fullWidth
                required
                onChange={handleChange}
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                id="email"
                name="reply_to"
                type="email"
                label="Email"
                placeholder="Np. jankowalski@gmail.com"
                variant="outlined"
                fullWidth
                required
                onChange={handleChange}
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                id="text"
                name="message"
                label="Wiadomość"
                placeholder="Napisz swoją wiadomość"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={6}
                onChange={handleChange}
              />
            </Grid>
            {alert ? (
              <Alert severity="success" className={css.alert}>
                <AlertTitle>Sukces</AlertTitle>
                Wiadomość została wysłana — <strong>czekaj na odpowiedź</strong>
              </Alert>
            ) : (
              ""
            )}
            <Button
              sx={{
                marginTop: "8px",
                marginLeft: "8px",
              }}
              className={css.formButton}
              type="submit"
              variant="contained"
              fullWidth
              onClick={() => setAlert(true)}
            >
              Wyślij
            </Button>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};
