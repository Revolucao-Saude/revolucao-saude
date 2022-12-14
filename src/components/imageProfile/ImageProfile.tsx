import { Divider, Grid, Link } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./ImageProfile.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import User from "../../models/User";
import useLocalStorage from "react-use-localstorage";
import { buscaId } from "../../services/Service";

function ImageProfile() {
  const [users, setUsers] = useState<User[]>([]);
  const [token, setToken] = useLocalStorage("token");

  async function getUser() {
    await buscaId(`/usuarios/:id`, setUsers, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getUser();
  }, [users.length]);

  return (
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid key={user.id} item xs={6}>
            <Card className="margin">
              <Avatar
                src={user?.foto}
                sx={{ width: 70, height: 70 }}
                alt="Foto de Perfil"
              />

              <Link href="/perfil/:id">
                <CardActionArea>
                  <CardMedia />

                  <CardContent>
                    <Grid item>
                      <Typography gutterBottom variant="h5" component="div">
                        {user.nome}
                      </Typography>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
  );
}

export { ImageProfile };
