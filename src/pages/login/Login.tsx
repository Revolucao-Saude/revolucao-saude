import React, { ChangeEvent, useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import UserLogin from "../../models/UserLogin";
import { login } from "../../services/Service";
import { styles } from "./styles";
import FooterCadastro from '../../components/footer/footerCadastro/Footer'
import "./Login.css";
import { PrimarySearchAppBar } from "../../components/static/NavBar/NavBar";


function Copyright() {
  return ( 
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Login() {
  const classes = styles();
  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage("token");
  const [id, setId] = useLocalStorage("id");
  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    usuario: "",
    senha: "",
    token: "",
  });

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (token !== "") {
      navigate("/inicio");
    }
  }, [token]);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/auth/logar`, userLogin, setToken);
      setId(userLogin.id + "");

      alert("Usuario logado com sucesso!");
    } catch (error) {
      alert("Dados do usuário inconsistentes. Erro ao logar!");
    }
  }
  return (
    <div className="fotofundo">
       
      <Grid
        className='grid'
        container
        alignItems="center"
        justifyContent="space-evenly"
        spacing={10}
      >
        <Grid item xs={10} sm={7} md={6} lg={5} xl={4}>
          <h1 className="titulo">Revolução Saúde</h1>
          <p className="descricao">
            A Revolução Saúde é uma rede social com a finalidade de possibilitar
            que as pessoas troquem experiências/informações entre si.
          </p>
        </Grid>
        <Grid
          item
          className={classes.paper}
          xs={9}
          sm={7}
          md={4}
          lg={3}
          xl={2}
        >
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className="titulo2">
            Login
          </Typography>
          <form className={classes.form} onSubmit={onSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="usuario"
              label="Usuario"
              name="usuario"
              autoComplete="usuario"
              autoFocus
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
            />
            <TextField className="p-05"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="senha"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
            />
            {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
            <button className="bot">
              <span className="label">Entrar</span>
            </button>
            <Grid container >
              <Grid item xs>
                {/* <Link  className='text1' href="#" variant="body2">
                  Esqueceu sua senha?
                </Link> */}
              </Grid>
              <Grid container className="margemup" justifyContent="center">
              <Grid item justifyContent="center" >
                <Link  className='text1' href="./cadastro" variant="body2">
                  {"Não tem uma conta? Cadastre-se"}
                </Link>
              </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
        {/* <Box mt={8}>
        <Copyright />
      </Box>  */}
      </Grid>

      <FooterCadastro />

    </div>
  );
}

export { Login };
