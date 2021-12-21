import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: '20px',
    backgroundColor: '#fcffff',
  },
  heading: {
    marginBottom: '5vh',
  },

  buttonContainer: {
    marginTop: '1vh',
  },

  button: {
    backgroundColor: '#28B78D',
    color: 'white',
    '&:hover': {
      backgroundColor: '#28B78D',
      color: 'white',
    },
  },
  alert: {
    marginTop: '10vh',
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

export default useStyles;
