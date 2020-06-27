import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import { LanguageContext } from "./contexts/LanguageContext";

const words = {
  english: {
    email: "Email",
    signIn: "Sign In",
    password: "Password",
    remember: "Remember Me"
  },
  french: {
    email: "Adresse Èlectronique",
    signIn: "Se Connecter",
    password: "Mont de Passe",
    remember: "Souviens-toi De Moi"
  },
  spanish: {
    email: "Correo Electrónico",
    signIn: "Registrarse",
    password: "Contraseña",
    remember: "Recuérdame"
  },
  turkish: {
    email: "E-posta",
    signIn: "Oturum Aç",
    password: "Parola",
    remember: "Beni Hatirla"
  },
  mandarin: {
    email: "电子邮件",
    signIn: "登入",
    password: "密码",
    remember: "记得我"
  },
};

class Form extends Component {
  static contextType = LanguageContext;

  render() {
    const { language, changeLanguage } = this.context;
    const { email, signIn, password, remember } = words[language];

    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">{signIn}</Typography>
          <Select value={language} onChange={changeLanguage}>
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="french">French</MenuItem>
            <MenuItem value="spanish">Spanish</MenuItem>
            <MenuItem value="turkish">Turkish</MenuItem>
            <MenuItem value="mandarin">Mandarin</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">{email}</InputLabel>
              <Input id="email" name="email" autoFocus></Input>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">{password}</InputLabel>
              <Input id="password" name="password" autoFocus></Input>
            </FormControl>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={remember}
            />
            <Button
              className={classes.submit}
              variant="contained"
              tyle="submit"
              fullWidth
              color="primary"
            >
              {signIn}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Form);
