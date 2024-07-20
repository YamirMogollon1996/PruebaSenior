import React, { useEffect, useRef, useState } from "react";
import { People, valormodificado } from "./Data";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { AiFillPlusSquare } from "react-icons/ai";
import "./estilos/estilos.css";
import { FaFilter } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { BiSolidArrowFromBottom } from "react-icons/bi";
import { BiSolidArrowToBottom } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import ModalPrincipal from "./ContextoGlobalRedux/ModalPrincipal";
import { CiStar } from "react-icons/ci";
import { MdErrorOutline } from "react-icons/md";


import {
  incremntnext,
  decremnetvi,
  RecibirData,
  Descedente,
  Ascendente,
  OrdenarPorCategoria,
  DecrementarporCategoria,
  AsendenteLvl,
  Descendetelvl,
  addlista,
  LocalStorage,
  decremnetvi2,
  incremntnext2,
} from "./ContextoGlobalRedux/SliceUsuarios/usuarios";


const Principal = () => {
  const { usuario, next, previus, Favoritos, encontrados } = useSelector(
    (state) => state.usuario
  );
  const [modal, setModal] = useState(false);
  const [salto, setsalto] = useState(5);
  const [Value, setValor] = useState("");
  const [modalOrder, setmodalOrder] = useState(false);
  const [Lista,setLista] =  useState(false)
  const dispatch = useDispatch();

  const Descendete = (e) => {
    dispatch(Descedente());
    setmodalOrder(!modalOrder);
  };
  const ClickerViwe = (e) => {
    console.log(e);
    dispatch(Ascendente(e.target.previousSibling));
    setmodalOrder(!modalOrder);
  };

  const DisminuirPorcategoria = () => {
    dispatch(DecrementarporCategoria());
  };
  const HandleClikcateogira = (e) => {
    dispatch(OrdenarPorCategoria("mog"));
  };

  const AscendenteLevel = (e) => {
    dispatch(AsendenteLvl());
 
  };


  const HandleChanuge = (e) => {
    setValor(e.target.value);
  };

  useEffect(() => {
    let data = usuario
      .map((item) => ({ ...item, name: item.name.toLowerCase() }))
      .filter((item) => item.name.includes(Value));
    dispatch(RecibirData(data));
  }, [Value]);


  useEffect(()=>{

      dispatch(LocalStorage());

  } ,  [  ])
  return (
    <>
      {Lista && (
        <ModalPrincipal Lista={Lista} setLista={setLista}></ModalPrincipal>
      )}
      <div className="container p-4">
        <div className="   pb-5 d-flex  justify-content-between">
          <FaHeart onClick={() => setLista(!Lista)} className="Heart"></FaHeart>
          <button onClick={() => setModal(!modal)} className="btn btn-primary">
            Buscar
          </button>
          {modal && (
            <input
              onChange={HandleChanuge}
              placeholder="buscar persona"
              className="form-control w-25"
            ></input>
          )}
          <b className="flotaLeft">Personas : {usuario.length}</b>
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">
                <div>
                  <span> name </span>
                  <BiSolidArrowFromBottom
                    value="name"
                    onClick={ClickerViwe}
                    className="bb"
                  ></BiSolidArrowFromBottom>

                  <BiSolidArrowToBottom
                    onClick={Descendete}
                    className="bb"
                  ></BiSolidArrowToBottom>
                </div>
              </th>
              <th className="bordeccr" scope="col">
                <div>
                  <span> Cateogira </span>
                  <BiSolidArrowFromBottom
                    value="categoria"
                    // onClick={ClickerViwe}
                    onClick={HandleClikcateogira}
                    className="bb"
                  ></BiSolidArrowFromBottom>
                  <BiSolidArrowToBottom
                    //  onClick={}
                    onClick={DisminuirPorcategoria}
                    className="bb"
                  ></BiSolidArrowToBottom>
                </div>
              </th>

              <th scope="col">company</th>
              <th scope="col">
                <span> levelOfHappiness</span>
                <BiSolidArrowFromBottom
                  onClick={AscendenteLevel}
                  className="bb"
                ></BiSolidArrowFromBottom>
                <BiSolidArrowToBottom
                  onClick={() => dispatch(Descendetelvl())}
                  className="bb"
                ></BiSolidArrowToBottom>
              </th>
              <th scope="col">Añadir</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            {/* {
              encontrados.length >  0 
            }


            {usuario.slice(next - 5, next).map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.company}</td>
                <td>{item.levelOfHappiness}</td>
                <td>
                  <input
                    className="bozing  btn btn-primary p-4"
                    type="checkbox"
                  ></input>
                </td>
              </tr>
            ))} */}

            <hr></hr>
            {encontrados.slice(next - 5, next).map((item) => (
              <tr
                style={{
                  opacity: `${!item.estado ? "1" : ".3"}`,
                }}
              >
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.company}</td>
                <td>{item.levelOfHappiness}</td>
                <td>
                  {!item.estado && (
                    <AiFillPlusSquare
                      onClick={() => dispatch(addlista(item))}
                      className="size"
                    ></AiFillPlusSquare>
                  )}
                </td>
                <th scope="col">
                  {!item.estado ? <span>libre</span> : <span>ocupado</span>}
                  {/* Libre */}
                  {/* <CiStar className="size"></CiStar>
                  <MdErrorOutline className="size"></MdErrorOutline> */}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="Pagination">
         < span>Page {next / salto}  / {encontrados.length / salto} </span>
          <MdOutlineNavigateBefore
            onClick={() => dispatch(decremnetvi(salto,"encontrados"))}
            className="Flecha"
          ></MdOutlineNavigateBefore>
          <MdOutlineNavigateNext
            onClick={() => dispatch(incremntnext(salto,"encontrados"))}
            className="Flecha"
          ></MdOutlineNavigateNext>
        </div>
      </div>
    </>
  );
};

export default Principal;
