import React, { useState, useEffect } from 'react';

import { Container, Grid, Typography } from '@material-ui/core';

import VerificationRequestCard from './Card';

import useStyles from './Styles';
import { getMyProfileVerificationRequests } from '../../services/usersService';
import CustomSnackBar from '../CustomSnackBar/CustomSnackBar';

const Root = () => {
  const [loading, setLoading] = useState(null);
  const [verificationRequests, setVerificationRequests] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoading(true);

    const fetch = async () => {
      const { error, verificationRequests } =
        await getMyProfileVerificationRequests();

      if (error) {
        setErr(error);
      } else {
        setVerificationRequests(verificationRequests);
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
      {loading === false && verificationRequests && (
        <CustomSnackBar message="Success" severity="success" />
      )}

      <Typography variant="h6" className={classes.heading}>
        My Verification Request
      </Typography>
      {verificationRequests && (
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          spacing={4}
        >
          {verificationRequests.map((request) => (
            <VerificationRequestCard request={request} key={request._id} />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Root;
