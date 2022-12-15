 import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Postagem from '../../../../models/Postagem';
import { busca, post } from '../../../../services/Service'
import {  Card, CardActions, CardContent, Button, Typography, Avatar } from '@material-ui/core';
import {Box} from '@mui/material';
import './ListaPostagem.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import useLocalStorage from 'react-use-localstorage';
import RefreshIcon from '@mui/icons-material/Refresh';
import DeleteIcon from '@mui/icons-material/Delete';
import User from '../../../../models/User';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  let navigate = useNavigate();
  // const token = useSelector<TokenState, TokenState["tokens"]>(
  //   (state) => state.tokens
  // );
  const [token, setToken] = useLocalStorage('token');
  // const [user, setUsers] = useState<User>

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
          <Box key={post.id} m={2}  >
            
            <Card variant="outlined" >
              
              <CardContent>
                <div className='avatar'>
                    <Avatar>
                    </Avatar>
                    <div className='column'>
                      {/* <Typography gutterBottom variant="h5" component="div">
                        {user.nome}
                      </Typography> */}
                      <Box flexDirection="row" sx={{ fontWeight: 'bold', m: 1, fontSize: 'h6.fontSize'  }}>
                        <Typography variant='body1' component="p">
                          {/* {post.data_horario} */}
                        </Typography>
                        <Typography variant='body1' component="p">
                        •{post.local}
                        </Typography>
                      </Box>
                    </div>
                </div>
                <Box sx={{ fontWeight: 'bold', m: 1, fontSize: 'h6.fontSize'  }}>
                <Typography variant="body1" component="p">
                  {post.texto}
                </Typography>
                </Box>
                <Typography variant="body1" component="p">
                  {post.tema?.lista_assunto}
                </Typography>
                <Box mt={3}>
                  <img width="100%"  src={post.arquivos_midia}></img>
                </Box>
              </CardContent>
              <CardActions className='flex'>
                  <Link to={`/criar-postagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button startIcon={<RefreshIcon />} variant="contained" className="marginLeft" size='small' color="primary" >
                        editar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletar-postagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button startIcon={<DeleteIcon />} variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  )
}

export default ListaPostagem;