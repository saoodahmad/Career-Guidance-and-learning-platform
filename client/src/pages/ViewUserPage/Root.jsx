import React from 'react';

import { Container } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import { FooterContainer,  NavContainer,  ViewUserContainer } from '../../containers';

const HOC = (props) => {
  const useStyles = makeStyles((theme) =>
    createStyles({
      container: {
        minHeight : '71vh',
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


const Root = ({match}) => {

  const userID = match.params.id
  
  return (
    <div>
      <NavContainer />
      <HOC><ViewUserContainer userID={userID} /></HOC>
      <FooterContainer />
    </div>
  );
};

export default Root;
