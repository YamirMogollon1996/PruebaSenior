import React, { useEffect, useReducer, useState } from "react";
import { FuncionReductora, intialState, Type } from "./ReducerTypos/types";
import "../Estilos/Frontera.css";
const Carrito = () => {
  const [estoad, dispatch] = useReducer(FuncionReductora, intialState);
  const [  Total ,setTotal]  = useState(  0  )
  const colores = ["#020024", "#3f5efb", "#eeaeca"];

  useEffect(() => {
   setTotal(estoad.carritos
     .map((item) => ({
       precio: item.precio,
       cantidad: item.cantidad,
       total: item.precio * item.cantidad,
     }))
     .map((item) => item.total)
     .reduce((acum, item) => acum + item, 0));

    // console.log(Filtro);
  }, [estoad]);
  return (
    <>

      {
        colores.map(item => <button   style={{

          backgroundColor :`${item}`,
          padding:"1em",
          borderRadius:"1em"
        }} > {item}</button>)
      }
      
      <div className="codde">
        {estoad.produc.map((item) => (
          <>
            <div
              style={
                {
                  // backgroundColor: "grey",
                }
              }
              className="classic"
            >
              <h3>{item.id}</h3>
              <h3>{item.stock}</h3>
              <h3>{item.nombre}</h3>
              <h3>{item.precio}</h3>
              <div className="flex">
                <button
                  // disabled={item.stock == 0 && disabled}
                  onClick={() =>
                    dispatch({
                      type: Type.add,
                      payload: item,
                    })
                  }
                  className="btn btn-primary"
                >
                  check
                </button>

                <button
                  disabled={item.stock == 0 && "disabled"}
                  onClick={() =>
                    dispatch({
                      type: Type.agregar,
                      payload: item,
                    })
                  }
                  className="btn btn-success"
                >
                  agregar
                </button>
              </div>
            </div>
          </>
        ))}
        <hr></hr>
        <h1>{JSON.stringify(estoad.actual)}</h1>
        <hr></hr>

        <h1>Carrito Station</h1>

        {estoad.carritos.map((item) => (
          <div className="TooltikContainer">
            <h1> {item.id} </h1>

            <h1> {item.nombre} </h1>
            <h1> {item.precio} </h1>
            <h1> {item.cantidad} </h1>

            <div className="ContainerBotones">
              <button
                onClick={() => {
                  dispatch({
                    type: Type.aumentarCarrito,
                    payload: item,
                  });
                }}
                className="btn btn-primary"
              >
                +{" "}
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: Type.RestarCarrito,
                    payload: item,
                  })
                }
                className="btn btn-dark"
              >
                -
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: Type.BorrarTodo,
                    payload: item,
                  })
                }
                className="btn btn-danger"
              >
                R
              </button>
            </div>
          </div>
        ))}
        <h1>{Total}</h1>
      </div>
      {/* <h1>{JSON.stringify(estoad.carritos)}</h1> */}
    </>
  );
};

export default Carrito;
