import React from "react";
import "./folter/Secton3.css";
import { GiDrakkarDragon } from "react-icons/gi";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FestividadesEventos } from "./utils/Ayuda";
import { IoLocationOutline } from "react-icons/io5";


const Section3 = () => {
  return (
    <>
      <div className="section3">
        {/* <hr></hr> */}
        <div  className="Named_TT">
        
        <h1>
          {" "}
          <GiDrakkarDragon /> Festivdades ye eventos{" "}
          <FaArrowRightToBracket></FaArrowRightToBracket>{" "}
        </h1>
        </div>
        <div className="seccion3_denter">
          {FestividadesEventos.map((item) => (
            <div className="ContainerImages">
              <div
                className="imagendentro"
                style={{
                  backgroundImage: `url(${item.imagen})`,
                }}
              ></div>
              <br></br>
              {/* <hr></hr> */}
              <span className="ContainerImages_parrafo">{item.descripcion}</span>
              <div className="Section_footer">
                <p>
                  {" "}
                  <IoLocationOutline></IoLocationOutline> {item.nombre}
                </p>
                <p>{item.fecha}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section3;
