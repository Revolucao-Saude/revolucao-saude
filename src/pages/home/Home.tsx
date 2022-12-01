import React from "react";
import "./Home.css";
import { Grid } from "@material-ui/core";
import { PrimarySearchAppBar } from "../../components/static/NavBar/NavBar";

function Home() {
  return (
    <Grid container spacing={0}>
        <Grid item xs={12}>
          <PrimarySearchAppBar />
        </Grid>

      <Grid item xs={4}></Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={8}></Grid>
    </Grid>
  );
}

export { Home };
