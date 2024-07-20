import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../folter/estilosform.css";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import { SlLogout } from "react-icons/sl";
import logo from "../Img/logo.png";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const ReferenciaDiv = useRef();
  const NabarTolls = () => {
    // if (!ReferenciaDiv.current.classList.contains("AgregarClse")) {
    ReferenciaDiv.current.classList.add("AgregarClse");
    // }
    // ReferenciaDiv.current.classList.remove("coultarmenu");
  };

  const CerrarButon = () => {
    ReferenciaDiv.current.classList.add("coultarmenu");

    setTimeout(() => {
      ReferenciaDiv.current.classList.remove("coultarmenu", "AgregarClse");
    }, 1000);
    // ReferenciaDiv.current.classList.remove("AgregarClse");
  };
  const navigate = useNavigate();

  return (
    <div className="Navbar">
      <div className="borderClass">
        <img className="borderClass_imagenes" src={logo}></img>
      </div>

      <div ref={ReferenciaDiv} className="Navbar_Container">
        <Link   tabIndex={1} className="linknavar" to="/">
          {" "}
          Nosotros{" "}
        </Link>
        <Link tabIndex={2} className="linknavar" to="/Sitios">
          {" "}
          Sitios{" "}
        </Link>

        <Link tabIndex={3} className="linknavar" to="/comentario">
          {" "}
          Comentario{" "}
        </Link>

        <Link tabIndex={4} className="linknavar" to="/Empresa">
          {" "}
          Sitios{" "}
        </Link>

        <IoClose
          style={{
            cursor: "pointer",
          }}
          onClick={CerrarButon}
          className="FotoClose"
        ></IoClose>
      </div>

      <div className="borderSession">
        <BsFillPersonCheckFill
          onClick={() => navigate("Registrar")}
          className="imagenesIcons"
        ></BsFillPersonCheckFill>
        <SlLogout
          onClick={() => navigate("InicarSession")}
          className="imagenesIcons"
        ></SlLogout>
        {/* <h1>IniciarSession</h1> */}
      </div>
      <div className="RepamenuHamburghuezartir">
        <IoIosMenu
          style={{
            cursor: "pointer",
          }}
          onClick={NabarTolls}
          className="menuHamburghueza"
        ></IoIosMenu>
      </div>
    </div>
  );
};

export default NavBar;
