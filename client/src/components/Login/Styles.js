import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      margin: '4.5vh auto',
      paddingTop: '10vh',
      paddingBottom: '10vh',
      minHeight: '70vh',
    },
    avatar: {
      backgroundColor: '#28B78D',
    },
    button: {
      marginTop: '3vh',
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
  })
);

export default useStyles;
