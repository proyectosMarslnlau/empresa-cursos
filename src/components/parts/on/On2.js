import React, { Fragment } from "react";
import styled from "@emotion/styled";
const On2 = () => {
  return (
    <Fragment>
      <Contenedor>
        <div className="row seccion">
          <div className="col s2">1</div>
          <div className="col s10 ">
            <div className="row">
              <div className="col s7 cuadro-texto">
                <p className="titulo">
                  LA <br />
                  INNOVACION
                </p>
                <p className="texto">
                  La innovación consiste en utilizar conocimiento para construir
                  un nuevo camino que lleve a una determinada meta. Cada proceso
                  de innovación es específico para cada caso, y muy
                  probablemente no sirva para abordar otros retos. Es por ello
                  que resulta complicado definir de forma estricta un método
                  para innovar. A veces se dice también que carece de lógica,
                  porque aborda problemas que aún no se han descubierto o crea
                  necesidades. ​ Además la innovación tiene un coste, no es
                  gratis. <br />
                  <br /> El coste no sólo es económico, sino también de gestión.
                  Y no resulta sencillo ni barato gestionar algo tan caótico
                  como la innovación, cuyos resultados son imprevisibles. A
                  pesar de esto, el coste de hacer innovación siempre es
                  inferior al coste de no hacerla (en término de costes futuros
                  o ganancias que no se tendrán).
                </p>
              </div>
              <div className="col s5 cuadro-imagen">
                <img src="https://picsum.photos/400/600" alt="" />
              </div>
            </div>
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
  img {
    width: 30vw;
    position: absolute;
    top: -60px;
    right: 0;
  }
`;
export default On2;
