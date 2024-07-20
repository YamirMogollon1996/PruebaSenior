import React, { useEffect, useRef, useState } from "react";
import { Series, peliculas, Movies } from "../assets/Data";
import "./../Componentes/Estilos/Card3.css";
const names = Series.slice(0, 5);
const Ultimaparte = Series.slice(5, 10);
import { FaPlay } from "react-icons/fa";

const MovieCard = () => {
  const [estado, setEstado] = useState(1);
  const [Puntos, setPuntos] = useState([]);
  const [flag, setFlag] = useState(0);
  const DivGrande = useRef();

  const HandleClickers = (index) => {
    setFlag(index);
    const posicion = index * -50;

    // console.log(posicion);
    DivGrande.current.style.transform = `translateX(${posicion}%)`;
    console.log(DivGrande.current);
  };

  useEffect(() => {
    let puntos = [];
    for (let index = 0; index < Series.length / 5; index++) {
      puntos.push("");
    }
    setPuntos(puntos);
  }, []);

  return (
    <>
      <div className="blackColor">
        <p className="TitleSeries">Series Populares</p>
        <div ref={DivGrande} className="GridPos">
          <div className="GridContainerCenter">
            {names.map((item, index) => (
              <div
                className="imagenes"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)) ,url(${item})`,
                }}
              >
                <div className="Peliculas">
                  <div>
                    <span>Peliculas 2017</span>
                    <br></br>

                    <span>Copy Rigth</span>
                  </div>
                  <FaPlay className="Faplay"></FaPlay>
                </div>
              </div>
            ))}
          </div>
          <div className="GridContainerCenter">
            {Ultimaparte.map((item, index) => (
              <div
                className="imagenes"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)) ,url(${item})`,
                }}
              >
                <div className="Peliculas">
                  <div>
                    <span>Peliculas 2017</span>
                    <br></br>

                    <span>Copy Rigth</span>
                  </div>
                  <FaPlay className="Faplay"></FaPlay>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="Raya">
          {/* <h1>{JSON.stringify(Puntos)}</h1>      */}
          {Puntos.map((item, index) => (
            <div
              style={{
                backgroundColor: `${index === flag ? "#394f53" : "white"}`,
              }}
              onClick={() => HandleClickers(index)}
              className="Boltuno"
            ></div>
          ))}
          {/* <div className="Boltuno"></div>
          <div className="Boltuno"></div> */}
        </div>
      </div>
    </>
  );
};

export default MovieCard;
