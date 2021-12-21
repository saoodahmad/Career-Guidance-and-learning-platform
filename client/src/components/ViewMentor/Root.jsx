import {
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../api';
import { getMentorById } from '../../services/usersService';
import { isLoggedIn } from '../../utils/authUtils';
import CustomSnackBar from '../CustomSnackBar/CustomSnackBar';

import useStyles from './Styles';
const Root = ({ mentorID }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(null);
  const [mentor, setMentor] = useState(null);
  const [err, setErr] = useState(null);

  const token = isLoggedIn();
  const isUser = token && true
  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      const { mentor, error } = await getMentorById(mentorID);

      if (error) {
        setErr(error);
      } else {
        setMentor(mentor);
      }

      setLoading(false);
    };

    fetch();
  }, [mentorID]);

  console.log(mentor);
  return (
    <Container
      maxWidth="md"
      className={classes.container}
      alignContent="center"
    >
      {loading === true && (
          <CustomSnackBar message="loading" severity="info" />
        )}
      {loading === false && err && (
        <CustomSnackBar message={err} severity="error" />
      )}
      {loading === false && !err && (
        <CustomSnackBar message="Success" severity="success" />
      )}
      {mentor && (
        <Card className={classes.card}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12} sm={4} alignContent="center">
              <CardMedia
                component="img"
                image={`${BASE_URL}/${mentor.photo}`}
                title="Photo"
                className={classes.CardMedia}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                spacing={4}
              >
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    spacing={1}
                  >
                    <Grid item alignContent="center">
                      <Typography variant="h6">{mentor.name}</Typography>
                    </Grid>

                    <Grid item alignContent="center">
                      <Typography variant="subtitle2" color="textSecondary">
                        {mentor.qualification}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                  >{`Category: ${mentor.category}`}</Typography>
                </Grid>
                <Grid item alignContent="center">
                  <Typography variant="body">{mentor.description}</Typography>
                </Grid>

                {isUser && (
                  <Grid item alignContent="center">
                    <Link to={`/create-session-request/${mentor._id}`}>
                      <Button className={classes.button}>
                        Request session
                      </Button>
                    </Link>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Card>
      )}
    </Container>
  );
};

export default Root;
