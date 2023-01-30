import React from "react";
import "./Home.css";
import { Divider, Grid } from "@material-ui/core";
import { CreatePublication } from "../../components/publication/createPublication/createPublication";
import ButtonExplorer from "../../components/sidebar/buttonExplorer/ButtonExplorar";
import { ImageProfile } from "../../components/imageProfile/ImageProfile";
import CardPublication from "../../components/publication/cardPublication/cardPublication";
// import { Stories } from "../../components/stories/Stories";
import CadastroPost from "../../components/publication/postagens/cadastroPost/CadastroPost";
import { Link } from "react-router-dom";
import ListaPostagem from "../../components/publication/postagens/listaPostagem/ListaPostagem";
import ModalPostagem from "../../components/publication/postagens/modalPostagem/ModalPostagem";
import { Stories } from "../../components/stories/Stories";
import { PrimarySearchAppBar } from "../../components/static/NavBar/NavBar";
import { StoriesTeste } from "../../components/storiesTeste/StoriesTeste";

function Home() {
  return (
    <><PrimarySearchAppBar />
    <Grid container spacing={2} className="grid-content" >
      
      {/**
       * @descricao  Coluna da Esquerda
       */}
      {/* <Grid container item xs={3}>
        <Grid item>
          <ImageProfile />
        </Grid>
      </Grid> */}
      {/**
       * @descricao Coluna principal - meio / Feed
       */}
      <Grid container item xs={10} xl={10}>
        <Grid container item xs={9} sm={10} md={10} lg={12} xl={10}>
          <Stories />
        </Grid>
        <Grid container item className="w-100" justifyContent="center">
          <Grid item xs={9} sm={9} md={8} lg={9} xl={10}> 
            <CreatePublication />
          </Grid>
        </Grid>
        <Grid container item xs={10} direction-column justifyContent="center">
          <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
            {/* <ListaTema> */}
            <ListaPostagem />
            {/* <CardPublication /> */}
          </Grid>
        </Grid>
      </Grid>
      
      {/**
       * @descricao Coluna da Direita
       */}
      <Grid container item xs={1} sm={1} md={1} lg={1} xl={1}>
        <Grid item >
          <ButtonExplorer />
        </Grid>
      </Grid>
    </Grid>
    </>
  );
}

export { Home };
