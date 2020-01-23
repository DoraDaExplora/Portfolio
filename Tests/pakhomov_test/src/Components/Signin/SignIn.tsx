import React, { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import defaultTheme from '@material-ui/core/styles/defaultTheme';

import styled from 'styled-components';

const theme = defaultTheme; //Для передачи пропа в styled-components

const SubmitButton = styled(Button)`
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  margin: ${theme.spacing(3, 0, 2)};
  padding: 0 30px;
  backgroundColor: ${theme.palette.primary.main}
`;

const MyContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-content: center;
  justify-content: center;
`;

const FormContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 0px 8px 0px 8px;
`;

const FormAvatar = styled(Avatar)`
  background-color: ${theme.palette.secondary.main};
  align-self: center;
  margin-bottom: 8px;
`

const Form = styled.form`
  width: '100%',
  margin-top: ${theme.spacing(1)}
`

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
        Ваш сайт
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
}));

export const SignIn = (props: any) => {
  const [userEmail, setUserEmail] = useState([]); //Хук для ввода почты
  const [userPassword, setUserPassword] = useState([]); //Хук для ввода пароля
  useStyles();

  const submitControl = (event: any) => {
    event.preventDefault();
    console.log('the submit button is clicked.', event.target);
    const submitObject = {
      email: userEmail,
      password: userPassword
    }
    console.log('This is the submitObject that will be sent to the backend ' + JSON.stringify(submitObject));
  }
  
  const handleEmailInput = (event: any) => {
    console.log("User Email: " + event.target.value);
    setUserEmail(event.target.value);
  }

  const handlePasswordInput = (event: any) => {
    console.log("User Password: " + event.target.value);
    setUserPassword(event.target.value);
  }

  return (
    <MyContainer component="main" maxWidth="xs">
      <CssBaseline />
      <FormContainer id="kek">
        <FormAvatar align="center">
          <LockOutlinedIcon />
        </FormAvatar>
        <Typography component="h1" variant="h5" align="center">
          Вход в аккаунт
        </Typography>
        <Form noValidate onSubmit = {(e) => {submitControl(e)}}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Почта"
            name="email"
            autoComplete="email"
            autoFocus
            onChange = {(e: any) => {handleEmailInput(e)}}
            value = {userEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            onChange = {(e: any) => {handlePasswordInput(e)}}
            value = {userPassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />} //Если отмечено "запомнить", то надо добавлять этот проп в submitObject и тогда сторить токен в localStorage
            label="Запомнить меня"                                  //Иначе не нужно
          />
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Войти
          </SubmitButton>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Забыли пароль?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Регистрация
              </Link>
            </Grid>
          </Grid>
        </Form>
      </FormContainer>
      <Box mt={8}>
        <Copyright />
      </Box>
    </MyContainer>
  );
}