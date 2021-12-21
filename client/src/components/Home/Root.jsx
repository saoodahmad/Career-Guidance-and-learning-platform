import { Button, Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllMentors } from '../../services/usersService';
import CustomSnackBar from '../CustomSnackBar/CustomSnackBar';

import MentorCard from './Card';

import useStyles from './Styles';

const Root = () => {
  const classes = useStyles();

  const [loading, setLoading] = useState(null);
  const [mentors, setMentors] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoading(true);
    setErr(null);
    const fetch = async () => {
      const { mentors, error } = await getAllMentors();

      if (error) {
        setErr(error);
      } else {
        setMentors(mentors);
      }

      setLoading(false);
    };

    fetch();
  }, []);
  return (
    <Container maxWidth="md" className={classes.container}>
      {loading === true && <CustomSnackBar message="loading" severity="info" />}

      {loading === false && err && (
        <CustomSnackBar message={err} severity="error" />
      )}
      {loading === false && !err && (
        <CustomSnackBar message="Success" severity="success" />
      )}
      {mentors && (
        <>
          <Grid
            container
            justifyContent="space-between"
            direction="column"
            spacing={3}
          >
            <Grid item>
              <Grid container justifyContent="space-between" spacing={4}>
                {mentors.map((mentor) => (
                  <MentorCard mentor={mentor} />
                ))}
              </Grid>
            </Grid>
            <Grid item alignContent="center">
              <Link to={'/mentors'}>
                <Button className={classes.button}>View More</Button>
              </Link>
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Root;
