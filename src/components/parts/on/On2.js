import React, { Fragment } from "react";
import styled from "@emotion/styled";
const On2 = () => {
  return (
    <Fragment>
      <Contenedor className="wow fadeIn" data-wow-duration="2s">
        <div className="row seccion">
          <div className="col s2 x2 xl2 hide-on-med-and-down">1</div>
          <div className="col s12 m12 x10 xl10">
            <div className="row">
              <div className="col s12 m12 x7 xl7 cuadro-texto">
                <p className="titulo">
                  LA <br />
                  INNOVACIÓN
                </p>
                <p className="texto wow fadeInLeft" data-wow-duration="2s">
                  La innovación consiste en utilizar conocimiento para construir
                  un nuevo camino que lleve a una determinada meta. Cada proceso
                  de innovación es específico para cada caso, y muy
                  probablemente no sirva para abordar otros retos. Es por ello
                  que resulta complicado definir de forma estricta un método
                  para innovar. A veces se dice también que carece de lógica,
                  porque aborda problemas que aún no se han descubierto o crea
                  necesidades. ​ Además la innovación tiene un coste, no es
                  gratis. <br />
                  <br />
                  <span className="hide-on-med-and-down">
                    El coste no sólo es económico, sino también de gestión. Y no
                    resulta sencillo ni barato gestionar algo tan caótico como
                    la innovación, cuyos resultados son imprevisibles. A pesar
                    de esto, el coste de hacer innovación siempre es inferior al
                    coste de no hacerla (en término de costes futuros o
                    ganancias que no se tendrán)
                  </span>
                </p>
              </div>
              <div className="col s12 m12 x5 xl5 cuadro-imagen hide-on-med-and-down">
                <img
                  src="/sheet_public/img/onrecortado.jpg"
                  alt=""
                  className="imagen-grande"
                />
              </div>
            </div>
          </div>
          <div className="col s12 m12 x5 xl5 hide-on-med-and-up show-on-medium-and-down ">
            <img
              src="/sheet_public/img/about.jpg"
              alt=""
              className="imagen-responsive"
            />
          </div>
        </div>
      </Contenedor>
    </Fragment>
  );
};
const Contenedor = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  .seccion {
    margin-left: 100px;
    margin-right: 100px;
  }
  .cuadro-texto {
    height: 80vh;
    background: #0b1629;
    border: #8cda3f solid 2px;
  }
  .cuadro-imagen {
    position: relative;
  }
  .titulo {
    color: #8cda3f;
    font-family: "Oswald", sans-serif;
    font-size: 40px;
    line-height: 44px;
    font-weight: 700;
    padding-left: 30px;
  }
  .texto {
    font-family: "Montserrat", sans-serif;
    color: #fff;
    padding: 30px;
    font-size: 15px;
    margin-right: 100px;
  }
  .imagen-grande {
    width: 30vw;
    position: absolute;
    top: -60px;
    right: 0;
  }
  @media (max-width: 600px) {
    margin-top: 0px;
    margin-bottom: 0px;
    .seccion {
      margin-left: 10px;
      margin-right: 10px;
    }
    .cuadro-texto {
      height: 100vh;
    }
    .titulo {
      font-size: 30px;
      padding-left: 10px;
    }
    .texto {
      padding: 5px;
      font-size: 14px;
      margin-right: 0px;
    }
    .imagen-responsive {
      width: 82vw;
    }
  }
  @media (min-width: 601px) and (max-width: 992px) {
    .seccion {
      margin-left: 10px;
      margin-right: 10px;
    }
    .cuadro-texto {
      height: 100vh;
    }
    .titulo {
      font-size: 30px;
      padding-left: 10px;
    }
    .texto {
      padding: 5px;
      font-size: 14px;
      margin-right: 0px;
    }
    .imagen-responsive {
      width: 90vw;
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
  }
  @media (min-width: 1201px) {
  }
`;
export default On2;
