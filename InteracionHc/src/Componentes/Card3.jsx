import React from 'react'
import "./Estilos/Card3.css"
import   portada1 from  "./../assets/Portada1.jpg"  
import portada2 from "./../assets/portada2.jpg" 
import portada3 from "./../assets/portada3.jpg"   
import portada4 from "./../assets/portada4.jpg"  
const ListaVac=  [ portada1,portada2,portada3,portada4]

const Card3 = () => {
  return (
    <>
      <div className="TitleCardContainer">
    <span className='titleSessiones' >Cines y Sessiones</span>
    <h1 className='CenterDivOutput'>Tu Pantalla Tu escenario ! </h1>
        <div className="OutCenterGrid">
          {ListaVac.map((item) => (
            <div
              style={{
                backgroundImage: `url(${item})`,
              }}
            >
              {" "}

              <div  className='Card-Denter-imagen'>
                    {/* <p>Columan</p> */}

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card3