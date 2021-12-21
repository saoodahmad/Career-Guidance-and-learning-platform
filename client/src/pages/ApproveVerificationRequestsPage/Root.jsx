import React from 'react';

import { Container } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import { FooterContainer, NavContainer, ApproveVerificationRequestContainer } from '../../containers';

const HOC = (props) => {
  const useStyles = makeStyles((theme) =>
    createStyles({
      container: {
        marginTop: '4.5vh',
        paddingTop: '4.5vh',
        minHeight : '71vh',
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
      <HOC><ApproveVerificationRequestContainer /></HOC>
      <FooterContainer />
    </div>
  );
};

export default Root;
