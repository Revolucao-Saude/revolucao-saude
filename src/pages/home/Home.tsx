import React from "react";
import "./Home.css";
import { Grid } from "@material-ui/core";
import { CreatePublication } from "../../components/publication/createPublication/createPublication";
import ButtonExplorer from "../../components/sidebar/buttonExplorer/ButtonExplorar";
import { ImageProfile } from "../../components/imageProfile/ImageProfile";
import CardPublication from "../../components/publication/cardPublication/cardPublication";
import { Stories } from "../../components/stories/Stories";



function Home() {
  return (
    <Grid container spacing={0}>
      {/**
       * @descricao Grid-Container-item que armazena todos os conteúdos da home
       */}
      <Grid container item className="grid-content">
        {/**
         * @descricao  Coluna da Esquerda
         */}
        <Grid container item xs={3} direction-column>
          <Grid item>
            <ImageProfile />
          </Grid>
        </Grid>
        {/**
         * @descricao Coluna principal - meio / Feed
         */}
        <Grid container item xs={6} direction-column>
        <Grid container item>
            <Stories />
        </Grid>
          <Grid container item>
            <CreatePublication />
            
          </Grid>
          <Grid container item xs = {12} direction-column>
            <CardPublication />
          </Grid>
        </Grid>
        {/**
         * @descricao Coluna da Direita
         */}
        <Grid container item xs={3} direction-column>
          <Grid item>
            <ButtonExplorer />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export { Home };
