import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Profile } from "./pages/perfil/Profile";

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' /*element={<Home />}*/ />
        <Route path='/inicio' /*element={<Home />}*/ />
        <Route path='/perfil' element={<Profile />} />
        <Route path='/cadastro' /*element={<Cadastro />}*/ />
        <Route path='/login' /*element={<Login />}*/ />
        <Route path='/sobre' /*element={<Sobre />}*/ />
      </Routes>
    </Router>
  );
}

export default App;