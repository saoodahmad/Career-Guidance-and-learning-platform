import React, { useState } from 'react';

import {
  Button,
  CardContent,
  Grid,
  Typography,
  Card,
  TextField,
} from '@material-ui/core';

import useStyles from './Styles';

import CustomSnackBar from '../CustomSnackBar/CustomSnackBar';
import {
  approveSessionRequests,
  rejectSessionRequests,
} from '../../services/sessionRequestService';

const SessionRequestIDField = ({ value }) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        spacing={2}
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="textSecondary">
            ID
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="textPrimary">
            {value}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const MessageField = ({ value }) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        spacing={1}
      >
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="textSecondary">
            Message
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {value}
        </Grid>
      </Grid>
    </Grid>
  );
};

const DurationField = ({ value }) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        spacing={1}
      >
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="textSecondary">
            Duration
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {value}
        </Grid>
      </Grid>
    </Grid>
  );
};

const StartsOn = ({ value }) => {
  return (
    <Grid item xs={12}>
      <Grid container justifyContent="space-between" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="textSecondary">
            Starts On
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {value}
        </Grid>
      </Grid>
    </Grid>
  );
};

const EndsOn = ({ value }) => {
  return (
    <Grid item xs={12}>
      <Grid container justifyContent="space-between" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="textSecondary">
            Ends On
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {value}
        </Grid>
      </Grid>
    </Grid>
  );
};

const StartsAt = ({ value }) => {
  return (
    <Grid item xs={12}>
      <Grid container justifyContent="space-between" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="textSecondary">
            Start Time
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {value}
        </Grid>
      </Grid>
    </Grid>
  );
};

const EndsAt = ({ value }) => {
  return (
    <Grid item xs={12}>
      <Grid container justifyContent="space-between" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="textSecondary">
            End Time
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
    <Grid item xs={12}>
      <Grid container justifyContent="space-between" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="textSecondary">
            Mentee Name
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {value}
        </Grid>
      </Grid>
    </Grid>
  );
};

const RemarkField = ({ remark, setRemark }) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        spacing={1}
      >
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="textSecondary">
            Remark
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="remark"
            variant="outlined"
            size="small"
            multiline
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          ></TextField>
        </Grid>
      </Grid>
    </Grid>
  );
};

const SessionLinkField = ({ sessionLink, setSessionLink }) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        spacing={1}
      >
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="textSecondary">
            Session Link
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="remark"
            variant="outlined"
            size="small"
            multiline
            value={sessionLink}
            onChange={(e) => setSessionLink(e.target.value)}
          ></TextField>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ActionButton = ({ handleApproval, handleRejection }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Grid
        container
        justifyContent="space-evenly"
        alignItems="center"
        spacing={4}
      >
        <Grid item xs={5}>
          <Button
            type="submit"
            size="small"
            variant="contained"
            className={classes.button}
            onClick={handleApproval}
            fullWidth
          >
            Accept
          </Button>
        </Grid>
        <Grid item xs={5}>
          <Button
            type="submit"
            size="small"
            variant="contained"
            color="secondary"
            onClick={handleRejection}
            fullWidth
          >
            Reject
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

const SessionRequestApprovalCard = ({ request, refetch }) => {
  const [loading, setLoading] = useState(null);

  const [err, setErr] = useState(null);

  const [remark, setRemark] = useState(null);

  const [sessionLink, setSessionLink] = useState(null);

  const classes = useStyles();

  const handleApproval = async () => {
    setLoading(true);
    setErr(null);
    const { error } = await approveSessionRequests(
      request._id,
      remark,
      sessionLink
    );

    if (error) {
      setErr(error);
    }

    setLoading(false);
  };

  const handleRejection = async () => {
    setLoading(true);

    const { error } = await rejectSessionRequests(request._id, remark);

    if (error) {
      setErr(error);
    }

    setLoading(false);
  };

  let startsOn = new Date(request.start).toLocaleDateString();

  let startsAt = new Date(request.start).toLocaleTimeString();

  let endsOn = new Date(request.end).toLocaleDateString();

  let endsAt = new Date(request.end).toLocaleTimeString();

  return (
    <Grid item xs={12} sm={6}>
      {loading === true && <CustomSnackBar message="please wait" severity="info" />}
      {loading === false && err && (
        <CustomSnackBar message={err} severity="error" />
      )}
      {loading === false && !err && (
        <CustomSnackBar
          message="Success"
          severity="success"
          refetch={refetch}
        />
      )}
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            spacing={4}
            alignItems="center"
          >
            <SessionRequestIDField value={request._id} />

            <MessageField value={request.subject} />

            <MenteeName value={request?.menteeName || 'To Be Provided'} />

            <StartsOn value={startsOn} />

            <StartsAt value={startsAt} />

            <EndsOn value={endsOn} />

            <EndsAt value={endsAt} />

            <DurationField value={request.duration} />

            <RemarkField remark={remark} setRemark={setRemark} />

            <SessionLinkField
              sessionLink={sessionLink}
              setSessionLink={setSessionLink}
            />
            <ActionButton
              handleApproval={handleApproval}
              remark={remark}
              handleRejection={handleRejection}
            />
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SessionRequestApprovalCard;
