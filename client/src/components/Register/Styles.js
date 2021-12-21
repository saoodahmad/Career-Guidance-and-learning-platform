import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      marginTop: '2vh',
      marginBottom: '3vh',
      paddingTop: '2vh',
      paddingBottom: '13vh',
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
