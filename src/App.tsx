import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import Registration from "./pages/registration/Registration";
import { Login } from "./pages/login/Login";
import { Profile } from "./pages/profile/Profile";
import Config from "./pages/config/config";
import { PrimarySearchAppBar } from "./components/static/NavBar/NavBar";
import Explore from "./pages/explore/Explore";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <PrimarySearchAppBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route path="/config" element={<Config />} />
          {/* <Route path='/sobre' element={<Sobre />} /> */}
          <Route path="/explorar" element={<Explore />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
