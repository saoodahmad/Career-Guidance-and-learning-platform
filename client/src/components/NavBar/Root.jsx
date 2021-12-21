import React from 'react'

import { AppBar, Container, Toolbar } from '@material-ui/core';

import  NavMenu from './NavMenu'

import Image from '../../images/nav_logo.png';

import useStyles from './Styles';

const Root = () => {
    
    const classes = useStyles();
    return (
        <AppBar position="relative" className={classes.flatAppBar}>
      <Toolbar disableGutters>
        <Container  maxWidth="md" align="center" className={classes.container} >
          <img src={Image} className={classes.logo} alt="logo"/>
           <NavMenu /> 
        </Container> 
      </Toolbar>
    </AppBar>
    )
}

export default Root
