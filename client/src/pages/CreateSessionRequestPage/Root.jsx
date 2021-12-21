import React from 'react';

import { Container } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import {
  CreateSessionRequestContainer,
  FooterContainer,
  NavContainer,
} from '../../containers';

const HOC = (props) => {
  const useStyles = makeStyles((theme) =>
    createStyles({
      container: {
        // marginTop: '4.5vh',
        // backgroundColor: '#fcffff',
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

const Root = ({match}) => {
  return (
    <div>
      <NavContainer />
      <HOC>
        <CreateSessionRequestContainer mentorID={match.params.mentorID}/>
      </HOC>
      <FooterContainer />
    </div>
  );
};

export default Root;
