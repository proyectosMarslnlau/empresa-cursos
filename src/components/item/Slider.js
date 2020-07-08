import React, { Fragment, useEffect } from "react";
//Importamos M de materialize
import M from "materialize-css";
import styled from "@emotion/styled";
const Slider = () => {
  useEffect(() => {
    var sliderElems = document.querySelectorAll(".slider");
    var sliderInstance = M.Slider.init(sliderElems, {
      indicators: false,
      duration: 500,
    });
  }, []);

  const moveNextCarousel = (e) => {
    e.preventDefault();
    console.log("hola mundo");
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
          <ul class="slides">
            <li>
              <img src="https://lorempixel.com/580/250/nature/1" />
              <div class="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 class="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
            <li>
              <img src="https://lorempixel.com/580/250/nature/2" />
              <div class="caption left-align">
                <h3>Left Aligned Caption</h3>
                <h5 class="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
            <li>
              <img src="https://lorempixel.com/580/250/nature/3" />
              <div class="caption right-align">
                <h3>Right Aligned Caption</h3>
                <h5 class="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
            <li>
              <img src="https://lorempixel.com/580/250/nature/4" />
              <div class="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 class="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
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
    height: 70vh;
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
`;
export default Slider;
