import React from 'react';
import {
  Button,
  Card,
  Typography,
} from '@material-ui/core';

import useStyles from './Styles';
const DashboardOptions = ({option}) => {
  const classes = useStyles();
  return (
    <Card className={classes.options}>
      <Button size="large">
        <Typography variant="h7" className={classes.dashboardaction}>
         {option}
        </Typography>
      </Button>
     </Card>
  );
};

export default DashboardOptions;