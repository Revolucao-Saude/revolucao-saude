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
  IconButton,
  Grid,
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
import { PhotoCamera } from "@material-ui/icons";

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
  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    email: "",
    senha: "",
    foto: "",
  });
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
    usuario: null,
  });

  useEffect(() => {
    buscaId(`/usuarios/${userid}`, setUser, {
      headers: {
        Authorization: token,
      },
    });
    setPostagem({
      ...postagem,
      usuario: user,
    });
  }, [user]);

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
        <div className="form__group field">
          <input
            placeholder="Texto"
            className="form__field"
            type="input"
            value={postagem.texto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
            id="texto"
            name="texto"
          />
          <label className="form__label">Texto</label>
        </div>

        <div className="form__group field">
          <input
            placeholder="Local"
            className="form__field"
            type="input"
            value={postagem.local}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
            id="local"
            name="local"
          />
          <label className="form__label">Local</label>
        </div>

        {/* 
        <div className="form__group field">
            <input
              placeholder="arquivos_midia"
              className="form__field"
              type="input"
              

              id="arquivos_midia"
              
            />
            <label className="form__label">Arquivos de Mídias</label>
        </div> */}

        <Grid container>
        
          <Grid item xs={5}>
            <div className="form__group field">
              <input
                placeholder="Arquivo Mídia"
                className="form__field"
                type="input"
                value={postagem.arquivos_midia}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  updatedPostagem(e)
                }
                id="arquivos"
                name="arquivos_midia"
              />
              <label className="form__label">URL da mídia</label>
            </div>
          </Grid>

                
          <Grid item className="d-flex" alignItems="flex-end" xs={1}>
            <input
              accept="image/*"
              className="botao"
              id="arquivos_midia"
              type="file"
              name="arquivos_midia"
            />
            <label htmlFor="arquivos_midia">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </Grid>


        </Grid>

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

        <InputLabel
          className="tema" id="demo-simple-select-helper-label">Tema </InputLabel>
        <Select
        className="w-50"
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

        <button type="submit" className="enviar">
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Enviar</span>
        </button>
      </form>
    </Container>
  );
}
export default CadastroPost;
