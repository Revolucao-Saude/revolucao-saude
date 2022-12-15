import React, { useEffect, useState } from "react";
import "./PageFriends.css";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import useLocalStorage from "react-use-localstorage";
import User from "../../models/User";
import { buscaId } from "../../services/Service";

export default function PageFriends() {
  const [token, setToken] = useLocalStorage("token");
  const [users, setUsers] = useState<User[]>([]);

  async function getUser() {
    await buscaId(`/usuarios/todos`, setUsers, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getUser();
  }, [users.length]);

  return (
    <>
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid key={user.id} item xs={6}>
            <Card className="margin cardSize">
              <Avatar src={user.foto} alt="Foto de Perfil" />

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
    </>
  );
}
