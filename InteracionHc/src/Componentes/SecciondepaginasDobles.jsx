import React from "react";
import "../folter/Sessiondoble.css";
const SecciondepaginasDobles = ({ propiedaes }) => {
  return (
    <>
      {propiedaes.length != 0 ? (
        <div className="GridSession">
          <div>
            {propiedaes.mayor.map((item) => (
              <h1 className="TextCenter">{item.nombre}</h1>
            ))}
          </div>

          <div>
            {propiedaes.menor.map((item) => (
              <h1 className="TextCenter">{item.nombre}</h1>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SecciondepaginasDobles;
