import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Postagem from "../../../../models/Postagem";
import { busca, post } from "../../../../services/Service";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Avatar,
  Divider,
  Grid,
} from "@material-ui/core";
import { Box } from "@mui/material";
import "./ListaPostagem.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import useLocalStorage from "react-use-localstorage";
import RefreshIcon from "@mui/icons-material/Refresh";
import DeleteIcon from "@mui/icons-material/Delete";
import User from "../../../../models/User";

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([]);
  let navigate = useNavigate();
  // const token = useSelector<TokenState, TokenState["tokens"]>(
  //   (state) => state.tokens
  // );
  const [token, setToken] = useLocalStorage("token");
  const [users, setUsers] = useState<User[]>([]);

  //   useEffect(() => {
  //     if (token == "") {
  //       toast.error('Você precisa estar logado', {
  //         position: "top-right",
  //         autoClose: 2000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: false,
  //         draggable: false,
  //         theme: "colored",
  //         progress: undefined,
  //     });
  //       navigate("/login")
  //     }
  //   }, [token])

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        Authorization: token,
      },
    });
    // console.log(posts);
  }

  useEffect(() => {
    getPost();
  }, [posts.length]);
  return (
    <>
      {posts.map((post) => (
        <Box key={post.id} m={2}>
          <Card variant="outlined">
            <CardContent>
              <Grid container spacing={1}>
                <Grid item>
                  <Avatar src={post.usuario?.foto}/>
                </Grid>
                <Grid item>
                  {/* <Box className='nomeUsuario'>
                        <Typography gutterBottom variant="h6" component="div">
                        {post.usuario?.nome} 
                        </Typography>
                      </Box> */}
                </Grid>
                <Grid item>
                  {/* <Typography variant='body1' component="p">
                        {post.data_horario?.getDate()}
                      </Typography> */}
                </Grid>
                <Grid item>
                  <Typography variant="body2" className="style-tema">{post.local}</Typography>
                </Grid>
                <Grid item></Grid>
              </Grid>
              <Box sx={{ fontWeight: "bold", m: 1, fontSize: "h6.fontSize" }}>
                <Typography variant="body1" component="p" className="style-texto">
                  {post.texto}
                </Typography>
              </Box>
              <Typography variant="body2" className="style-tema" component="p">
                #{post.tema?.lista_assunto}
              </Typography>
              <Box mt={3} className="width" >
                <img className="width" src={post.arquivos_midia} />
              </Box>
            </CardContent>
            <Divider orientation="horizontal" />
            <CardActions className="flex">
              <Link
                to={`/criar-postagem/${post.id}`}
                className="text-decorator-none"
              >
                <Box mx={1}>
                  <Button
                    startIcon={<RefreshIcon />}
                    variant="contained"
                    className="marginLeft"
                    size="small"
                    color="primary"
                  >
                    editar
                  </Button>
                </Box>
              </Link>
              <Link
                to={`/deletar-postagem/${post.id}`}
                className="text-decorator-none"
              >
                <Box mx={1}>
                  <Button
                    startIcon={<DeleteIcon />}
                    variant="contained"
                    size="small"
                    color="secondary"
                  >
                    deletar
                  </Button>
                </Box>
              </Link>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaPostagem;
