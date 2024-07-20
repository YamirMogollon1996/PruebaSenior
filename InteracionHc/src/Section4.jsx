import React from "react";
import "./folter/Section4.css"
import { Cap } from "./utils/Ayuda";
import { BsArrowUpRightSquare } from "react-icons/bs";


const Section4 = () => {
  return (
    <div  className="MOdalcontainer">
    
     {
        Cap.map(item => <div  className="ContainerImagen" style={{
 
                  backgroundImage: `url(${item.imagen})`,
           
        }}>
    
     <div className="ModalcontainerSeccion">

        <h2>{item.nombre}</h2>
        <BsArrowUpRightSquare  className="icononext"></BsArrowUpRightSquare>
     </div>

        </div>)
     }
      
    </div>
  );
};

export default Section4;
