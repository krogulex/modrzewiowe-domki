import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import css from "./ContactForm.module.css";

export const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form);
    form.reset();
  };

  return (
    //Zmienić font size globalnie dla mui i ogólnie
    <Card
      className={css.card}
      sx={{
        backgroundColor: "#ece5cd",
        color: "#766748",
        fontSize: "0.6rem",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h4">
          Napisz do nas!
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                id="name"
                type=""
                label="Imię"
                variant="outlined"
                placeholder="Napisz swoje imię"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                id="surname"
                type=""
                label="Nazwisko"
                placeholder="Napisz swoje nazwisko"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                id="phone"
                type="number"
                label="Numer telefonu"
                placeholder="Napisz swój numer"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                id="text"
                label="Wiadomość"
                placeholder="Napisz swoją wiadomość"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={4}
              />
            </Grid>
            <Button
              sx={{
                marginTop: '8px',
                marginLeft: '8px'
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
