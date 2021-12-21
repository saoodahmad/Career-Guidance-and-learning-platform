import React, { useState } from 'react';
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';


import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './Styles';
import { registerAdmin } from '../../services/authService';

import CustomSnackBar from '../CustomSnackBar/CustomSnackBar';

const EmailField = ({ registrationCredential, setRegistrationCredential }) => {
  return (
    <Grid item>
      <TextField
        name="email"
        type="email"
        variant="outlined"
        value={registrationCredential.email}
        onChange={(e) =>
          setRegistrationCredential({
            ...registrationCredential,
            email: e.target.value,
          })
        }
        size="small"
        placeholder="Enter your email"
        fullWidth
      />
    </Grid>
  );
};

const PasswordField = ({
  registrationCredential,
  setRegistrationCredential,
}) => {
  return (
    <Grid item>
      <TextField
        name="password"
        type="password"
        variant="outlined"
        value={registrationCredential.password}
        onChange={(e) =>
          setRegistrationCredential({
            ...registrationCredential,
            password: e.target.value,
          })
        }
        size="small"
        placeholder="Enter password"
        fullWidth
      />
    </Grid>
  );
};

const ConfirmPasswordField = ({
  registrationCredential,
  setRegistrationCredential,
}) => {
  return (
    <Grid item>
      <TextField
        name="confirm-password"
        type="password"
        variant="outlined"
        value={registrationCredential.confirmPassword}
        onChange={(e) =>
          setRegistrationCredential({
            ...registrationCredential,
            confirmPassword: e.target.value,
          })
        }
        size="small"
        placeholder="Renter password"
        fullWidth
      />
    </Grid>
  );
};


const RegisterButton = () => {
  const classes = useStyles();
  return (
    <Button
      type="submit"
      variant="contained"
      className={classes.button}
      size="large"
      fullWidth
    >
      Register
    </Button>
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
          <Typography variant="h6">Register Admin</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Form = ({ setRegistrationCredential, registrationCredential, handleRegistration }) => {
  return (
    <Grid item>
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleRegistration}
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-around"
          spacing={3}
        >
          <EmailField
            registrationCredential={registrationCredential}
            setRegistrationCredential={setRegistrationCredential}
          />

          <PasswordField
            registrationCredential={registrationCredential}
            setRegistrationCredential={setRegistrationCredential}
          />
          <ConfirmPasswordField
            registrationCredential={registrationCredential}
            setRegistrationCredential={setRegistrationCredential}
          />

          <RegisterButton />
        </Grid>
      </form>
    </Grid>
  );
};

const Root = () => {
  const classes = useStyles();

  const [registrationCredential, setRegistrationCredential] = useState({
    email: null,
    password: null,
    confirmPassword: null,
  });

  const [err, setErr] = useState(null);

  const [loading, setLoading] = useState(null);

  const handleRegistration = async(e) => {
    e.preventDefault();
    setErr(null);
    setLoading(true)

    const {error} = await registerAdmin(registrationCredential);
  
    setLoading(false);
    
    if (error) {
      setErr(error)
    }   
  }
  return (
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
          registrationCredential={registrationCredential}
          setRegistrationCredential={setRegistrationCredential}
          handleRegistration = {handleRegistration}
        />
      </Grid>
      {loading === true && (
          <CustomSnackBar message="loading" severity="info" />
        )}
      {loading === false && err && <CustomSnackBar message={err} severity="error" />}
        {loading === false && !err && <CustomSnackBar message="Admin Registration Success" severity="success"/> }
    </Container>
  );
};

export default Root;
