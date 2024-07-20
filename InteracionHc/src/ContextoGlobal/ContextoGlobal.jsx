import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
export const contextoGlobalTurismo = createContext();


const ListaStore = {
  listadeusaurios: [],
  actual: "",
  Destino:""   ,
  Estadia: ""
};
const ContextoGlobal = ({ children }) => {
  const [usuarios, setusuarios] = useState(
    JSON.parse(localStorage.getItem("usuarios")) || ListaStore
  );

  const valores = { usuarios, setusuarios };
  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }, [usuarios]);
  return (
    <>
      <contextoGlobalTurismo.Provider value={valores}>
        {children}
      </contextoGlobalTurismo.Provider>

    </>
  
);
};

export default ContextoGlobal;
