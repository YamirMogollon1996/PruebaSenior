import React, { useContext, useEffect, useState } from "react";
import { FestividadesEventos } from "../../utils/Ayuda";
import { FaRegUser } from "react-icons/fa";
import { contextoGlobalTurismo } from "../../ContextoGlobal/ContextoGlobal";
import { FaTentArrowLeftRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "./../../folter/Planes.css";

const intialForm = { fechainicio: "", fechaRegreso: "" };
const RegistrarFechas = () => {
  const { usuarios, setusuarios } = useContext(contextoGlobalTurismo);
  const [intialText, setinitalText] = useState(intialForm);
  const [Diaz, setDiaz] = useState(0);
  let navigate = useNavigate();

 const onsubmitform = (e )=>{

      
    e.preventDefault()
    const fechas =  {fechainicio  : intialText.fechainicio,fechaRegreso :intialText.fechaRegreso, Diaz}
    setusuarios({
      ...usuarios,
      Estadia: fechas
    })
    navigate("/DescripcionRegistro")

 }
  const Lista = () => {
    if (intialText.fechainicio != "" && intialText.fechainicio) {
      let dat1 = intialText.fechainicio.slice(-2);
      let dat2 = intialText.fechaRegreso.slice(-2);
      setDiaz(dat2 - dat1);
    }
  };

  useEffect(() => {
    Lista();
  }, [intialText]);

  const handleChange = (e) => {
    setinitalText({
      ...intialText,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <h1 className="text-center mt-4">Registrar Viaje</h1>

      <hr></hr>
      <div className="Modal">
        <div className="modal011">
          <div className="card">
            <img
              class="card-img-top"
              src={usuarios.Destino?.imagen}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{usuarios.Destino.nombre}</h5>
              <p className="card-text">{usuarios.Destino.descripcion}</p>
              <h1>{usuarios.Destino.precio} $</h1>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="borderss">
            <span>Fecha incios</span>
            <form onSubmit={onsubmitform} > 
              <input
                name="fechainicio"
                type="date"
                onChange={handleChange}
              ></input>
              <input
                onChange={handleChange}
                name="fechaRegreso"
                type="date"
              ></input>

              <br></br>
              <br></br>
              {Diaz > 0 && (
                <h1
                  style={{
                    color: "royalblue",
                  }}
                >
                  {Diaz} dias{" "}
                </h1>
              )}
              <button  className="btn btn-outline-primary">
                Registrar Reserva
              </button>
            </form>
          </div>
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
        </div>
      </div>
    </>
  );
};

export default RegistrarFechas;
