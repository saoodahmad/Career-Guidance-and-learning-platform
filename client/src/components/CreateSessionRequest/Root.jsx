import React, { useState } from 'react';

import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';

import useStyles from './Styles';

import DateTimePicker from 'react-datetime-picker';
import { createSessionRequest } from '../../services/sessionRequestService';
import CustomSnackBar from '../CustomSnackBar/CustomSnackBar';

const DateAndTimePicker = ({ date, setDate }) => {
  const minDate = new Date();

  const maxDate = new Date(minDate.getTime() + 20 * 24 * 60 * 60 * 1000);
  return (
    <Grid item>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        spacing={1}
      >
        <Grid item>
          <Typography variant="subtitle1" color="textPrimary">
            Start Date and Time
          </Typography>
        </Grid>
        <Grid>
          <DateTimePicker
            onChange={setDate}
            value={date}
            minDate={new Date()}
            maxDate={maxDate}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const SubjectField = ({
  sessionRequestCredentials,
  setSessionRequestCredentials,
}) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        spacing={1}
      >
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="textPrimary">
            Something that you want mentor to know
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="remark"
            variant="outlined"
            size="small"
            multiline
            value={sessionRequestCredentials.subject}
            onChange={(e) =>
              setSessionRequestCredentials({
                ...sessionRequestCredentials,
                subject: e.target.value,
              })
            }
          ></TextField>
        </Grid>
      </Grid>
    </Grid>
  );
};

const DurationField = ({
  sessionRequestCredentials,
  setSessionRequestCredentials,
}) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        spacing={1}
      >
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="textPrimary">
            Duration of Session (in mins)
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="duration"
            type="number"
            variant="outlined"
            size="small"
            multiline
            value={sessionRequestCredentials.duration}
            onChange={(e) =>
              setSessionRequestCredentials({
                ...sessionRequestCredentials,
                duration: e.target.value,
              })
            }
          ></TextField>
        </Grid>
      </Grid>
    </Grid>
  );
};

const RequestVerificationButton = ({ sessionRequestHandler }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.buttonContainer}>
      <Button
        variant="contained"
        className={classes.button}
        onClick={sessionRequestHandler}
      >
        Request Session
      </Button>
    </Grid>
  );
};

const Form = ({
  sessionRequestCredentials,
  setSessionRequestCredentials,
  date,
  setDate,
  sessionRequestHandler,
}) => {
  return (
    <Grid item>
      <form autoComplete="off" noValidate>
        <Grid
          container
          direction="column"
          spacing={4}
          justifyContent="space-evenly"
          alignItems="center"
        >
          <SubjectField
            sessionRequestCredentials={sessionRequestCredentials}
            setSessionRequestCredentials={setSessionRequestCredentials}
          />

          <DateAndTimePicker date={date} setDate={setDate} />

          <DurationField
            sessionRequestCredentials={sessionRequestCredentials}
            setSessionRequestCredentials={setSessionRequestCredentials}
          />

          <RequestVerificationButton
            sessionRequestHandler={sessionRequestHandler}
          />
        </Grid>
      </form>
    </Grid>
  );
};
const Root = ({ mentorID }) => {
  

  const [loading, setLoading] = useState(null);
  const [err, setErr] = useState(null);

  const [sessionRequestCredentials, setSessionRequestCredentials] = useState({
    duration: 0,
    subject: 'Excited to be your mentee',
    mentorID: mentorID,
  });

  const [date, setDate] = useState(new Date());

  const sessionRequestHandler = async (e) => {
    e.preventDefault();

    const totalMilliSeconds = date.getTime();

    const durationInMilliSeconds =
      sessionRequestCredentials.duration * 60 * 1000;

    const end = new Date(totalMilliSeconds + durationInMilliSeconds);

    setLoading(true);
    setErr(null);
    const { error } = await createSessionRequest(
      sessionRequestCredentials,
      date,
      end
    );
    if (error) {
      setErr(error);
    }
    setLoading(false);
  };
  return (
    <div>
      <Container >
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          spacing={4}
          alignItems="center"
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
          <Grid item>
            <Typography variant="h6">Request Session</Typography>
          </Grid>

          <Form
            sessionRequestCredentials={sessionRequestCredentials}
            setSessionRequestCredentials={setSessionRequestCredentials}
            date={date}
            setDate={setDate}
            sessionRequestHandler={sessionRequestHandler}
          />
        </Grid>
      </Container>
    </div>
  );
};

export default Root;
