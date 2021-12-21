import React from 'react';

import { useHistory } from 'react-router-dom';

import Snackbar from '@material-ui/core/Snackbar';

import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const CustomSnackBar = ({ message, severity, redirect, refetch }) => {
  const [open, setOpen] = React.useState(true);

  const history = useHistory();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);

    if (redirect) {
      history.push(redirect);
    }
    if (refetch) {
      refetch();
    }
  };

  return (
    <div>
      {
        severity === 'success' ? (
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity={severity}>
              {message}
            </Alert>
          </Snackbar>
        ) : (
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={open}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity={severity}>
              {message}
            </Alert>
          </Snackbar>
        ) 
      }
    </div>
  );
};

export default CustomSnackBar;
