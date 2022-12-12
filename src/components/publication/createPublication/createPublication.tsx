import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { Button, Divider, Grid } from "@material-ui/core";
import PhotoIcon from "@mui/icons-material/Photo";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventIcon from "@mui/icons-material/Event";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PublicIcon from "@mui/icons-material/Public";
import MenuTheme from "../menuTheme/MenuTheme";
import Tema from "../../../models/Tema";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import { ChangeEvent, useEffect, useState } from "react";
import Postagem from "../../../models/Postagem";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { busca, buscaId, post, put } from "../../../services/Service";

function CreatePublication() {
  const navigate = useNavigate();
  function callCreatePublication() {
    window.location.href = "/criar-postagem";
  }

  return (
    <Card className="cardCreatePublication">
      <Grid container xs={12} spacing={1}>
        <Grid container item alignItems="center" justifyContent="center">
          <Grid item xs={5} sm={2}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            {/* <form>
              <TextField
                // value={postagem.texto}
                // onChange={(e: ChangeEvent<HTMLInputElement>) =>
                //   updatedPostagem(e)
                // }
                id="texto"
                label="Escreva aqui..."
                variant="outlined"
                name="texto"
                margin="normal"
                fullWidth
              />

              <FormControl></FormControl>
            </form> */}
            <Button
              className="btnCreatePost"
              variant="outlined"
              href="#"
              size="large"
              fullWidth
              onClick={() => {
                callCreatePublication();
              }}
            >
              Criar nova publicação...
            </Button>
          </Grid>
        </Grid>

        <Divider variant="middle" />

        <Grid container item justifyContent="center" alignContent="center">
          <Grid item>
            <CardActions disableSpacing>
              <Button
                type="submit"
                variant="text"
                startIcon={<PhotoIcon />}
                onClick={() => {
                  callCreatePublication();
                }}
              >
                Fotos
              </Button>
              <Button
                type="submit"
                variant="text"
                startIcon={<SmartDisplayIcon />}
                onClick={() => {
                  callCreatePublication();
                }}
              >
                Vídeos
              </Button>
              <Button
                type="submit"
                variant="text"
                startIcon={<EventIcon />}
                onClick={() => {
                  callCreatePublication();
                }}
              >
                Eventos
              </Button>

              <Button
                type="submit"
                variant="text"
                startIcon={<AddLocationAltIcon />}
                onClick={() => {
                  callCreatePublication();
                }}
              >
                Localização
              </Button>

              {/* <MenuTheme /> */}
              {/* <Button type="submit" variant="text" startIcon={<PublicIcon />}>
                  Publicar
                </Button> */}
            </CardActions>
            {/* <CardActions>
              <MenuTheme />

              
            </CardActions> */}
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

export { CreatePublication };

// function useNavigate() {
//   throw new Error("Function not implemented.");
// }

// function useParams<T>(): { id: any } {
//   throw new Error("Function not implemented.");
// }

// function useState<T>(arg0: never[]): [any, any] {
//   throw new Error("Function not implemented.");
// }

// function useSelector<T, U>(arg0: (state: any) => any) {
//   throw new Error("Function not implemented.");
// }

// function useEffect(arg0: () => void, arg1: any[]) {
//   throw new Error("Function not implemented.");
// }

// function busca(
//   arg0: string,
//   setTemas: any,
//   arg2: { headers: { Authorization: any } }
// ) {
//   throw new Error("Function not implemented.");
// }

// function buscaId(
//   arg0: string,
//   setPostagem: any,
//   arg2: { headers: { Authorization: any } }
// ) {
//   throw new Error("Function not implemented.");
// }

// function put(
//   arg0: string,
//   postagem: any,
//   setPostagem: any,
//   arg3: { headers: { Authorization: any } }
// ) {
//   throw new Error("Function not implemented.");
// }

// function post(
//   arg0: string,
//   postagem: any,
//   setPostagem: any,
//   arg3: { headers: { Authorization: any } }
// ) {
//   throw new Error("Function not implemented.");
// }
