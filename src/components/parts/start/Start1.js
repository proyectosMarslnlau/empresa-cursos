import React, { Fragment } from "react";
import styled from "@emotion/styled";
const Start1 = () => {
  return (
    <Fragment>
      <ContenedorPrincipal>
        <Contenedor className="container row">
          <div className="col s6">
            <p className="titulo-principal">
              ALCANZA TU
              <br /> MAXIMA
              <br /> CAPACIDAD
              <p className="titulo-secundario">
                Llega mas alla de lo que imaginas <br />
                <button>VER AHORA</button>
              </p>
            </p>
          </div>
          <div className="col s6 imagen">
            <img src="/sheet_public/img/dentos.gif" alt="" />
          </div>
        </Contenedor>
      </ContenedorPrincipal>
    </Fragment>
  );
};
const ContenedorPrincipal = styled.div`
  background-image: url("/sheet_public/img/fondo1.jpg");
  background-size: 100% 130%;
`;
const Contenedor = styled.div`
  padding: 20px;
  padding-left: 50px;
  padding-right: 50px;
  height: 90vh;
  .titulo-principal {
    color: #8cda3f;
    font-family: "Oswald", sans-serif;
    font-size: 75px;
    line-height: 83px;
    font-weight: 700;
  }
  .titulo-secundario {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    color: #fff;

    font-weight: 50;
  }
  button {
    font-family: "Montserrat", sans-serif;
    border: #8cda3f solid 2px;
    font-size: 16px;
    width: 250px;
    font-weight: 200;
    color: #8cda3f;
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
  .imagen {
    margin-top: 100px;
  }
`;
export default Start1;
