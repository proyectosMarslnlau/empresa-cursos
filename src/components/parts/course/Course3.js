import React, { Fragment } from "react";
import styled from "@emotion/styled";
const Course3 = ({ datos }) => {
  return (
    <Fragment>
      <Contenedor>
        <div className="container row">
          <div className="col s12 m12 x4 xl4 right-align cuadro-imagen">
            <img
              src="/sheet_public/img/garantia.png"
              alt=""
              className="wow zoomIn"
              data-wow-duration="1s"
            />
          </div>
          <div className="col s12 m12 x4 xl4 center-align">
            <button
              className="boton-comprar wow zoomIn"
              data-wow-duration="1s"
              role="link"
              onClick={() => {
                window.open(`${datos.link}`);
              }}
            >
              COMPRAR
            </button>
          </div>
          <div className="col s12 m12 x4 xl4 left-align">
            <p className="cuadro-rebajas">
              <button className="rebaja wow zoomIn" data-wow-duration="1s">
                REBAJAS
              </button>
            </p>
            <p
              className="descuento wow fadeInRight cuadro-rebajas"
              data-wow-duration="1s"
            >
              50% Dto.
            </p>
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
  @media (max-width: 600px) {
    .cuadro-imagen {
      display: flex;
      justify-content: center;
    }
    img {
      width: 25vw;
    }
    .boton-comprar {
      font-size: 15px;
      width: 200px;
      padding: 15px;
      transition: 0.5s;
      margin-top: 20px;
    }
    .cuadro-rebajas {
      display: flex;
      justify-content: center;
    }
    .rebaja {
      font-size: 15px;
      padding: 10px;
    }
    .descuento {
      font-size: 20px;
    }
  }
  @media (min-width: 601px) and (max-width: 992px) {
    .cuadro-imagen {
      display: flex;
      justify-content: center;
    }
    img {
      width: 15vw;
    }
    .boton-comprar {
      font-size: 15px;
      width: 200px;
      padding: 15px;
      transition: 0.5s;
      margin-top: 20px;
    }
    .cuadro-rebajas {
      display: flex;
      justify-content: center;
    }
    .rebaja {
      font-size: 15px;
      padding: 10px;
    }
    .descuento {
      font-size: 20px;
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    .cuadro-imagen {
      display: flex;
      justify-content: center;
    }
    .cuadro-rebajas {
      display: flex;
      justify-content: center;
    }
  }
  @media (min-width: 1201px) {
    .cuadro-imagen {
      display: flex;
      justify-content: center;
    }
    .cuadro-rebajas {
      display: flex;
      justify-content: center;
    }
  }
`;
export default Course3;
