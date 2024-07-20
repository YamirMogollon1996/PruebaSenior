import React, { useContext } from "react";
import Section2 from "../Section2";
import "./../../folter/Planes.css";
import { FestividadesEventos } from "../../utils/Ayuda";
import { FaRegUser } from "react-icons/fa";
import { contextoGlobalTurismo } from "../../ContextoGlobal/ContextoGlobal";
import { FaTentArrowLeftRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const RegistrarPlanes = () => {
  const { usuarios, setusuarios } = useContext(contextoGlobalTurismo);

  let navigate = useNavigate();
  const DestinoElegir = (item) => {
    navigate("/RegistrarFechas");
    setusuarios({
      ...usuarios,
      Destino: item,
    });
  };
  return (
    <>
      <h1 className="text-center mt-4">Registrar Viaje</h1>
      <hr></hr>
      <div className="Modal">
        <div className="modal011">
          {FestividadesEventos.map((item) => (
            <div
              style={{
                width: "18rem",
              }}
              class="card"
            >
              <img
                class="card-img-top"
                src={item.imagen}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">{item.nombre}</h5>
                <p class="card-text">{item.descripcion}</p>
                <a onClick={() => DestinoElegir(item)} class="btn btn-primary">
                  Seleccionar
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="UsuarioLogin">
          <div className="DenterCenter">
            <FaRegUser className="Fideximagen"></FaRegUser>
            <hr></hr>
            <span>User</span>
            <p>{usuarios.actual.nombre}</p>
            <p>{usuarios.actual.correoelectronico}</p>
            <button className="btn btn-success">Elejir Destino</button>
          </div>
          <FaTentArrowLeftRight className=" posisionDestino IconoElejir"></FaTentArrowLeftRight>
        </div>
      </div>
    </>
  );
};

export default RegistrarPlanes;
