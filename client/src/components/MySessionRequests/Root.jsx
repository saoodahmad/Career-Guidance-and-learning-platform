import React, { useState, useEffect } from 'react';

import { Container, Grid, Typography } from '@material-ui/core';

import SessionRequestCard from './Card';

import useStyles from './Styles';

import CustomSnackBar from '../CustomSnackBar/CustomSnackBar';

import { getMySessionRequests } from '../../services/sessionRequestService';

const Root = () => {
  const [loading, setLoading] = useState(null);
  const [sessionRequests, setSessionRequests] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoading(true);

    const fetch = async () => {
      const { error, sessionRequests } = await getMySessionRequests();

      if (error) {
        setErr(error);
      } else {
        setSessionRequests(sessionRequests);
      }

      setLoading(false);
    };

    fetch();
  }, []);

  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      {loading === true && <CustomSnackBar message="loading" severity="info" />}
      {loading === false && err && (
        <CustomSnackBar message={err} severity="error" />
      )}
      {loading === false && sessionRequests && (
        <CustomSnackBar message="Success" severity="success" />
      )}
      <Typography variant="h6" className={classes.heading}>
        My Session Requests
      </Typography>
      {sessionRequests && (
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          spacing={4}
        >
          {sessionRequests.map((request) => (
            <SessionRequestCard request={request} key={request._id} />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Root;
