import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      margin: '4.5vh auto',
      backgroundColor: '#fcffff',
      padding: '70px',
      minHeight: '71vh',
    },
    welcomeTypography: {
      marginBottom: '20px',
    },
    loader: {
      margin: 'auto',
    },
    options: {
      backgroundColor: '#28B78D',
    },
    dashboardaction: {
      color: 'white',
    },
  })
);

export default useStyles;
