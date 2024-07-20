import React, { useState } from "react";
import "././Estilos/Card2.css";
import { FaStar } from "react-icons/fa";
import spiderman1 from "././../assets/Spiderman1.jpg";
import spiderman2 from "././../assets/Spiderman2.jpg";
import spiderman3 from "././../assets/spiderman3.jpg";
import spiderman4 from "././../assets/spidemran4.jpg";
import { IoPlayCircleOutline } from "react-icons/io5";

const ComicAppEstado = [
  {
    Lanzamineto: "20 abril 2011",
    name: "Spiderman2011",
    imagen: spiderman1,
  },
  {
    Lanzamineto: "29 octubre 2013",
    name: "Spiderman el mundo Oscuro",
    imagen: spiderman2,
  },
  {
    Lanzamineto: "1 octubre 2018",
    name: "Spiderman : Ragnarok",
    imagen: spiderman3,
  },
];

const CapSteven = [spiderman2, spiderman3, spiderman4];

const initalSpiderman = {
  title: "coleccion semanal",
  Subtitle: "RIVALDIDACIONES Y REDENCIONES THOR",
  parrafo:
    "Peter Parker era un estudiante de secundaria común y corriente hasta que, en una visita escolar a un laboratorio de investigación, fue mordido por una araña modificada genéticamente. Esto le otorgó habilidades sobrehumanas: fuerza proporcional a la de una araña, agilidad mejorada, y la capacidad de trepar paredes. Tras la trágica pérdida de su tío Ben por culpa de un ladrón que Peter pudo detener pero no lo hizo, Peter adopta la responsabilidad de usar sus poderes para ayudar a los demás.",

  Calificacionex: "139.847 views",
  estrellas: "6.8 ",
  imagen: spiderman1,
};

const Card2 = () => {
  const [Spiderman, setSpiderman] = useState(initalSpiderman);
  return (
    <>
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)) ,url(${spiderman1})`,
        }}
        className="UrlDetoke"
      >
        <div className="RayaCenter">
          <div>
            <h1 style={{ fontSize: "60px" }}>{Spiderman.title}</h1>
            <h2
              style={{
                color: "#3bfffb",
                fontWeight: "900px",
              }}
            >
              {Spiderman.Subtitle}
            </h2>
            <hr></hr>
            <p>{Spiderman.parrafo}</p>
          </div>
          <div>
            <div className="flexStart">
              <h1>Calificacion</h1>
              <FaStar className="star"></FaStar>
              <h2>{Spiderman.estrellas}</h2>
              <hr></hr>
              <span className="Califications">{Spiderman.Calificacionex}</span>
            </div>
          </div>
        </div>
        <div className="Barra_div">
          {ComicAppEstado.map((item) => (
            <div
              style={{
                backgroundImage: `url(${item.imagen})`,
              }}
              className="imagenesTo"
              src={item.imagen}
            >
              <div  className="TitleForm">
                <span>{item.name}</span>
                <br></br>
                <span>{item.Lanzamineto}</span>
              </div>
              <IoPlayCircleOutline  className="fontIcono"></IoPlayCircleOutline>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card2;
