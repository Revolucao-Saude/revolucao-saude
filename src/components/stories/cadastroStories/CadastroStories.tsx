import { Grid, Typography } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import "./CadastroStories.css";

function CadastroStories() {
  return (
    <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography variant="h4">Seja bem Vindo</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography className="mt-5 ">
          Obrigado por se juntar à Revolução Saúde.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography className="mt-5 ">
          Nós construímos esta rede social para lutar contra a desigualdade
          social que existe em nosso país poís acreditamos que a troca de
          informação é uma das armas mais poderosas para combater esse problema.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography className=" mt-5">
          O seu feedback é valiosíssimo para que possamos seguir entregando
          exatamente o que os usuários desejam.
        </Typography>
      </Grid>
    </Grid>
  );
}
export default CadastroStories;
