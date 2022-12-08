import { Grid, styled } from "@material-ui/core";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import createTheme from "@mui/material/styles/createTheme";
import React from "react";
import image from "../../assets/images/construcao.png";
import { styles } from "./styles";

function PaginaContrucao() {
  const classes = styles();

  return (
    <>
      <Grid className={classes.w100} container spacing={1} alignItems="center" justifyContent="center">
        <Grid className={classes.imagem} item xs={12} sm={11} md={9} lg={7} xl={5}>
          <img width="50%" src={image} alt="" />
        </Grid>
      </Grid>
      <Grid className={classes.w100} container spacing={1} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={9} md={7} lg={5} xl={3}>
          <p className={classes.textCenter}>Essa página está em contrução, mas estamos prontos para começar!</p>
          {/* <p className={classes.textCenter}>mas estamos prontos para começar!</p> */}

          <Stack justifyContent="center" spacing={0} direction="row">
        
            <Button href="./inicio"  variant="outlined">Voltar para home
            </Button>
            
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default PaginaContrucao;
