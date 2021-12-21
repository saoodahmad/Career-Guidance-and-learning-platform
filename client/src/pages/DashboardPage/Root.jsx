import React from 'react'

import { Container } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import { DashboardContainer, FooterContainer, NavContainer } from '../../containers';

const HOC = (props) => {
    const useStyles = makeStyles((theme) =>
      createStyles({
        container: {
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
        <HOC><DashboardContainer /></HOC>
        <FooterContainer />
      </div>
    );
  };
  
  export default Root;
  
