import React, { Fragment, useEffect } from "react";
import styled from "@emotion/styled";
import M from "materialize-css";
const Start2 = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".parallax");
    var instances = M.Parallax.init(elems, {});
  }, []);
  return (
    <Fragment>
      <Contenedor>
        <div className="center-align texto-principal">
          ¿CUAL ES TU PROPOSITO?
        </div>
        <div className="row contenedor-imagenes">
          <div class="col s6 paralelo parallax-container">
            <div class="parallax">
              <img src="https://picsum.photos/500/1500" />
            </div>
          </div>
          <div className="col s6 texto center-align">
            <p>
              <span> TU PROPIA STARTUP</span> <br />
              <button>SELECT</button>
            </p>
            <p>
              <span>
                DESARROLLAR NUEVAS <br />
                HABILIDADES
              </span>
              <br />
              <button>SELECT</button>
            </p>
          </div>
        </div>
      </Contenedor>
    </Fragment>
  );
};
const Contenedor = styled.div`
  .texto-principal {
    color: #8cda3f;
    font-family: "Oswald", sans-serif;
    font-size: 40px;
    line-height: 48px;
    font-weight: 700;
  }
  .contenedor-imagenes {
    margin-top: 20px;
    margin-left: 100px;
    margin-right: 100px;
  }
  .paralelo {
    height: 100vh;
    border: #8cda3f solid 2px;
  }
  .texto {
    height: 100vh;
    border: #8cda3f solid 2px;
  }
  .parallax {
    z-index: 10;
  }
  button {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    border: #8cda3f solid 2px;
    width: 250px;
    font-weight: 200;
    color: #8cda3f;
    background: #0b1629;
    border-radius: 30px;
    border-color: #8cda3f;
    padding: 20px;
    transition: 0.5s;
    margin-top: 40px;
  }
  button:hover {
    background: #8cda3f;
    color: #0b1629;
    transition: 0.5s;
  }
  span {
    color: #fff;
    font-family: "Oswald", sans-serif;
    font-size: 40px;
    line-height: 48px;
    font-weight: 700;
  }
  p {
    margin-top: 80px;
  }
`;
export default Start2;
