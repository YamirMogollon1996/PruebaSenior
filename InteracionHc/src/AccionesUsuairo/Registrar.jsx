import React, { useContext, useState } from "react";
import { contextoGlobalTurismo } from "../ContextoGlobal/ContextoGlobal";
import { useNavigate } from "react-router-dom";

const initalState = {
  nombre: "",
  apellido: "",
  telefono: "",
  correoelectronico: "",
  dni: "",
  direccion: "",
};
const Registrar = () => {
  const [modalayuda, setmodalaydua] = useState(false);
  const { usuarios, setusuarios } = useContext(contextoGlobalTurismo);
  const [form, setform] = useState(initalState);

  let navigate = useNavigate();
  const handleChanuge = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setusuarios({
      ...usuarios,
      listadeusaurios: [...usuarios.listadeusaurios, form],
    });
    setmodalaydua(true);
    setTimeout(() => {
      setmodalaydua(false);
    }, 800);
    setTimeout(() => {
      navigate("/InicarSession");
    }, 1000);
  };

  return (
    <>
      <h1 className="text-center  text-secondary mt-5">Registro Del usuario</h1>
      <div className="container  mt-5">
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Nombre</label>
            <input
              onChange={handleChanuge}
              name="nombre"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Apelldio</label>
            <input
              onChange={handleChanuge}
              name="apellido"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Telefono</label>
            <input
              type="number"
              onChange={handleChanuge}
              name="telefono"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">CorreoElectronico</label>
            <input
              name="correoelectronico"
              type="email"
              onChange={handleChanuge}
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">DNI</label>
            <input
              name="dni"
              onChange={handleChanuge}
              type="number"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Direccion</label>
            <input
              name="direccion"
              onChange={handleChanuge}
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <br></br>
          <br></br>
          <button type="submit" class="btn btn-primary">
            Registrar Usuario
          </button>
        </form>
      </div>
      {modalayuda && (
        <p className="text-white p-2  rounded text-center bg-success mt-4 w-50 mx-auto">
          Usario Registrado Correctamente
        </p>

        
      )}
    </>
  );
};

export default Registrar;
