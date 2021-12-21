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
import CustomSnackBar from '../CustomSnackBar/CustomSnackBar';
import { resetPassword } from '../../services/authService';

const EmailField = ({
  passwordResetCredentials,
  setPasswordResetCredentials,
}) => {
  return (
    <Grid item>
      <TextField
        name="email"
        type="email"
        variant="outlined"
        value={passwordResetCredentials.email}
        onChange={(e) =>
          setPasswordResetCredentials({
            ...passwordResetCredentials,
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
  passwordResetCredentials,
  setPasswordResetCredentials,
}) => {
  return (
    <Grid item>
      <TextField
        name="password"
        type="password"
        variant="outlined"
        value={passwordResetCredentials.newPassword}
        onChange={(e) =>
          setPasswordResetCredentials({
            ...passwordResetCredentials,
            newPassword: e.target.value,
          })
        }
        size="small"
        placeholder="Enter new password"
        fullWidth
      />
    </Grid>
  );
};

const ConfirmPasswordField = ({
  passwordResetCredentials,
  setPasswordResetCredentials,
}) => {
  return (
    <Grid item>
      <TextField
        name="confirm-password"
        type="password"
        variant="outlined"
        value={passwordResetCredentials.confirmNewPassword}
        onChange={(e) =>
          setPasswordResetCredentials({
            ...passwordResetCredentials,
            confirmNewPassword: e.target.value,
          })
        }
        size="small"
        placeholder="Renter new password"
        fullWidth
      />
    </Grid>
  );
};

const ResetTokenField = ({
  passwordResetCredentials,
  setPasswordResetCredentials,
}) => {
  return (
    <Grid item>
      <TextField
        name="reset-secret"
        type="password"
        variant="outlined"
        value={passwordResetCredentials.resetToken}
        onChange={(e) =>
          setPasswordResetCredentials({
            ...passwordResetCredentials,
            passwordResetToken: e.target.value,
          })
        }
        size="small"
        placeholder="Enter password reset token"
        fullWidth
      />
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
          <Typography variant="h6">Reset Password</Typography>
        </Grid>
      </Grid>
    </Grid>
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

const ResetPasswordButton = () => {
  const classes = useStyles();
  return (
    <Button
      type="submit"
      variant="contained"
      className={classes.button}
      size="large"
      fullWidth
    >
      Reset Password
    </Button>
  );
};
const Form = ({
  passwordResetCredentials,
  setPasswordResetCredentials,
  handlePasswordReset,
}) => {
  return (
    <Grid item>
      <form autoComplete="off" noValidate onSubmit={handlePasswordReset}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-around"
          spacing={3}
        >
          <EmailField
            passwordResetCredentials={passwordResetCredentials}
            setPasswordResetCredentials={setPasswordResetCredentials}
          />

          <PasswordField
            passwordResetCredentials={passwordResetCredentials}
            setPasswordResetCredentials={setPasswordResetCredentials}
          />

          <ConfirmPasswordField
            passwordResetCredentials={passwordResetCredentials}
            setPasswordResetCredentials={setPasswordResetCredentials}
          />

          <ResetTokenField
            passwordResetCredentials={passwordResetCredentials}
            setPasswordResetCredentials={setPasswordResetCredentials}
          />
          <ResetPasswordButton />
          <OtherText text="Login instead ? " />
        </Grid>
      </form>
    </Grid>
  );
};

const Root = () => {
  const classes = useStyles();

  const [passwordResetCredentials, setPasswordResetCredentials] = useState({
    email: null,
    newPassword: null,
    confirmNewPassword: null,
    passwordResetToken: null,
  });
  const [err, setErr] = useState(null);

  const [loading, setLoading] = useState(null);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    const { error } = await resetPassword(passwordResetCredentials);

    setLoading(false);

    if (error) {
      setErr(error);
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
            passwordResetCredentials={passwordResetCredentials}
            setPasswordResetCredentials={setPasswordResetCredentials}
            handlePasswordReset={handlePasswordReset}
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
            message="Password  Reset Success! Login Again"
            severity="success"
          />
        )}
      </Container>
    </div>
  );
};

export default Root;
