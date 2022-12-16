import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Typography } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import "./CadastroTema.css";
import Tema from "../../../models/Tema";
import { buscaId, post, put } from "../../../services/Service";
import { toast } from "react-toastify";
import useLocalStorage from "react-use-localstorage";

function CadastroTema() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [token, setToken] = useLocalStorage("token");
//   const [userId, setuserId] = useLocalStorage("id");
  const [tema, setTema] = useState<Tema>({
    id: 0,
    lista_assunto: "",
    descricao: "",
  });

  // useEffect(() => {
  //     if (token == "") {
  //         toast.error('Você precisa estar logado', {
  //             position: "top-right",
  //             autoClose: 2000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: false,
  //             draggable: false,
  //             theme: "colored",
  //             progress: undefined,
  //             });
  //         navigate("/login")

  //     }
  // }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/tema/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedTema(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    // console.log("tema " + JSON.stringify(tema));

    if (id !== undefined) {
      put(`/tema`, tema, setTema, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Tema atualizado com sucesso", {
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
      post(`/tema`, tema, setTema, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Tema cadastrado com sucesso", {
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
    navigate("/inicio");
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          className="form__field"
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Criar tema
        </Typography>

        <div className="form__group field">
          <input
            placeholder="Lista Asuntto"
            className="form__field"
            type="input"
            value={tema.lista_assunto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
            id="lista_assunto"
            name="lista_assunto"
          />
          <label className="form__label">Lista Assunto</label>
        </div>

        <div className="form__group field">
          <input
            placeholder="Descrição"
            className="form__field"
            type="input"
            value={tema.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
            id="descricao"
            name="descricao"
          />
          <label className="form__label">Descrição</label>
        </div>

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

export default CadastroTema;
