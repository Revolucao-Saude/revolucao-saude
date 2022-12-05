import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, Divider, Grid } from "@material-ui/core";
import PhotoIcon from "@mui/icons-material/Photo";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventIcon from "@mui/icons-material/Event";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

function CreatePublication() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Grid container spacing={1}>
        <Grid container item>
          <Grid item>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
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
