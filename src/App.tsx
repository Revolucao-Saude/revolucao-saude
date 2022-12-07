import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import Registration from './pages/registration/Registration';
import { Login } from "./pages/login/Login";
import { Profile } from "./pages/profile/Profile";
import Config from "./pages/config/config";
import PaginaContrucao from "./pages/paginaconstrucao/PaginaConstrucao";


function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/inicio' element={<Home />} />
        <Route path='/perfil' element={<Profile />} />
        <Route path='/cadastro' element={<Registration />} />
        {/* <Route path='/sobre' element={<Sobre />} /> */}
        <Route path='/config' element={<Config />} />
      </Routes>
    </Router>
  );
}

export default App;