import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../api';

import useStyles from './Styles';

const MentorCard = ({ mentor }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={4}>
      <Link to={`/view-mentor/${mentor._id}`}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          image={`${BASE_URL}/${mentor.personalPhotoURL}`}
          className={classes.cardMedia}
          title="Mentor Image"
        />
        <CardContent className={classes.cardContent}>
          <Typography color="textPrimary">{mentor.name}</Typography>
        </CardContent>
      </Card>
      </Link>
    </Grid>
  );
};

export default MentorCard;
