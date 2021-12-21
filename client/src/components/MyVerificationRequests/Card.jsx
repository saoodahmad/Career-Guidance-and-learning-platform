import React from 'react';

import { Button, CardContent, Grid, Typography, Card } from '@material-ui/core';

import useStyles from './Styles';
import { BASE_URL } from '../../api';

const VerificationRequestIDField = ({value}) => {
  return (
  <Grid item xs={12} >
    <Grid container justifyContent="space-between" spacing={1}>
      <Grid item xs={12} >
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
  </Grid>);
};

const StatusField = ({value}) => {

  return (
  <Grid item xs={12} >
    <Grid container justifyContent="space-around" spacing={1}>
      <Grid item xs={12}>
        <Typography variant="subtitle1" color="textSecondary">
          Status
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

const RemarkField = ({value}) => {

  return (
  <Grid item xs={12} >
    <Grid container justifyContent="space-between" spacing={1}>
      <Grid item xs={12}>
        <Typography variant="subtitle1" color="textSecondary">
          Remark
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1" color="textPrimary">
          {value}
        </Typography>
      </Grid>
    </Grid>
  </Grid>);
};

const ViewDocument = ({value}) => {

  return (
  <Grid item xs={12} >
    <Grid container justifyContent="space-between" spacing={1}>
      <Grid item xs={12} >
        <Typography variant="subtitle1" color="textSecondary">
          Doc
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <a
          href={`${BASE_URL}/${value}`}
          target="_blank"
          rel="noreferrer"
        >
          <Button size="small" color="primary">
            View
          </Button>
        </a>
      </Grid>
    </Grid>
  </Grid>);
};
const VerificationRequestCard = ({request}) => {

  console.log(request)
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Grid
              container
              direction="column"
              justifyContent="space-between"
              spacing={4}
              alignItems="center"
            >
              <VerificationRequestIDField value={request._id}/>

              <StatusField value={request.status} />
  
              
              {request.status !== 'pending' &&
              
                <RemarkField value={request.remark} />
              }
              

              <ViewDocument value={request.verificationDocumentURL} />
            </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default VerificationRequestCard;
