import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    flatAppBar: {
      backgroundColor: 'white',
      color: 'black',
      boxShadow: '0px 0px 0px 0px',
    },
    container: {
      paddingBottom: '2px',
      borderBottom: '2px solid black',
    },
    button: {
      '&:hover': {
        backgroundColor: '#28B78D',
        color: 'white',
      },
      padding: '5px',
    },
  })
);

export default useStyles;
