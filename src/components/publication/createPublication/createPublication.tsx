import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { Button, Divider, Grid, TextField } from "@material-ui/core";
import PhotoIcon from "@mui/icons-material/Photo";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventIcon from "@mui/icons-material/Event";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

function CreatePublication() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Grid container spacing={1}>
        <Grid container item>
          <Grid item direction-row>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
            />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              className="textField-publication"
            />
          </Grid>
        </Grid>

        <Grid item>
          <Divider variant="middle" />
        </Grid>

        <Grid container item>
          <Grid item>
            <CardActions disableSpacing>
              <Button variant="text">
                <PhotoIcon />
                Fotos
              </Button>
              <Button variant="text">
                <SmartDisplayIcon />
                Vídeo
              </Button>
              <Button variant="text">
                <EventIcon />
                Eventos
              </Button>
              <Button variant="text">
                <AddLocationAltIcon />
                Localização
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

export { CreatePublication };
