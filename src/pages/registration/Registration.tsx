import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CadastroUsuario from '../cadastroUsuario/CadastroUsuario';
import './Registration.css';
import FooterCadastro from '../../components/footer/footerCadastro/Footer'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {''}
      <Link color="inherit" href="https://mui.com/">

      </Link>{' '}
      { }
      {''}
    </Typography>
  );
}

const useStyles = makeStyles((theme) =>

({

  userForm: {
    // marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    paddingTop: '1rem',

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(1),

  },

}));

export default function Registration() {
  const classes = useStyles();

  return (
    <>
    <div  className="fotofundo" >
      <Container  className='backgroundcadastro' component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.userForm}>
          <Avatar className={classes.avatar} >
            <AccountBoxIcon />
          </Avatar>
          
          <CadastroUsuario />

          <Grid container justifyContent="center">
            <Grid item  className="margemup">
              <Link  className='text1' href="/login" variant="body2">
                Já tem uma conta? Clique aqui
              </Link>
            </Grid>
          </Grid>
        </div>

        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>

      <FooterCadastro />

      </div>
    </>
  );
}