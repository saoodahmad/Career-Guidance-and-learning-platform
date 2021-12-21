import React, { useEffect, useState } from 'react';

import { Container, Grid, Typography } from '@material-ui/core';

import useStyles from './Styles';
import VerificationRequestApprovalCard from './Card';
import { getPendingProfileVerificationRequests } from '../../services/usersService';
import CustomSnackBar from '../CustomSnackBar/CustomSnackBar';

const Root = () => {
  const [loading, setLoading] = useState(null);
  const [verificationRequests, setVerificationRequests] = useState(null);
  const [err, setErr] = useState(null);

  const fetch = async () => {
    setLoading(true);
    setVerificationRequests(null);
    const { error, verificationRequests } =
      await getPendingProfileVerificationRequests();

    if (error) {
      setErr(error);
    } else {
      setVerificationRequests(verificationRequests);
    }
    setLoading(false);
  };

  useEffect(() => {
   
    fetch();
  }, []);

  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      
      {loading === true  && (
        <CustomSnackBar message="loading" severity="info" />
      )}
      
      {loading === false && err && (
        <CustomSnackBar message={err} severity="error" />
      )}
      {loading === false && verificationRequests && (
        <CustomSnackBar message="Success" severity="success"  />
      )}
      <Typography variant="h6" className={classes.heading}>Pending Verification Requests</Typography>
      {verificationRequests && (
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          spacing={4}
        >
          {verificationRequests.map((request) => (
            <VerificationRequestApprovalCard  request={request} refetch={fetch} key={request._id}/>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Root;
