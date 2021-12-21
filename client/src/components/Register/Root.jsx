import React, { useState } from 'react';
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Select,
} from '@material-ui/core';

// import {Alert} from '@material-ui/lab'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './Styles';
import { register } from '../../services/authService';
import { storeToken } from '../../utils/authUtils';
import CustomSnackBar from '../CustomSnackBar/CustomSnackBar';
import { Link } from 'react-router-dom';

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

const ResetTokenField = ({
  registrationCredential,
  setRegistrationCredential,
}) => {
  return (
    <Grid item>
      <TextField
        name="reset-secret"
        type="password"
        variant="outlined"
        value={registrationCredential.resetToken}
        onChange={(e) =>
          setRegistrationCredential({
            ...registrationCredential,
            passwordResetToken: e.target.value,
          })
        }
        size="small"
        placeholder="Enter reset secret"
        fullWidth
      />
    </Grid>
  );
};

const RoleSelectField = ({
  registrationCredential,
  setRegistrationCredential,
  options,
}) => {
  return (
    <Grid item>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={8}
      >
        <Grid item>
          <Typography variant="subtitle">I am</Typography>
        </Grid>
        <Grid item>
          <Select
            native
            value={registrationCredential.role}
            onChange={(e) =>
              setRegistrationCredential({
                ...registrationCredential,
                role: e.target.value,
              })
            }
            defaultValue="mentor"
            fullWidth
            variant="outlined"
            disableUnderline
            autoWidth
          >
            {options.map((opt) => (
              <option value={opt.value} key={opt.value}>
                {opt.title}
              </option>
            ))}
          </Select>
        </Grid>
      </Grid>
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
          <Typography variant="h6">Register</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Form = ({
  setRegistrationCredential,
  registrationCredential,
  handleRegistration,
}) => {
  return (
    <Grid item>
      <form autoComplete="off" noValidate onSubmit={handleRegistration}>
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

          <RoleSelectField
            registrationCredential={registrationCredential}
            setRegistrationCredential={setRegistrationCredential}
            options={[
              { title: 'Mentor', value: 'mentor' },
              { title: 'Mentee', value: 'mentee' },
            ]}
          />

          <ResetTokenField
            registrationCredential={registrationCredential}
            setRegistrationCredential={setRegistrationCredential}
          />

          <RegisterButton />

          <Link to="/login">
            <OtherText text="Login instead ? " />
          </Link>
        </Grid>
      </form>
    </Grid>
  );
};

const Signup = () => {
  const classes = useStyles();

  const [registrationCredential, setRegistrationCredential] = useState({
    email: null,
    password: null,
    confirmPassword: null,
    role: 'mentor',
    passwordResetToken: null,
  });

  const [err, setErr] = useState(null);

  const [loading, setLoading] = useState(null);

  const handleRegistration = async (e) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    const { error, token } = await register(registrationCredential);

    setLoading(false);

    if (error) {
      setErr(error);
    } else {
      storeToken(token);
    }
  };
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
          handleRegistration={handleRegistration}
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
          message="Registration Success"
          severity="success"
          redirect="/dashboard"
        />
      )}
    </Container>
  );
};

export default Signup;
