import React, { useEffect, useState } from 'react';

import { Container, Grid, Typography } from '@material-ui/core';

import useStyles from './Styles';
import SessionRequestApprovalCard from './Card';

import CustomSnackBar from '../CustomSnackBar/CustomSnackBar';
import { getPendingSessionRequests } from '../../services/sessionRequestService';

const Root = () => {
  const [loading, setLoading] = useState(null);
  const [sessionRequests, setSessionRequests] = useState(null);
  const [err, setErr] = useState(null);

  const fetch = async () => {
    setLoading(true);
    const { error, sessionRequests } =
      await getPendingSessionRequests();

    if (error) {
      setErr(error);
    } else {
      setSessionRequests(sessionRequests);
    }
    setLoading(false);
  };

  useEffect(() => {
    



    fetch();
  }, []);

  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>

      {loading === true && <CustomSnackBar message="loading" severity="info"/>}
      {loading === false && err && (
        <CustomSnackBar message={err} severity="error" />
      )}
      {loading === false && sessionRequests && (
        <CustomSnackBar message="Success" severity="success" />
      )}
      <Typography variant="h6" className={classes.heading}>Pending Session Request</Typography>
      {sessionRequests && (
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          spacing={4}
        >
          {sessionRequests.map((request) => (
            <SessionRequestApprovalCard  request={request} key={request._id} refetch={fetch}/>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Root;
