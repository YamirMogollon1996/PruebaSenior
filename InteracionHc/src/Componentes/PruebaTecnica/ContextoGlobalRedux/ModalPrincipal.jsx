import React, { useEffect, useState } from "react";
import "../estilos/estilos.css";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import {
  BuscarDatosParametro,
  decremnetvi,
  decremnetvi2,
  EliminarLista,
  incremntnext,
  incremntnext2,
} from "./SliceUsuarios/usuarios";
import { IoClose } from "react-icons/io5";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";

const ModalPrincipal = ({ Lista, setLista }) => {
  let dispatch = useDispatch();
  const [Inputformulario, setInpurFormulario] = useState("");
  const [salto, setsalto] = useState(5);
  const [Nico, setnico] = useState("");
  const estado = useSelector((state) => state.usuario);
  const {
    usuario,
    next,
    previus,
    NextModal,
    Favoritos,
    encontrados,
    FavEncontrados,
  } = useSelector((state) => state.usuario);

  const HandleChangue = (e) => {
    setnico(e.target.value);
  };
  const OnchanServior = () => {
    dispatch(
      BuscarDatosParametro({
        Nico,
        Inputformulario,
      })
    );
  };
  useEffect(() => {
    OnchanServior();
  }, [Inputformulario]);

  return (
    <>
      <div className="ContainerModal d-flex justify-content-center align-items-center">
        <div className="container classeContainer">
          <IoClose
            onClick={() => setLista(!Lista)}
            className="CloseIConos"
          ></IoClose>
          <h2>{Inputformulario}</h2>
          {/* {JSON.stringify(FavEncontrados.length)} */}
          {/* <h1>Lista Favoritos</h1> */}

          {/* {FavEncontrados.map(item => <p>)} */}
          {Favoritos.length > 0 && (
            <div className="input-group  w-100 mb-3">
              <select
                onChange={HandleChangue}
                className="custom-select"
                id="inputGroupSelect02"
              >
                <option selected>Choose...</option>
                <option value="Nombre">Nombre</option>
                <option value="Categoria">Categoria</option>
                <option value="Empresa">Empresa</option>
              </select>
              <div class="input-group-append">
                <label class="input-group-text" for="inputGroupSelect02">
                  Filtra Por
                </label>
              </div>
            </div>
          )}
          {Favoritos.length > 0 && (
            <input
              onChange={(e) => setInpurFormulario(e.target.value)}
              placeholder="Buscar"
              className="form-control"
            ></input>
          )}
          <hr></hr>
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">name</th>
                <th scope="col">Cateogiras</th>
                <th scope="col">Company</th>
                <th scope="col">Levelofhapinnes</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {FavEncontrados.length === 0
                ? Favoritos.slice(NextModal - 5, NextModal).map((item) => (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.category}</td>
                      <td>{item.company}</td>
                      <td>{item.levelOfHappiness}</td>
                      <td>
                        <MdDelete
                          onClick={() => dispatch(EliminarLista(item))}
                          className="size"
                        ></MdDelete>
                      </td>
                    </tr>
                  ))
                : FavEncontrados.slice(NextModal - 5, NextModal).map((item) => (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.category}</td>
                      <td>{item.company}</td>
                      <td>{item.levelOfHappiness}</td>
                      <td>
                        <MdDelete
                          onClick={() => dispatch(EliminarLista(item))}
                          className="size"
                        ></MdDelete>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
          <div className="Pagination">
            <span>Page {NextModal / salto}</span>
            <MdOutlineNavigateBefore
              onClick={() => dispatch(decremnetvi2(salto))}
              className="Flecha"
            ></MdOutlineNavigateBefore>
            <MdOutlineNavigateNext
              onClick={() => dispatch(incremntnext2(salto))}
              className="Flecha"
            ></MdOutlineNavigateNext>
          </div>
          {Favoritos.length === 0 && <h1 className="text-center">Sin nada</h1>}
        </div>
      </div>

      {/* <h1>Modal</h1> */}
    </>
  );
};

export default ModalPrincipal;
