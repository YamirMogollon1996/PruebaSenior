import paisaje1 from "../Img/paisaje1.jpg";
import paisaje2 from "../Img/paisaje2.jpg";
import paisaje3 from "../Img/paisaje3.jpg";
import paisaje4 from "../Img/paisaje4.jpg";
import inca1 from "../Img/inca1.jpg";
import inca2 from "../Img/inca2.jpg";
import inca3 from "../Img/inca3.jpg";
import inca4 from "../Img/inca4.jpg";
import foto1 from "../Img/foto1.jpg";
import foto2 from "../Img/foto2.jpg";
import cap1 from "../Img/cap1.jpg";
import cap2 from "../Img/cap2.jpg";
import cap3 from "../Img/cap3.jpg";
import cap4 from "../Img/cap4.jpg";







export const fotos = [foto1, foto2];
export let datos = [
  {
    nombre: "Cajamarca",
    precio: 1200,
    descripcion:
      "La ciudad del amor, famosa por la Torre Eiffel, sus cafés y el Museo del Louvre.",
    imagen: paisaje1,
  },
  {
    nombre: "Tumbes ",
    precio: 1500,
    descripcion:
      "Una metrópolis moderna con una mezcla única de tradición, tecnología y cultura pop.",
    imagen: paisaje2,
  },
  {
    nombre: "lima",
    precio: 1300,
    descripcion:
      "La ciudad que nunca duerme, conocida por Times Square, Central Park y sus rascacielos icónicos.",
    imagen: paisaje3,
  },
  {
    nombre: "Arequipa",
    precio: 1100,
    descripcion:
      "Una ciudad histórica llena de monumentos antiguos como el Coliseo, el Vaticano y la Fontana di Trevi.",
    imagen: paisaje4,
  },
];

export let FestividadesEventos = [
  {
    nombre: "Cajamarca",
    precio: 1200,
    descripcion: "XXX Sondor Rayimi 2024",
    imagen: inca1,
    fecha: `${new Date().getFullYear()}   -    ${new Date().getMonth()}`,
  },
  {
    nombre: "Tumbes ",
    precio: 1500,
    descripcion: "Aniversario del Distrito de Characato",
    imagen: inca2,
    fecha: `${new Date().getFullYear()}   -    ${new Date().getMonth()}`,
  },

  {
    nombre: "lima",
    precio: 1300,
    descripcion: "Fiesta Del Cusco- inti Raymi",
    imagen: inca3,
    fecha: `${new Date().getFullYear()}   -    ${new Date().getMonth()}`,
  },
  {
    nombre: "Arequipa",
    precio: 1100,
    descripcion: "Aniversario de la pronvicia de caylloma",
    imagen: inca4,
    fecha: `${new Date().getFullYear()}   -    ${new Date().getMonth()}`,
  },
];


export let Cap = [
  {
    nombre: "ciudadle de cusco",
    precio: 1200,
    descripcion: "XXX Sondor Rayimi 2024",
    imagen: cap1,
    fecha: `${new Date().getFullYear()}   -    ${new Date().getMonth()}`,
  },
  {
    nombre: "Arequipa ciudad blanca ",
    precio: 1500,
    descripcion: "Aniversario del Distrito de Characato",
    imagen: cap2,
    fecha: `${new Date().getFullYear()}   -    ${new Date().getMonth()}`,
  },

  {
    nombre: "Malecon de lima",
    precio: 1300,
    descripcion: "Fiesta Del Cusco- inti Raymi",
    imagen: cap3,
    fecha: `${new Date().getFullYear()}   -    ${new Date().getMonth()}`,
  },
  {
    nombre: "Costa Verde",
    precio: 1100,
    descripcion: "Aniversario de la pronvicia de caylloma",
    imagen: cap4,
    fecha: `${new Date().getFullYear()}   -    ${new Date().getMonth()}`,
  },
];
