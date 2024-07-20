import React, { useEffect, useRef, useState } from "react";
import "./../folter/estilosform.css";
import paisaje from "../Img/machupichu.jpg";
import Section2 from "./Section2";
import Section3 from "../Section3";
import Section4 from "../Section4";
import Footer from "../Footer";
import fotopaisaje from "../Img/tierra.jpg";

const Imagenes = [paisaje];

const PagePrincipial = () => {
  const [estaod, setEstado] = useState(false);

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ModalFade = useRef();

  const CloseModal = () => {
    if (ModalFade.current.classList.contains("faeout")) {
      console.log("Cerrar");
    } else {
      ModalFade.current.classList.toggle("CloseFadeIn");
      setTimeout(() => {
        setEstado(false);
      }, 900);
    }
  };

  const handleClick = () => {
    setEstado(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setEstado(true);
    }, 500);
  }, []);

  return (
    <>
      {estaod && (
        <div className="FornameTest">
          <div ref={ModalFade} className="FormularioTest">
            <div
              className="ImagenPeru"
              style={{
                backgroundImage: `url(${fotopaisaje})`,
              }}
            ></div>

            <div className="imagenCenter">
              <h2>Bienvenido</h2>
              <input placeholder="nombre"></input>
              <input placeholder="Apellido"></input>
              <input placeholder="dni"></input>
              <input placeholder="correo"></input>
              <br></br>
              <br></br>
              <br></br>
              <button onClick={handleClick}>Bienvendio</button>
            </div>
            <button onClick={CloseModal} className="ButonX">
              {" "}
              X
            </button>
          </div>
        </div>
      )}

      <div className="Telnet">
        <div
          style={{
            backgroundImage: `url(${Imagenes})`,
          }}
          className="Heroiamgenes"
        ></div>
      </div>

      {/* section2 */}
      <Section2 ref={ref1}></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Footer></Footer>
    </>
  );
};

export default PagePrincipial;
