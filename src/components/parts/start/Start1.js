import React, { Fragment } from "react";
import styled from "@emotion/styled";

const Start1 = () => {
  return (
    <Fragment>
      <Contenedor
        className="container row responsive wow fadeIn"
        data-wow-duration="2s"
      >
        <div className="col s12 m6 x6 xl6">
          <p className="titulo-principal">
            ALCANZA TU
            <br /> MÁXIMA
            <br /> CAPACIDAD
            <p className="titulo-secundario">
              Llega mas alla de lo que imaginas <br />
              <button>VER AHORA</button>
            </p>
          </p>
        </div>
        <div className="col s12 m6 x6 xl6 imagen hide-on-med-and-down">
          <img src="/sheet_public/img/pcfinal.gif" alt="" />
        </div>
      </Contenedor>
    </Fragment>
  );
};
const Contenedor = styled.div`
  background-image: url("/sheet_public/img/fondo1.jpg");
  background-size: 100% 130%;
  padding: 20px 50px 20px 50px;
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
  @media (max-width: 600px) {
    width: 93vw;
    background-size: 180% 130%;
    padding: 20px 0px 20px 0px;
    .titulo-principal {
      font-size: 55px;
      line-height: 63px;
      font-weight: 500;
    }
    button {
      font-size: 16px;
      width: 150px;
      font-weight: 200;
    }
  }
  @media (min-width: 601px) and (max-width: 992px) {
    width: 93vw;
    background-size: 180% 130%;
    padding: 20px 0px 20px 0px;
    margin-bottom: 50px;
    .titulo-principal {
      font-size: 55px;
      line-height: 63px;
      font-weight: 500;
    }
    button {
      font-size: 16px;
      width: 150px;
      font-weight: 200;
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    margin-bottom: 10px;
  }
  @media (min-width: 1201px) {
  }
`;
export default Start1;
