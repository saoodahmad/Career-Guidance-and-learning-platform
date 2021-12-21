import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    footerContainer: {
      padding: '10px 1.5px',
    },
    typography: {
      textAlign: 'center',
    },
  })
);

export default useStyles;
