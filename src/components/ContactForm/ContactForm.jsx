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
import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";

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
    arrival_date: "",
    departue_date: "",
  });
  const [alert, setAlert] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSelectedDate(null);

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
        <Typography
          className={css.ask}
          sx={{ marginBottom: "20px", lineHeight: '1.4' }}
          variant="h4"
        >
          Zadzwoń
          <a className={css.contactLink} href="tel:+48694225226">
            <svg className={css.icon}>
              <use href={`${icons}#icon-phone`}></use>
            </svg>
            +48 694 225 226 <br/>
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
              <DatePicker
                label="Data przyjazdu"
                name="arrival_date"
                slotProps={{ textField: { fullWidth: true, required: true } }}
                onChange={(newValue) => {
                  setToSend({
                    ...toSend,
                    ["arrival_date"]: moment(newValue).format("D.MM.YYYY"),
                  });
                }}
              ></DatePicker>
            </Grid>
            <Grid xs={12} sm={6} item>
              <DatePicker
                label="Data odjazdu"
                name="departue_date"
                fullWidth
                required
                slotProps={{ textField: { fullWidth: true, required: true } }}
                onChange={(newValue) => {
                  setToSend({
                    ...toSend,
                    ["departue_date"]: moment(newValue).format("D.MM.YYYY"),
                  });
                }}
              ></DatePicker>
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
                Wiadomość została wysłana — <strong>odpowiemy w krótce</strong>
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
