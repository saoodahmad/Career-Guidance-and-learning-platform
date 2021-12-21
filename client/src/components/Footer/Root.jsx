import React from 'react';
import { Container,Typography } from '@material-ui/core';
import useStyles from './Styles';
const Root = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md"  className={classes.footerContainer}>
     <Typography variant="subtitle2" color="textSecondary" className={classes.typography}>developed by saood ahmad</Typography>
    </Container>
  );
};

export default Root;