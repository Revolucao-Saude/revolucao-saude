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

function CreatePublication() {
  return (
    <Card>
      <Grid container xs={12} spacing={1}>
        <Grid container item alignItems="center" justifyContent="center">
          <Grid item>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
            />
          </Grid>
          <Grid item>
            <Button variant="outlined" href="#" size="large" fullWidth={true}>
              Criar nova publicação...
            </Button>
          </Grid>
        </Grid>

        <Grid item>
          <Divider variant="middle" />
        </Grid>

        <Grid container item justifyContent="center" alignContent="center">
          <Grid item>
            <CardActions disableSpacing>
              <Button variant="text" startIcon={<PhotoIcon />}>
                Fotos
              </Button>
              <Button variant="text" startIcon={<SmartDisplayIcon />}>
                Vídeo
              </Button>
              <Button variant="text" startIcon={<EventIcon />}>
                Eventos
              </Button>
              <Button variant="text" startIcon={<AddLocationAltIcon />}>
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
