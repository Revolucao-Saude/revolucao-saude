import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import Registration from "./pages/registration/Registration";
import { Login } from "./pages/login/Login";
import Config from "./pages/config/config";
import { PrimarySearchAppBar } from "./components/static/NavBar/NavBar";
import Explore from "./pages/explore/Explore";
import { Provider } from "react-redux";
import store from "./store/store";
import CadastroPost from "./components/publication/postagens/cadastroPost/CadastroPost";
import DeletarPostagem from "./components/publication/postagens/deletarPostagem/deletarPostagem";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import DeletarTema from "./components/temas/deletarTema/DeletarTema";
import ListaPostagem from "./components/publication/postagens/listaPostagem/ListaPostagem";
import ListaTema from "./components/temas/listatema/ListarTema";
import PageSobre from "./pages/sobre/Sobre";
import Profile from "./pages/profile/Profile";
import PaginaContrucao from "./pages/paginaconstrucao/PaginaConstrucao";
import PageFriends from "./pages/friends/PageFriends";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <PrimarySearchAppBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/perfil/:id" element={<Profile />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route path="/config" element={<Config />} />
          <Route path='/sobre' element={<PageSobre />} />
          <Route path="/explorar" element={<Explore />} />
          <Route path="/tema" element={<ListaTema />} />
          <Route path="/tema/:id" element={<ListaTema />} />
          <Route path="/criar-tema" element={<CadastroTema />} />
          <Route path="/criar-tema/:id" element={<CadastroTema />} />
          <Route path="/deletar-tema/:id" element={<DeletarTema />} />
          <Route path="/postagens" element={<ListaPostagem />} />
          <Route path="/postagens/:id" element={<ListaPostagem />} />
          <Route path="/criar-postagem" element={<CadastroPost />} />
          <Route path="/criar-postagem/:id" element={<CadastroPost />} />
          <Route path="/deletar-postagem/:id" element={<DeletarPostagem />} />
          <Route path="/pagina-construcao" element={<PaginaContrucao/>}/>
          <Route path="/amigos" element={<PageFriends/>}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
