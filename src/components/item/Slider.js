import React, { Fragment, useEffect } from "react";
//Importamos M de materialize
import M from "materialize-css";
import styled from "@emotion/styled";

import Counter from "./Counter";

const Slider = () => {
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
              <img src="https://lorempixel.com/580/250/nature/1" />
              <div class="caption center-align ofertas">
                <p>
                  <span className="titulo-curso">EDUCANINO</span>
                  <br />
                  <span className="inscripcion">
                    INSCRIPCIONES <br />
                    ABIERTAS
                  </span>
                  <br />
                  <span className="fecha-literal">
                    Hasta el proximo <br />
                    Domingo 9:00
                  </span>
                </p>
                <p>
                  <Counter />
                </p>
                <p>
                  <button>Comprar ahora</button>
                </p>
              </div>
            </li>

            <li>
              <img src="https://lorempixel.com/580/250/nature/2" />
              <div class="caption center-align ofertas">
                <h3>Left Aligned Caption</h3>
                <h5 class="light grey-text text-lighten-3">HOLA MUNDO</h5>
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
    font-size: 50px;
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
`;
export default Slider;
