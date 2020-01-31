import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import defaultTheme from '@material-ui/core/styles/defaultTheme'

import styled from 'styled-components';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = defaultTheme;

const LogoutButton = styled(Button)`
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  margin: ${theme.spacing(3, 0, 2)};
  padding: 0 30px;
  backgroundColor: ${theme.palette.primary.main}
`

const MyContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-content: center;
  justify-content: center;
`;

const useStyles = makeStyles(theme => ({
}));

const logout = () => {
  localStorage.clear();
  console.log('You have logged out');
  window.location.replace('/');
}

export default function Home(props) {
  useStyles(props);

  return (
      <MyContainer component="main" maxWidth="sm">
        <CssBaseline />
        <Typography variant="h3" component="h1" align="center">
          Ну, вы залогинились.
        </Typography>
        <Typography variant="h5" component="h2" align="center">
          {'Хотите разлогиниться?'}
        </Typography>
        <LogoutButton variant="contained" color="secondary" onClick={() => logout()}>Выйти</LogoutButton>
      </MyContainer>
  );
}