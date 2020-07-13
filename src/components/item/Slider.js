import React, { Fragment, useEffect } from "react";
//Importamos M de materialize
import M from "materialize-css";
import styled from "@emotion/styled";

import Counter from "./Counter";

const Slider = ({ imagenes, datos }) => {
  const { titulo, proximo, link, inscripciones } = datos;
  useEffect(() => {
    var sliderElems = document.querySelectorAll(".slider");
    var sliderInstance = M.Slider.init(sliderElems, {
      indicators: false,
      duration: 500,
      interval: 5000,
    });
  }, []);

  const moveNextCarousel = (e) => {
    e.preventDefault();
    var elem = document.querySelector(".slider");
    var instance = M.Slider.getInstance(elem);
    instance.next();
  };
  const movePrevCarousel = (e) => {
    e.preventDefault();
    var elem = document.querySelector(".slider");
    var instance = M.Slider.getInstance(elem);
    instance.prev();
  };

  return (
    <Fragment>
      <Contenedor className="container">
        <div class="slider">
          <a href="#" className="next" onClick={moveNextCarousel}>
            <i class="material-icons ">arrow_forward</i>
          </a>
          <a href="#" className="prev" onClick={movePrevCarousel}>
            <i class="material-icons ">arrow_back</i>
          </a>
          <div className="rebajas center-align  red lighten-2">
            REBAJAS: Aprovecha el mejor descuento ¡Empieza hoy!
          </div>
          <ul class="slides">
            <li>
              <img src={imagenes.imagen1} />
              <div class="caption center-align ofertas">
                <p>
                  <span className="titulo-curso">{titulo}</span>
                  <br />
                  <span className="inscripcion">
                    INSCRIPCIONES <br />
                    {inscripciones}
                  </span>
                  <br />
                  <span className="fecha-literal">
                    Hasta el proximo <br />
                    {proximo}
                  </span>
                </p>
                <p>
                  <Counter titulo={titulo} />
                </p>
                <p>
                  <button
                    role="link"
                    onClick={() => {
                      window.open(`${link}`);
                    }}
                  >
                    Comprar ahora
                  </button>
                </p>
              </div>
            </li>

            <li>
              <img src={imagenes.imagen2} />
              <div class="caption center-align ofertas">
                <p>
                  <span className="titulo-curso">{titulo}</span>
                  <br />
                  <span className="inscripcion">
                    INSCRIPCIONES <br />
                    {inscripciones}
                  </span>
                  <br />
                  <span className="fecha-literal">
                    Hasta el proximo <br />
                    {proximo}
                  </span>
                </p>
                <p>
                  <Counter titulo={titulo} />
                </p>
                <p>
                  <button>Comprar ahora</button>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Contenedor>
    </Fragment>
  );
};
const Contenedor = styled.div`
  height: 80vh;
  .slider {
    position: relative;
  }
  .slider ul li {
    height: 80vh;
  }

  .prev {
    position: absolute;
    top: 35vh;
    left: -50px;
  }
  .next {
    position: absolute;
    top: 35vh;
    right: -50px;
  }
  i {
    color: #fff;
    font-size: 2em;
  }
  .rebajas {
    position: absolute;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    top: 0;
    z-index: 5;
    width: 100%;
    color: #fff;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .slider .slides li .caption {
    position: absolute;
    width: 40%;
    height: 60vh;
    right: 0;
    left: 40vw;
    top: 7vh;
    display: table;
    background: #0c172b;
  }

  .titulo-curso {
    font-family: "Oswald", sans-serif;
    font-size: 45px;
    line-height: 0.8em;
    font-weight: 700;
    color: #8cda3f;
  }
  .inscripcion {
    font-family: "Oswald", sans-serif;
    font-size: 50px;
    font-weight: 700;
    color: #e3cf12;
    text-shadow: 5px 5px #0b4866;
  }
  .fecha-literal {
    font-family: "Oswald", sans-serif;
    font-size: 35px;
    font-weight: 500;
    color: #fff;
  }
  button {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    width: 200px;
    border: #8cda3f solid 2px;
    font-weight: 200;
    color: #8cda3f;
    background: #0b1629;
    border-radius: 30px;
    border-color: #8cda3f;
    padding: 15px;
    transition: 0.5s;
  }
  button:hover {
    background: #8cda3f;
    color: #0b1629;
    transition: 0.5s;
  }
  @media (max-width: 600px) {
    .slider .slides li .caption {
      width: 100%;
      height: 60vh;
      right: 0;
      left: 0;
      top: 5vh;
      background: rgba(12, 23, 43, 0.6);
    }
    i {
      font-size: 1.5em;
    }
    .prev {
      top: 35vh;
      left: -15px;
    }
    .next {
      top: 35vh;
      right: -15px;
    }
    .rebajas {
      font-size: 8px;
    }
    .titulo-curso {
      font-size: 25px;
    }
    .inscripcion {
      font-size: 40px;
      font-weight: 700;
    }
    .fecha-literal {
      font-size: 25px;
    }
  }
  @media (min-width: 601px) and (max-width: 992px) {
    .prev {
      top: 35vh;
      left: -20px;
    }
    .next {
      top: 35vh;
      right: -20px;
    }
    .slider ul li {
      height: 130vh;
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
  }
  @media (min-width: 1201px) {
  }
`;
export default Slider;
