import React, { Fragment } from "react";
import styled from "@emotion/styled";
const Course2 = ({ curso }) => {
  const {
    resumenCurso,
    informacionProducto,
    politicaReembolso,
    solicitaDescuento,
  } = curso;
  return (
    <Fragment>
      <Contenedor>
        <div className="container">
          <p className="center-align texto-superior">{resumenCurso}</p>
        </div>
        <div className="container row">
          <div
            className="col s12 m12 x4 xl4 seccion col s4 seccion wow fadeInUp"
            data-wow-duration="2s"
          >
            <p className="titulo center-align">INFORMACIÓN DEL PRODUCTO</p>
            <p className="texto">{informacionProducto}</p>
          </div>
          <div
            className="col s12 m12 x4 xl4 seccion col s4 seccion wow fadeInUp"
            data-wow-duration="2s"
          >
            <p className="titulo center-align">POLITICA DE REEMBOLSO</p>
            <p className="texto">{politicaReembolso}</p>
          </div>
          <div
            className="col s12 m12 x4 xl4 seccion col s4 seccion wow fadeInUp"
            data-wow-duration="2s"
          >
            <p className="titulo center-align">SOLICITA TU DESCUENTO</p>
            <p className="texto">{solicitaDescuento}</p>
          </div>
        </div>
      </Contenedor>
    </Fragment>
  );
};
const Contenedor = styled.div`
  margin-bottom: 100px;
  .texto-superior {
    margin-left: 200px;
    margin-right: 200px;
    color: #fff;
    white-space: pre-wrap;
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
  }
  .seccion {
    background: #273145;
    color: #fff;
    padding: 40px;
    border: solid #0b1629 10px;
  }
  .titulo {
    font-family: "Exo 2", sans-serif;
    font-size: 20px;
    font-weight: 22px;
  }
  .texto {
    font-family: "Montserrat", sans-serif;
    color: #fff;
    white-space: pre-wrap;
    font-size: 15px;
  }
  @media (max-width: 600px) {
    margin-bottom: 20px;

    .texto-superior {
      margin-left: 5px;
      margin-right: 5px;
      font-size: 15px;
    }
    .seccion {
      padding: 20px;
    }
    .titulo {
      font-size: 17px;
      font-weight: 22px;
    }
    .texto {
      font-size: 13px;
    }
  }
  @media (min-width: 601px) and (max-width: 992px) {
    margin-top: 230px;
    margin-bottom: 20px;

    .texto-superior {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
  }
  @media (min-width: 1201px) {
  }
`;
export default Course2;
