import React from 'react'

import { Container, Grid, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import useStyles from './Styles';
import DashboardOptions from './DashboardOptions';
const AdminDashboard = ({user}) => {

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
          <Link to='/admin/approve-verification-requests'>
            <DashboardOptions option="Pending Request"></DashboardOptions>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Link to='/admin/register-admin'>
            <DashboardOptions option="Add New Admin"></DashboardOptions>
          </Link>
        </Grid>
        
        {/*
        <Grid item xs={12} sm={6}>
          <Link to={PATH_CUSTOMER_GET_MY_TRADE_REQUESTS_PAGE}>
            <DashboardOptionsCard option="my trade requests"></DashboardOptionsCard>
          </Link>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <Link to="/invoice">
            <DashboardOptionsCard option="invoice"></DashboardOptionsCard>
          </Link>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <Link to={PATH_MY_VERIFICATION_REQUESTS_PAGE}>
            <DashboardOptionsCard option="verification requests"></DashboardOptionsCard>
          </Link>
        </Grid> */}

      </Grid>

    </Container>
  );
}

export default AdminDashboard


