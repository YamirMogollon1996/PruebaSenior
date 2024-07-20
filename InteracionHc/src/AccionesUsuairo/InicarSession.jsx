import React, { useContext, useState } from "react";
import { contextoGlobalTurismo } from "../ContextoGlobal/ContextoGlobal";
import { useNavigate } from "react-router-dom";
// 989123888;
const initalText = { nombre: "", contrasniea: "" };
const InicarSession = () => {
 

  const navigate = useNavigate();
  const [Errores, setErrores] = useState({});
  const { usuarios, setusuarios } = useContext(contextoGlobalTurismo);
  const [texto, settexto] = useState(initalText);

  const handleChanuge = (e) => {
    settexto({
      ...texto,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let named = usuarios.listadeusaurios.find(
      (item) => item.correoelectronico === texto.nombre
    );
    if (named == undefined) {
      setErrores({
        ...Errores,
        ingreso: true,
      });
    } else {
      if (named.telefono == texto.contrasniea) {
        setusuarios({
          ...usuarios,
          actual: named,
        });
        navigate("/RegistrarPlanes");
      } else {
        console.log("No pases");
      }
    }
    setTimeout(() => {
      setErrores({});
    }, 2000);
  };

  return (
    <>
      <h1 className="text-center bg-secondary text-white">Iniciar Session</h1>
      <div className="container  w-50  mt-5">
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Nombre</label>
            <input
              // onBlur={handleBlur}
              onChange={handleChanuge}
              name="nombre"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Apelldio</label>
            <input
              onChange={handleChanuge}
              name="contrasniea"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <br></br>

          <br></br>
          <button type="submit" class="btn btn-primary">
            Inicar Session
          </button>
        </form>
      </div>

      {Errores.ingreso && (
        <p className="text-white p-2  rounded text-center bg-danger mt-4 w-50 mx-auto">
          El usuario no existes por bien los datos
        </p>
      )}
    </>
  );
};

export default InicarSession;
