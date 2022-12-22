import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      

      boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
      background: "rgba(225,225,225, 0.5)",
    
      borderRadius: "25px"

     
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      
      
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      boxShadow: ' 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
      
      
    }
}));

export { styles };