import { Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getMySessionsToday } from '../../services/sessionsService';
import CustomSnackBar from '../CustomSnackBar/CustomSnackBar';
import SessionCard from './Card';

import useStyles from './Styles';
const Root = () => {
  const [loading, setLoading] = useState(null);
  const [sessions, setSessions] = useState(null);
  const [err, setErr] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    setLoading(true);
    setErr(null);
    const fetch = async () => {
      const { sessions, error } = await getMySessionsToday();

      if (error) {
        setErr(error);
      } else {
        setSessions(sessions);
      }

      setLoading(false);
    };

    fetch();
  }, []);

  console.log(sessions);

  return (
    <Container maxWidth="md" className={classes.container}>

      {loading === true && (
          <CustomSnackBar message="loading" severity="info" />
        )}
      {loading === false && err && (
        <CustomSnackBar message={err} severity="error" />
      )}
      {loading === false && sessions && (
        <CustomSnackBar message="Success" severity="success" />
      )}

      <Typography variant="h6" className={classes.heading}>Sessions Today</Typography>
      {sessions && (
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          spacing={4}
        >
          {sessions.map((session) => (
            <SessionCard session={session} key={session._id} />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Root;
