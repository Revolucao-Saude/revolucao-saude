import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '30px',
      backgroundColor: 'rgba(255, 255, 255, 0.3)'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    grid: {
        marginTop: theme.spacing(8),
        width: '100%'
    }
}));

export { styles };