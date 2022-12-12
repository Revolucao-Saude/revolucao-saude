 import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Postagem from '../../../../models/Postagem';
import { busca } from '../../../../services/Service'
import {  Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import './ListaPostagem.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

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
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])

  return (
    <>
      {
        posts.map(post => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Postagens
                </Typography>
                <Typography variant="body2" component="p">
                  {post.texto}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.tema?.lista_assunto}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/criar-postagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletar-postagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  )
}

export default ListaPostagem;