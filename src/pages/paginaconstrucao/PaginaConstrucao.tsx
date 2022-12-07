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
      <Grid container spacing={1} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={11} md={9} lg={7} xl={5}>
          <img width="50%" src={image} alt="" />
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={9} md={7} lg={5} xl={3}>
          <h2 className={classes.textCenter}>Essa página está em contrução.</h2>
          <h2 className={classes.textCenter}>Mas estamos prontos para começar!</h2>

          <Stack justifyContent="center" spacing={0} direction="row">
            <Button variant="outlined">Voltar para home</Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default PaginaContrucao;
