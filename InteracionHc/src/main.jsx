import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Componentes/NavBar.jsx";
import Empresa from "./Componentes/Paginas/Empresa.jsx";
import Sitios from "./Componentes/Paginas/Sitios.jsx";
import Mision from "./Componentes/Paginas/Mision.jsx";
import InicarSession from "./AccionesUsuairo/InicarSession.jsx";
import Registrar from "./AccionesUsuairo/Registrar.jsx";
import ContextoGlobal from "./ContextoGlobal/ContextoGlobal.jsx";
import RegistrarPlanes from "./Componentes/Paginas/RegistrarPlanes.jsx";
import RegistrarFechas from "./Componentes/Paginas/RegistrarFechas.jsx";
import DescripcionRegistro from "./Componentes/Paginas/DescripcionRegistro.jsx";
import Comentario from "./Componentes/Paginas/Comentario.jsx";
import SessiionArt from "../SessiionArt.jsx";
import Carrito from "./Componentes/Paginas/Carrito.jsx";
import Card from "./Componentes/Card.jsx";
import Principal from "./Componentes/PruebaTecnica/Principal.jsx";
import { store } from "./Componentes/PruebaTecnica/ContextoGlobalRedux/Store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <Provider store={store}>
    <BrowserRouter>
      {/* <NavBar> </NavBar> */}
      <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route path="/Empresa" element={<Empresa></Empresa>}></Route>
        <Route path="/Sitios" element={<Sitios></Sitios>}></Route>
        <Route path="/Mision" element={<Mision></Mision>}></Route>
        <Route path="/Registrar" element={<Registrar />}></Route>
        <Route path="/InicarSession" element={<InicarSession />}></Route>
        <Route path="/RegistrarPlanes" element={<RegistrarPlanes />}></Route>
        <Route path="/RegistrarFechas" element={<RegistrarFechas />}></Route>
        <Route path="/carrito" element={<Carrito />}></Route>
        <Route path="/Card" element={<Card />}></Route>
        <Route
          path="/DescripcionRegistro"
          element={<DescripcionRegistro />}
        ></Route>
        <Route path="/comentario" element={<Comentario />}></Route>
        <Route
          path="/Libresentraada"
          element={<SessiionArt></SessiionArt>}
        ></Route>
        <Route path="principal" element={<Principal></Principal>}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  // <ContextoGlobal>
  // </ContextoGlobal>
);
