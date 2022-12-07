import React from "react";
import "./Home.css";
import { Grid } from "@material-ui/core";
import { PrimarySearchAppBar } from "../../components/static/NavBar/NavBar";
import { CreatePublication } from "../../components/publication/createPublication/createPublication";


function Home() {
  return (
    <Grid container spacing={0}>
      {/* Menu - Nav Bar */}
      <Grid item xs={12}>
        <PrimarySearchAppBar />
      </Grid>

      {/**
       * @descricao Grid-Container que armazena todos os conteúdos da home
       */}
      <Grid container item className="grid-content">
        {/**
         * @descricao  Coluna da Esquerda
         */}
        <Grid container item xs={3} direction-column>
          <Grid item>
            
          </Grid>
        </Grid>

        {/**
         * @descricao Coluna principal - meio / Feed
         */}
        <Grid container item xs={6} direction-column>
          <Grid item>
              <CreatePublication/>
          </Grid>
        </Grid>

        {/**
         * @descricao Coluna da Direita
         */}
        <Grid container item xs={3} direction-column>
         
        </Grid>
      </Grid>
    </Grid>
  );
}

export { Home };
