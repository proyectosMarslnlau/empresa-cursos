import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";

const Start3 = () => {
  //Obtener datos de formulario
  const [datoFormulario, guardarDatoFormulario] = useState({
    email: "",
  });
  const datosFormulario = (e) => {
    guardarDatoFormulario({
      ...datoFormulario,
      [e.target.name]: e.target.value,
    });
  };
  const { email } = datoFormulario;

  const funcionFormulario = (e) => {
    e.preventDefault();
    peticionEmail(email);
  };

  const peticionEmail = async (valor) => {
    const urlEmail = "http://localhost:5000/productos";
    if (valor === "") {
      alert("Se requiere algunos datos");
      return;
    }
    try {
      const peticion = await axios.post(urlEmail, {
        email: valor,
      });
      console.log(peticion);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      <Contenedor>
        <div className="center-align">
          <p className="wow fadeInUp" data-wow-duration="2s">
            REGÍSTRATE PARA RECIBIR ACTUALIZACIONES <br />
            NUEVAS DE CRECÉ
          </p>
        </div>
        <div className="container formulario">
          <form
            className="wow fadeInRight"
            data-wow-duration="2s"
            onSubmit={funcionFormulario}
            className="center-align"
          >
            <input
              type="text"
              placeholder="Ingresa tu Email aca..."
              name="email"
              onChange={datosFormulario}
            />
            <button className="submit">Ingresar</button>
          </form>
        </div>
      </Contenedor>
    </Fragment>
  );
};
const Contenedor = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  p {
    color: #fff;
    font-family: "Oswald", sans-serif;
    font-size: 40px;
    line-height: 48px;
    font-weight: 700;
  }
  .formulario {
    display: flex;
    justify-content: center;
  }
  form {
    position: relative;
    width: 50vw;
    height: 10vh;
    background: #0b1629;
    border: solid 2px #8cda3f;
    padding: 10px;
    border-radius: 30px;
  }
  input {
    font-family: "Montserrat", sans-serif;
    color: #8cda3f;
  }
  /* label underline focus color */
  input[type="text"]:not(.browser-default):focus {
    border-bottom: 1px solid #000;
    box-shadow: 0 1px 0 0 #8cda3f;
    color: #8cda3f;
  }
  button {
    position: absolute;
    top: -1px;
    right: 0;
    height: 10vh;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    width: 250px;
    font-weight: 200;
    color: #8cda3f;
    border: #8cda3f solid 4px;
    background: #0b1629;
    border-radius: 30px;
    border-color: #8cda3f;
    padding: 20px;
    transition: 0.5s;
  }
  button:hover {
    background: #8cda3f;
    color: #0b1629;
    transition: 0.5s;
  }
  @media (max-width: 600px) {
    margin-top: 50px;
    p {
      font-size: 35px;
    }
    button {
      position: absolute;
      width: 100%;
      top: 80px;
      right: 0px;
    }
    form {
      width: 70vh;
    }

    input[type="text"]:not(.browser-default) {
      border-bottom: 1px solid rgba(1, 1, 1, 0.1);
      box-shadow: 0 1px 0 0 rgba(1, 1, 1, 0.1);
      color: #8cda3f;
    }
    input[type="text"]:not(.browser-default):focus {
      border-bottom: 1px solid rgba(1, 1, 1, 0.1);
      box-shadow: 0 1px 0 0 rgba(1, 1, 1, 0.1);
      color: #8cda3f;
    }
  }
  @media (min-width: 601px) and (max-width: 992px) {
    margin-top: 10px;
    p {
      font-size: 30px;
    }
    input {
      height: 15vh;
    }
    button {
      position: absolute;
      width: 47vh;
      top: 75px;
      right: 0px;
      height: 70px;
    }
    form {
      width: 47vh;
      height: 20%;
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
  }
  @media (min-width: 1201px) {
  }
`;
export default Start3;
