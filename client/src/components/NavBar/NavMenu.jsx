import React from 'react';

import { Button, Grid, Typography } from '@material-ui/core';

import { Link } from 'react-router-dom';

import useStyles from './Styles';

import { isLoggedIn } from '../../utils/authUtils';

const Home = () => {
  const classes = useStyles();

  return (
    <Grid item>
      <Link to="/">
        <Button className={classes.button}>
          <Typography variant="h7">Home</Typography>
        </Button>
      </Link>
    </Grid>
  );
};

const About = () => {
  const classes = useStyles();

  return (
    <Grid item>
      <Link to="/about">
        <Button className={classes.button}>
          <Typography variant="h7">About</Typography>
        </Button>
      </Link>
    </Grid>
  );
};

const Contact = () => {
  const classes = useStyles();

  return (
    <Grid item>
      <Link to="/contact">
        <Button className={classes.button}>
          <Typography variant="h7">Contact</Typography>
        </Button>
      </Link>
    </Grid>
  );
};

const DashboardOrLogin = ({isUser}) => {
  const classes = useStyles();

  return (
    <Grid>
      <Link  to={isUser ? '/dashboard' : '/login'}>
        {isUser ? (
          <Button className={classes.button}>
            <Typography variant="h7">Dashboard</Typography>
          </Button>
        ) : (
          <Button className={classes.button}>
            <Typography variant="h7">Login</Typography>
          </Button>
        )}
      </Link>
    </Grid>
  );
};

const RegisterOrLogout = ({isUser, handleLogOut}) => {
  
  const classes = useStyles();

  return <Grid item>
  <Link to={isUser ? '/login' : '/register'}>
    {isUser ? (
      <Button className={classes.button}>
        <Typography variant="h7" onClick={handleLogOut}>
          Logout
        </Typography>
      </Button>
    ) : (
      <Button className={classes.button}>
        <Typography variant="h7">Register</Typography>
      </Button>
    )}
  </Link>
</Grid>

}
const Root = () => {
 
  const isUser = isLoggedIn();
  
  const handleLogOut = (e) => {
    localStorage.removeItem('token');
  };

  return (
    <Grid container flex direction="row" justifyContent="space-around">
      <Home />
      <About />
      <Contact />
      <DashboardOrLogin isUser={isUser} />
      <RegisterOrLogout isUser={isUser} handleLogOut={handleLogOut} />
    </Grid>
  );
};

export default Root;
