import React, { Fragment } from "react";
import styled from "@emotion/styled";
const Start3 = () => {
  return (
    <Fragment>
      <Contenedor>
        <div className="center-align">
          <p>
            REGISTRATE PARA RECIBIR ACTUALIZACIONES <br />
            NUEVAS DE CRECE
          </p>
        </div>
        <div className="container row formulario">
          <form>
            <input type="text" placeholder="Ingresa tu Email" />
            <button>Ingresar</button>
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
    border-top: solid 2px #8cda3f;
    border-left: solid 2px #8cda3f;
    border-bottom: solid 2px #8cda3f;
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
`;
export default Start3;
