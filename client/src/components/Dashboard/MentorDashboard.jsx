import React from 'react'

import { Container, Grid, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import useStyles from './Styles';
import DashboardOptions from './DashboardOptions';
const MentorDashboard = ({user}) => {

  const classes = useStyles();

  const name = user.name !== '' ? user.name : user.role;

  return (
    <Container maxWidth="md" className={classes.container}>

      <Typography
        variant="h6"
        className={classes.welcomeTypography}
      >
        {`Welcome ${name}`}
      </Typography>

      <Grid container direction="row" justifyContent="space-around" spacing={5} >
        
        <Grid item xs={12} sm={6}>
          <Link to='/my-profile'>
            <DashboardOptions option="profile"></DashboardOptions>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Link to='/my-verification-requests'>
            <DashboardOptions option="My Verification Request"></DashboardOptions>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Link to='/mentor/approve-session-requests'>
            <DashboardOptions option="Approve Session Request"></DashboardOptions>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Link to='/my-sessions-today'>
            <DashboardOptions option="My Sessions Today"></DashboardOptions>
          </Link>
        </Grid>

      </Grid>

    </Container>
  );
}

export default MentorDashboard
