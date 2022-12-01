import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import Registration from './pages/registration/Registration';

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inicio' element={<Home />} />
        <Route path='/perfil' /*element={<Perfil />}*/ />
        <Route path='/cadastro' element={<Registration />} />
        <Route path='/login' /*element={<Login />}*/ />
        <Route path='/sobre' /*element={<Sobre />}*/ />
      </Routes>
    </Router>
  );
}

export default App;