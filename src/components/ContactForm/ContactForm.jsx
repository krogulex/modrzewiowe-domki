import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import css from "./ContactForm.module.css";

import { useState } from "react";
import { send } from "emailjs-com";

export const ContactForm = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    from_surname: "",
    to_name: "Modrzewiowe Domki",
    message: "",
    reply_to: "",
    phone: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    send(process.env.REACT_APP_EMAILSERVICE_API_KEY, "template_gb6bs67", toSend, "leA1bBvklfwVhKpjl")
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
      }}
    >
      <CardContent>
        <Typography gutterBottom className={css.ask} variant="h4">
          Spytaj o dostępność!
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                id="name"
                name="from_name"
                type=""
                label="Imię"
                variant="outlined"
                placeholder="Napisz swoje imię"
                fullWidth
                required
                onChange={handleChange}
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                id="surname"
                name="from_surname"
                type=""
                label="Nazwisko"
                placeholder="Napisz swoje nazwisko"
                variant="outlined"
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
                placeholder="Napisz swój numer"
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
                placeholder="Napisz swój email"
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
            <Button
              sx={{
                marginTop: "8px",
                marginLeft: "8px",
              }}
              className={css.formButton}
              type="submit"
              variant="contained"
              fullWidth
            >
              Wyślij
            </Button>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};