import React, { useState } from "react";
import poster1 from "../assets/posrter2.jpg";
import poster2 from "../assets/poster1.jpg";
import poster3 from "../assets/poster3.jpg";
import poster4 from "../assets/poster4.jpg";
import poster6 from "../assets/poster6.jpg";
import poster7 from "../assets/poster7.jpg";
import poster8 from "../assets/poster8.jpg";
import poster9 from "../assets/poster9.jpg";
import poster10 from "../assets/poster10.jpg";
import poster11 from "../assets/poster11.jpg";
import poster12 from "../assets/poster12.jpg";
import poster13 from "../assets/poster13.jpg";
import "../Componentes/Estilos/Poster.css";
import { BiCameraMovie } from "react-icons/bi";

const PosterImanges = [
  poster1,
  poster2,
  poster3,
  poster4,
  poster6,
  poster7,
  poster8,
  poster9,
  poster10,
  poster11,
  poster12,
  poster13,
];
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
import Card2 from "./Card2";
import Card3 from "./Card3";
import MovieCard from "../AccionesUsuairo/MovieCard";

const superheroes = [
  {
    nombre: "Superman",
    alterEgo: "Clark Kent",
    poderes: ["Fuerzasobrehumana", "Vuelo", "Visión de calor"],
    equipo: "Liga de la Justicia",
    origen: "Krypton",
    imagen: poster1,
  },
  {
    nombre: "Mujer Maravilla",
    alterEgo: "Diana Prince",
    poderes: ["Superfuerza", "Velocidad", "Vuelo", "Sabiduría divina"],
    equipo: "Liga de la Justicia",
    origen: "Themyscira",
    imagen: poster2,
  },
  {
    nombre: "Batman",
    alterEgo: "Bruce Wayne",
    poderes: [
      "Inteligencia",
      "Habilidades en artes marciales",
      "Tecnología avanzada",
    ],
    equipo: "Liga de la Justicia",
    origen: "Gotham City",
    imagen: poster3,
  },
  {
    nombre: "Aquaman",
    alterEgo: "Arthur Curry",
    poderes: ["Hidroquinesis", "Fuerza ", "Natación "],
    equipo: "Liga de la Justicia",
    origen: "Atlántida",
    imagen: poster4,
  },
  {
    nombre: "Green Lantern",
    poderes: ["Anillo de poder", "Creación de objetos con la mente", "Vuelo"],
    debilidad: "Voluntad débil",
    origen: "gren Lay",
    imagen: poster6,
  },

  {
    nombre: "Hulk",
    poderes: ["Super fuerza", "Regeneración", "Inmunidad mental"],
    debilidad: "Mente humana",
    origen: "Tierra",
    imagen: poster7,
  },
  {
    nombre: "Thor",
    poderes: ["Fuerza sobrehumana", "Control del trueno", "Vuelo"],
    debilidad: "Poderes limitados sin Mjolnir",
    origen: "Saturno",
    imagen: poster8,
  },
  {
    nombre: "Black Widow",
    poderes: [
      "Habilidades de espionaje",
      "Maestría en combate cuerpo a cuerpo",
    ],
    debilidad: "Pasado oscuro",
    origen: "tierra",
    imagen: poster9,
  },

  {
    nombre: "Captain America",
    poderes: ["Super fuerza", "Agilidad", "Liderazgo"],
    debilidad: "Envejecimiento acelerado",
    origen: "tierra",
    imagen: poster10,
  },
  {
    nombre: "Spider-Man",
    poderes: ["Sentido arácnido", "Trepar paredes", "Disparo de telarañas"],
    debilidad: "Responsabilidad",
    origen: "queen",
    imagen: poster11,
  },
  {
    nombre: "Batman",
    poderes: ["Inteligencia", "Habilidades de detective", "Artes marciales"],
    debilidad: "Humano",
    origen: "tierra",
    imagen: poster12,
  },
  {
    nombre: "Green Arrow",
    poderes: [
      "Maestría en arquería",
      "Habilidades atléticas",
      "Tácticas de combate",
    ],
    debilidad: "Humanidad",
    origen: "marte",
    imagen: poster13,
  },
];

function Card() {
  const [Fhoto, setPhoto] = useState(superheroes[0]);
  // const [actual, setactual] = useState(0);
  const [next, setnext] = useState({
    initalseg: 0,
    finihsi: 4,
  });
  const NextSin = () => {

    if (  next.finihsi <   superheroes.length){


      setnext({
        initalseg: (next.initalseg += 1),
        finihsi: (next.finihsi += 1),
      });
    } 
    setPhoto(superheroes[next.finihsi -1]);
  };

  const HandleClick = (Encontrado, index) => {
    setPhoto(Encontrado);
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)) ,url(${Fhoto.imagen})`,
        }}
        className="FormualrioClase"
      >
        <div className="cabeza">
          <BiCameraMovie className="CameraRocket" />

          <div className="cabezaFontr">
            <p>Home</p>

            <p>Peliculas</p>

            <p>Series</p>

            <p>Explora</p>

            <p>Generos</p>
          </div>

          <input
            className="Butonbuscas"
            placeholder="que estas Buscando ?"
          ></input>
        </div>
        <div className="CenterDivLetras">
          <h2 className="title">{Fhoto.nombre}</h2>
          <hr></hr>
          <div className="RayaTtitle">
            {Fhoto.poderes.map((item) => (
              <span className="title_pequeño">{item}</span>
            ))}
          </div>
          <hr></hr>
          <p className="Polsession">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            mollitia ab eos omnis necessitatibus architecto veniam corporis id
            quisquam modi, et explicabo ducimus eius saepe laborum
            exercitationem voluptatem asperiores possimus.
          </p>
          <button className="btn btn-success p-3"> Ir a Peliculas </button>
        </div>
      </div>

      <div className="imagenesDenter">
        
        <div className="Grande" > 

        <GrCaretPrevious className="Prveis"></GrCaretPrevious>
        {superheroes.slice(next.initalseg, next.finihsi).map((item, index) => (
          <img
            onMouseEnter={() => HandleClick(item, index)}
            className="imagenSingle"
            src={item.imagen}
          ></img>
        ))}
        <GrCaretNext onClick={NextSin} className="Prveis"></GrCaretNext>

        </div>
      </div>
       <Card2></Card2>
       <Card3></Card3>
       <MovieCard></MovieCard>

    </>
  );
}

export default Card;
