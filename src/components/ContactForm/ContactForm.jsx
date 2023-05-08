import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Alert,
  AlertTitle,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";

import css from "./ContactForm.module.css";
import icons from "../../icons/symbol-defs.svg";
import statute from "../../Regulamin/REGULAMIN-MODRZEWIOWE-DOMKI.docx";

import { useState } from "react";
import { send } from "emailjs-com";

export const ContactForm = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Modrzewiowe domki",
    message: "",
    reply_to: "",
    phone: "",
    arrival_date: "",
    departue_date: "",
    adults: "",
    kids: "",
  });
  const [alert, setAlert] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    send(
      process.env.REACT_APP_EMAILSERVICE_API_KEY,
      "template_notegdy",
      toSend,
      "I3FSonJQoGvWzdpFl"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setAlert(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setAlert(false);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  console.log(toSend);
  return (
    <Card
      className={css.card}
      sx={{
        boxShadow: "0",
      }}
    >
      <CardContent>
        <Typography
          className={css.ask}
          sx={{ marginBottom: "20px", lineHeight: "1.4", fontSize: "16px" }}
          variant="h4"
        >
          Zadzwoń
          <a className={css.contactLink} href="tel:+48694225226">
            <svg className={css.icon}>
              <use href={`${icons}#icon-phone`}></use>
            </svg>
            +48 694 225 226 <br />
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
            <Grid xs={6} sm={6} item>
              <FormControl fullWidth>
                <DatePicker
                  label="Data przyjazdu"
                  name="arrival_date"
                  required
                  disablePast={true}
                  slotProps={{ textField: { fullWidth: true, required: true } }}
                  onChange={(newValue) => {
                    setToSend({
                      ...toSend,
                      // eslint-disable-next-line
                      ["arrival_date"]: moment(newValue).format("D.MM.YYYY"),
                    });
                  }}
                ></DatePicker>
              </FormControl>
            </Grid>
            <Grid xs={6} sm={6} item>
              <FormControl fullWidth>
                <DatePicker
                  label="Data odjazdu"
                  name="departue_date"
                  required
                  disablePast={true}
                  slotProps={{ textField: { fullWidth: true, required: true } }}
                  onChange={(newValue) => {
                    setToSend({
                      ...toSend,
                      // eslint-disable-next-line
                      ["departue_date"]: moment(newValue).format("D.MM.YYYY"),
                    });
                  }}
                ></DatePicker>
              </FormControl>
            </Grid>

            <Grid xs={6} sm={6} item>
              <FormControl fullWidth>
                <InputLabel>Dorośli *</InputLabel>
                <Select
                  name="adults"
                  label="Dorośli"
                  required
                  value={toSend.adults}
                  onChange={(newValue) => {
                    setToSend({
                      ...toSend,
                      // eslint-disable-next-line
                      ["adults"]: newValue.target.value,
                    });
                  }}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={6} sm={6} item>
              <FormControl fullWidth>
                <InputLabel>Dzieci *</InputLabel>
                <Select
                  name="kids"
                  label="Dzieci"
                  required
                  value={toSend.kids}
                  onChange={(newValue) => {
                    setToSend({
                      ...toSend,
                      // eslint-disable-next-line
                      ["kids"]: newValue.target.value,
                    });
                  }}
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
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
                rows={5}
                onChange={handleChange}
              />
            </Grid>
            <FormGroup sx={{ padding: "0px 9px" }}>
              <FormControlLabel
                required
                control={<Checkbox />}
                label={
                  <a href={statute} download className={css.regulaminForm}>
                    Akceptuje regulamin obiektu
                  </a>
                }
              />
            </FormGroup>
            {alert === true && (
              <Alert severity="success" className={css.alert}>
                <AlertTitle>Sukces</AlertTitle>
                Wiadomość została wysłana — <strong>wkrótce odpowiemy</strong>
              </Alert>
            )}
            {alert === false && (
              <Alert severity="error" className={css.alert}>
                <AlertTitle>Błąd</AlertTitle>
                Wiadomość nie została wysłana —
                <strong>
                  spróbuj zadzwonić
                  <a href="tel:+48694225226" className={css.alertPhone}>
                    +48 694 225 226
                  </a>
                </strong>
              </Alert>
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
            >
              Wyślij
            </Button>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};
