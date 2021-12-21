import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      marginTop: '4.5vh',
      backgroundColor: '#fcffff',
    },
    gridContainer: {
      border: '1px solid #F8FBFB',
      padding: '70px',
      marginBottom: '10px',
      backgroundColor: '#fcffff',
    },
    button: {
      backgroundColor: '#28B78D',
      color: 'white',
      margin: '3vh',
      '&:hover': {
        backgroundColor: '#28B78D',
        color: 'white',
      },
    },

    card: {
      position: 'relative',
      flexDirection: 'column',
      border: '1px solid grey',
    },
    cardMedia: {
      width: '100%',
      height: 'auto',
    },
  })
);

export default useStyles;
