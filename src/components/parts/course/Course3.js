import React, { Fragment } from "react";
import styled from "@emotion/styled";
const Course3 = () => {
  return (
    <Fragment>
      <Contenedor>
        <div className="container row">
          <div className="col s4 right-align ">
            <img src="/sheet_public/img/garantia.png" alt="" />
          </div>
          <div className="col s4 center-align">
            <button className="boton-comprar">COMPRAR</button>
          </div>
          <div className="col s4 left-align">
            <p>
              <button className="rebaja">REBAJAS</button>
            </p>
            <p className="descuento">50% Dto.</p>
          </div>
        </div>
      </Contenedor>
    </Fragment>
  );
};
const Contenedor = styled.div`
  img {
    width: 7vw;
  }
  .boton-comprar {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    width: 250px;
    border: #8cda3f solid 2px;
    font-weight: 200;
    color: #8cda3f;
    background: #0b1629;
    border-radius: 30px;
    border-color: #8cda3f;
    padding: 20px;
    transition: 0.5s;
    margin-top: 40px;
  }
  .boton-comprar:hover {
    background: #8cda3f;
    color: #0b1629;
    transition: 0.5s;
  }
  .rebaja {
    width: 110px;
    font-family: "Montserrat", sans-serif;
    font-size: 13px;
    font-weight: 200;
    color: #fff;
    background: #ff4040;
    border-radius: 15px;
    border: solid #ff4040 1px;
    padding: 10px;
    transition: 0.5s;
  }
  .descuento {
    font-family: "Montserrat", sans-serif;
    font-size: 25px;
    font-weight: 200;
    color: #fff;
  }
`;
export default Course3;
