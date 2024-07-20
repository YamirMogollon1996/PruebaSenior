import React from "react";
import "../folter/section2.css";
import { BiPlusMedical } from "react-icons/bi";
import { datos, fotos } from "../utils/Ayuda";
const Section2 = () => {
  return (
    <>
    
      <div className="seccion2">
        <h1 className="Seco">
          Destinos <BiPlusMedical></BiPlusMedical>{" "}
        </h1>

        <div className="Cellnivel">
          {datos.map((Imagenes) => (
            <div
              className="ImagenesCenter"
              style={{ backgroundImage: `url(${Imagenes.imagen})` }}
            >
              <h1 className="title_Center">{Imagenes.nombre}</h1>
              <p
                style={{
                  color: "white",
                }}
                className="container_parraafo"
              >
                {Imagenes.descripcion}{" "}
              </p>
              <div className="FloatImagenes"> {Imagenes.precio}$</div>
            </div>
          ))}
        </div>

        <div className="Cellnivel meter">
          <div className="CellNivel_denter">
            <div
              className="CellNivel_denter__imagen"
              style={{ backgroundImage: `url(${fotos[0]})` }}
            ></div>
            <div>
              <h2> Espacate de la rutina con estas Increbles ofertas </h2>
              <button>Ver mas</button>
            </div>
          </div>
          <div className="CellNivel_denter">
            <div
              className="CellNivel_denter__imagen"
              style={{ backgroundImage: `url(${fotos[1]})` }}
            ></div>
            <div>


            <h2>Disfruta de lo mejor con estas ofertas</h2>
            <button>Ver mas</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
