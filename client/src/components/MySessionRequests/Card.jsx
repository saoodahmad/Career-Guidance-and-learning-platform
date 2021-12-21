import React from 'react';

import { CardContent, Grid, Typography, Card } from '@material-ui/core';

import useStyles from './Styles';


const SessionRequestIDField = ({value}) => {
  return (
  <Grid item xs={12} >
    <Grid container justifyContent="space-between" spacing={1}>
      <Grid item xs={12} >
        <Typography variant="subtitle1" color="textSecondary">
          Request ID
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

const RemarkField = ({value}) => {
  return (
  <Grid item xs={12} >
    <Grid container justifyContent="space-between" spacing={1}>
      <Grid item xs={12} >
        <Typography variant="subtitle1" color="textSecondary">
          Mentor's Remark
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

const MessageField = ({value}) => {

  return (
  <Grid item xs={12} >
    <Grid container justifyContent="space-between" spacing={1}>
      <Grid item xs={12}>
        <Typography variant="subtitle1" color="textSecondary">
          Your Message
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

const ViewSession = ({value}) => {

  return (
  <Grid item xs={12} >
    <Grid container justifyContent="space-between" spacing={1}>
      <Grid item xs={12} >
        <Typography variant="subtitle1" color="textSecondary">
          Session
        </Typography>
      </Grid>
      <Grid item xs={12}>
      <Typography variant="subtitle1" color="textPrimary">
      {`Will be visible on my session page on ${new Date(value).toLocaleDateString()}`}
      </Typography>

            
          
      </Grid>
    </Grid>
  </Grid>);
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
        {new Date(value).toLocaleString()}
        </Grid>
      </Grid>
    </Grid>
  );
};

const MentorName = ({ value }) => {
  return (
    <Grid item xs={12}>
      <Grid container justifyContent="space-between" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="textSecondary">
            Mentor Name
          </Typography>
        </Grid>
        <Grid item xs={12}>
        {value}
        </Grid>
      </Grid>
    </Grid>
  );
};

const SessionRequestCard = ({request}) => {

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
              <SessionRequestIDField 
               value={request._id}
              />

              <StatusField 
               value={request.status} 
              />

              <MessageField 
                value={request.subject}
              />

              <StartsOn 
                value={request.start}
              />

              <MentorName 
                value={request?.mentorName || 'To Be Provided'}
              />
              {request.status === 'Accepted' && 
              <RemarkField
                value={request.remark} 
              />}         
              {request.status === 'Accepted' && 
                <ViewSession 
                  value={request.start} 
                />
              }
            </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SessionRequestCard;
