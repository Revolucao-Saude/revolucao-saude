import React from "react";
import "./Home.css";
import { Grid } from "@material-ui/core";
import { CreatePublication } from "../../components/publication/createPublication/createPublication";
import ButtonExplorer from "../../components/sidebar/buttonExplorer/ButtonExplorar";
import { ImageProfile } from "../../components/imageProfile/ImageProfile";
import CardPublication from "../../components/publication/cardPublication/cardPublication";
import { Stories } from "../../components/stories/Stories";
import CadastroPost from "../../components/publication/postagens/cadastroPost/CadastroPost";
import { Link } from "react-router-dom";
import ListaPostagem from "../../components/publication/postagens/listaPostagem/ListaPostagem";
import ModalPostagem from "../../components/publication/postagens/modalPostagem/ModalPostagem";

function Home() {
  return (
    <Grid container spacing={0} className="grid-content">
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
      <Grid container item xs={6}>
        <Grid container item>
          <Stories />
        </Grid>
        <Grid container item>
          <Grid item>
            <CreatePublication />
          </Grid>
        </Grid>
        <Grid container item xs={12} direction-column>
          <Grid item>
            {/* <ListaTema> */}
            <ListaPostagem />
            {/* <CardPublication /> */}
          </Grid>
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
  );
}

export { Home };
