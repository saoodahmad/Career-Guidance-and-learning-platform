import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import { FooterContainer, NavContainer } from '../../containers';

const HOC = (props) => {
  const useStyles = makeStyles((theme) =>
    createStyles({
      container: {
        minHeight: '71vh',
        paddingTop: '4.5vh',
        marginTop: '4.5vh',
        backgroundColor: '#fcffff',
      },
    })
  );

  const classes = useStyles();

  return (
    <Container maxWidth="md" align="center" className={classes.container}>
      {props.children}
    </Container>
  );
};

const Root = () => {
  return (
    <div>
      <NavContainer />
      <HOC>
        <Typography variant="h6">
          Coming Soon
        </Typography>
      </HOC>
      <FooterContainer />
    </div>
  );
};

export default Root;
