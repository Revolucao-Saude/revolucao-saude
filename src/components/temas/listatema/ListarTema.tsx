import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/material";
import Tema from "../../../models/Tema";
import "./ListarTema.css";
import { useNavigate } from "react-router-dom";
import { busca, buscaId } from "../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import useLocalStorage from "react-use-localstorage";

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([]);
  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage("token");
  //   const token = useSelector<TokenState, TokenState["tokens"]>(
  //     (state) => state.tokens
  //   );

  //   useEffect(()=>{
  //     if(token == ''){
  //       toast.error('Você precisa estar logado', {
  //         position: "top-right",
  //         autoClose: 2000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: false,
  //         draggable: false,
  //         theme: "colored",
  //         progress: undefined,
  //         });
  //         navigate("/login")
  //     }
  //   }, [token])

  async function getTema() {
    await busca("/tema", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getTema();
  }, [temas.length]);

  return (
    <>
      {temas.map((tema) => (
        <Box key={tema.id} m={2}>
          <Card variant="outlined">
            <CardContent>
              <Typography gutterBottom component="h2" variant="h5">
                {tema.lista_assunto}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                {tema.descricao}
              </Typography>
            </CardContent>
            <CardActions className="flex">
              <Box
                display="flex"
                alignContent="space-between"
                mb={1.5}
              >
                <Link
                  to={`/criar-tema/${tema.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
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
                  to={`/deletar-tema/${tema.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button variant="contained" size="small" color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaTema;
