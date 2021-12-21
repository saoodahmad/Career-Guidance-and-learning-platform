import React from 'react';

import {  Card, CardContent, Grid, Typography } from '@material-ui/core';

import useStyles from './Styles';


const Time = ({ value }) => {
  return (
    <Grid item xs={5} sm={2}>
      <Grid container justifyContent="space-between" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="textSecondary">
            Time
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {value}
        </Grid>
      </Grid>
    </Grid>
  );
};

const Duration = ({ value }) => {
  return (
    <Grid item xs={5} sm={2}>
      <Grid container justifyContent="space-between" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="textSecondary">
            Duration
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {`${value} min`}
        </Grid>
      </Grid>
    </Grid>
  );
};

const MentorName = ({ value }) => {
  return (
    <Grid item xs={5} sm={2}>
      <Grid container justifyContent="space-between" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="textSecondary">
            Mentor
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {value}
        </Grid>
      </Grid>
    </Grid>
  );
};

const MenteeName = ({ value }) => {
  return (
    <Grid item xs={5} sm={2}>
      <Grid container justifyContent="space-between" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="textSecondary">
            Mentee
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {value}
        </Grid>
      </Grid>
    </Grid>
  );
};

const SessionLink = ({ value }) => {
  return (
    <Grid item xs={5} sm={2}>
      <Grid container justifyContent="space-between" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="textSecondary">
            Session
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <a href={value} target="_blank" rel="noreferrer">
            <Typography variant="button">View</Typography>
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};
const SessionCard = ({ session }) => {
  console.log(session);

  const classes = useStyles();

  const time = new Date(session.start).toLocaleTimeString();
  return (
    <Grid item>
    <Card className={classes.card}>
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          spacing={2}
        >
          <Time value={time} />

          <Duration value={session.duration} />
          <MentorName value={session.mentorName} />
          <MenteeName value={session.menteeName} />
          <SessionLink value={session.sessionLink} />
        </Grid>
      </CardContent>
    </Card>
    </Grid>
  );
};

export default SessionCard;
