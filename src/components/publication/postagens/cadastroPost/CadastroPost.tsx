import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import "./CadastroPost.css";
import { useNavigate, useParams } from "react-router-dom";
import Tema from "../../../../models/Tema";
import Postagem from "../../../../models/Postagem";
import { busca, buscaId, post, put } from "../../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import useLocalStorage from "react-use-localstorage";
import User from "../../../../models/User";

function CadastroPost() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [temas, setTemas] = useState<Tema[]>([]);
  {
    /*
     *TODO: Trocar o useSelector para o useLocalStorage (Pois um ta usando o Redux e o outro o useLocalStoraged)
     */
  }
  /*  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  ); */
  const [token, setToken] = useLocalStorage("token");
  const [userid, setId] = useLocalStorage("id");

  //   useEffect(() => {
  //     if (token == "") {
  //       toast.error("Você precisa estar logado", {
  //         position: "top-right",
  //         autoClose: 2000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: false,
  //         draggable: false,
  //         theme: "colored",
  //         progress: undefined,
  //       });
  //       navigate("/login");
  //     }
  //   }, [token]);
  const [user, setUser] = useState<User>(
    {
      id:0,
      nome: "",
      email: "",
      senha: "",
      foto: "",
    }
  )
  const [tema, setTema] = useState<Tema>({
    id: 0,
    lista_assunto: "",
    descricao: "",
  });
  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    texto: "",
    arquivos_midia: "",
    data_horario: null,
    local: "",
    tema: null,
    usuario: null
  });

  useEffect(()=>{
    buscaId(`/usuarios/${userid}`, setUser, {
      headers: {
        Authorization: token,
      }})
      setPostagem({
        ...postagem,
        usuario: user,
      })
  }, [user])
  

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema,
    });
  }, [tema]);

  useEffect(() => {
    getTemas();
    if (id !== undefined) {
      findByIdPostagem(id);
    }
  }, [id]);

  async function getTemas() {
    await busca("/tema", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findByIdPostagem(id: string) {
    await buscaId(`postagens/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      tema: tema,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      put(`/postagens`, postagem, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Postagem atualizada com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } else {
      post(`/postagens`, postagem, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Postagem cadastrada com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }
    back();
  }

  function back() {
    navigate("/postagens");
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Formulário de cadastro postagem
        </Typography>
        <TextField
          value={postagem.texto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="texto"
          label="texto"
          name="texto"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          value={postagem.arquivos_midia}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="arquivos_midia"
          label="arquivos_midia"
          name="arquivos_midia"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        {/* <TextField
          value={postagem.data_horario}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="data_horario"
          label="data horário"
          variant="outlined"
          name="data_horario"
          margin="normal"
          fullWidth
        /> */}
        <TextField
          value={postagem.local}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="local"
          label="local"
          variant="outlined"
          name="local"
          margin="normal"
          fullWidth
        />
        <FormControl>
          <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={(e) =>
              buscaId(`/tema/${e.target.value}`, setTema, {
                headers: {
                  Authorization: token,
                },
              })
            }
          >
            {temas.map((tema) => (
              <MenuItem value={tema.id}>{tema.lista_assunto}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Escolha um tema para a postagem</FormHelperText>
          <Button type="submit" variant="contained" color="primary">
            Finalizar
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}
export default CadastroPost;
