import React, { useState } from 'react';

import {
  Avatar,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './Styles';
import { login } from '../../services/authService';
import CustomSnackBar from '../CustomSnackBar/CustomSnackBar';
import { storeToken } from '../../utils/authUtils';
import { Link } from 'react-router-dom';

const EmailField = ({ loginCredentials, setLoginCredentials }) => {
  return (
    <Grid item>
      <TextField
        name="email"
        type={'email'}
        variant="outlined"
        size="small"
        value={loginCredentials.name}
        onChange={(e) =>
          setLoginCredentials({ ...loginCredentials, email: e.target.value })
        }
        placeholder="Enter your email"
        fullWidth
      />
    </Grid>
  );
};

const PasswordField = ({ loginCredentials, setLoginCredentials }) => {
  return (
    <Grid item>
      <TextField
        name="password"
        type={'password'}
        variant="outlined"
        size="small"
        value={loginCredentials.password}
        onChange={(e) =>
          setLoginCredentials({ ...loginCredentials, password: e.target.value })
        }
        placeholder="Enter password"
        fullWidth
      />
    </Grid>
  );
};

const LogInButton = () => {
  const classes = useStyles();
  return (
    <Button
      type="submit"
      variant="contained"
      className={classes.button}
      size="large"
      fullWidth
    >
      Log In
    </Button>
  );
};

const OtherText = ({ text }) => {
  return (
    <Grid item>
      <Typography variant="subtitle2" color="secondary">
        {text}
      </Typography>
    </Grid>
  );
};

const Head = () => {
  const classes = useStyles();

  return (
    <Grid item>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        spacing={3}
      >
        <Grid item>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
        </Grid>
        <Grid item>
          <Typography variant="h6">Log In</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Form = ({ loginCredentials, setLoginCredentials, handleLogin }) => {
  return (
    <Grid item>
      <form autoComplete="off" noValidate onSubmit={handleLogin}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-around"
          spacing={3}
        >
          <EmailField
            loginCredentials={loginCredentials}
            setLoginCredentials={setLoginCredentials}
          />

          <PasswordField
            loginCredentials={loginCredentials}
            setLoginCredentials={setLoginCredentials}
          />

          <LogInButton />

          <Link to="/forgot-password">
            <OtherText text="Forgot Password ? " />
          </Link>
        </Grid>
      </form>
    </Grid>
  );
};

const Root = () => {
  const classes = useStyles();

  const [loginCredentials, setLoginCredentials] = useState({
    email: null,
    password: null,
  });

  const [err, setErr] = useState(null);

  const [loading, setLoading] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    const { error, token } = await login(loginCredentials);

    setLoading(false);

    if (error) {
      setErr(error);
    } else {
      storeToken(token);
    }
  };

  return (
    <div>
      <Container maxWidth="xs" className={classes.container}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          spacing={4}
        >
          <Head />
          <Form
            loginCredentials={loginCredentials}
            setLoginCredentials={setLoginCredentials}
            handleLogin={handleLogin}
          />
        </Grid>

        {loading === true && (
          <CustomSnackBar message="loading" severity="info" />
        )}
        {loading === false && err && (
          <CustomSnackBar message={err} severity="error" />
        )}
        {loading === false && !err && (
          <CustomSnackBar
            message="Login Success"
            severity="success"
            redirect="/dashboard"
          />
        )}
      </Container>
    </div>
  );
};

export default Root;
