import React from 'react'
import {CircularProgress} from '@material-ui/core'
import useStyles from './Styles'
const Root = () => {
    const classes = useStyles()
    return (
        <>
        <CircularProgress className={classes.loader} size={'15vh'} color="inherit"  /> 
        </>
    )
}

export default Root
