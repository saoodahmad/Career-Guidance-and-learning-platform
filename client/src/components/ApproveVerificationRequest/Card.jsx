import React, { useState } from 'react';

import {
  Button,
  CardContent,
  Grid,
  Typography,
  Card,
  TextField,
} from '@material-ui/core';

import { BASE_URL } from '../../api';
import useStyles from './Styles';
import {
  approveProfileVerificationRequest,
  rejectProfileVerificationRequest,
} from '../../services/usersService';
import CustomSnackBar from '../CustomSnackBar/CustomSnackBar';

const VerificationRequestIDField = ({ value }) => {
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

const RemarkField = ({ value, state, setState }) => {
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
            value={value}
            onChange={(e) => setState({ ...state, remark: e.target.value })}
          ></TextField>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ViewDocument = ({ value }) => {
  return (
    <Grid item xs={12}>
      <Grid container justifyContent="space-between" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="textSecondary">
            Doc
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <a href={`${BASE_URL}/${value}`} target="_blank" rel="noreferrer">
            <Button size="small" color="primary">
              View
            </Button>
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ViewUser = ({ value }) => {
  return (
    <Grid item xs={12}>
      <Grid container justifyContent="space-between" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="textSecondary">
            User
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <a
            href={`/admin/view-user/${value}`}
            target="_blank"
            rel="noreferrer"
          >
            <Button size="small" color="primary">
              View
            </Button>
          </a>
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
        spacing={2}
      >
        <Grid item xs={5}>
          <Button
            type="submit"
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

const VerificationRequestApprovalCard = ({ request, refetch }) => {
  const [state, setState] = useState(request);

  const [loading, setLoading] = useState(null);
  const [err, setErr] = useState(null);

  const classes = useStyles();

  const handleApproval = async () => {
    setLoading(true);

    const { error } = await approveProfileVerificationRequest(state);

    if (error) {
      setErr(error);
    }

    setLoading(false);
  };

  const handleRejection = async () => {
    setLoading(true);

    const { error } = await rejectProfileVerificationRequest(state);

    if (error) {
      setErr(error);
    }

    setLoading(false);
  };
  return (
    <Grid item xs={12} sm={6}>
      {loading === true && <CustomSnackBar message="loading" severity="info" />}
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
            <VerificationRequestIDField value={state._id} />

            <ViewUser value={state.user} />

            <ViewDocument value={state.verificationDocumentURL} />

            <RemarkField
              value={state.remark}
              state={state}
              setState={setState}
            />

            <ActionButton
              handleApproval={handleApproval}
              handleRejection={handleRejection}
            />
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default VerificationRequestApprovalCard;
