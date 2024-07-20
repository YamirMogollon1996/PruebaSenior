import React, { useContext, useEffect, useState } from "react";
import { contextoGlobalTurismo } from "../../ContextoGlobal/ContextoGlobal";
import { useNavigate } from "react-router-dom";

const DescripcionRegistro = () => {
  const navegar = useNavigate();
  const { usuarios, setusuarios } = useContext(contextoGlobalTurismo);
  const [superDic, setSuperDic] = useState();
  const UnirLatos = () => {
    const { actual, Estadia, Destino } = usuarios;
    // console.log(actual);
    // console.log(Estadia), console.log(Destino);
    const Super = { ...actual, ...Estadia, ...Destino };
    setSuperDic(Super);
  };

  const handleClick = () => {
    navegar("/")
  };

  useEffect(() => {
    UnirLatos();
  }, []);

  return (
    <>
      {superDic ? (
        <div className="container mt-5">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">nombre</th>
                <th scope="col">correo</th>
                <th scope="col">lugar</th>
                <th scope="col">precio</th>
                <th scope="col">F-I</th>
                <th scope="col">F-F</th>
                <th scope="col">diaz</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{usuarios.actual.nombre}</td>
                <td>{superDic.correoelectronico}</td>
                <td>{superDic.descripcion}</td>
                <td>{superDic.precio}</td>
                <td>{superDic.fechainicio}</td>
                <td>{superDic.fechaRegreso}</td>
                <td>{superDic.Diaz}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <h1>Cargadno........</h1>
      )}

      <button onClick={handleClick} className="btn btn-success float-end m-5">
        Cerra Session
      </button>
    </>
  );
};

export default DescripcionRegistro;
