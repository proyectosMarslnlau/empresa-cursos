import React, { Fragment } from "react";
import styled from "@emotion/styled";
const On1 = () => {
  return (
    <Fragment>
      <Contenedor className="wow fadeIn" data-wow-duration="2s">
        <div className="container row">
          <div className="col s12 m12 x3 xl3 seccion-1">
            <div className="center-align">
              <img
                src="/sheet_public/img/logo.png"
                alt=""
                className="wow fadeInDown"
                data-wow-duration="3s"
              />
              <p className="titulo wow fadeInLeft" data-wow-duration="3s">
                SOBRE <br />
                CRECÉ
              </p>
            </div>
          </div>
          <div className="col s12 m12 x9 xl9 seccion-2">
            <p className="texto">
              Crecé es un espacio dentro internet que busca compartir valiosa
              información que pueda apoyar vuestras ideas o proyectos. <br />{" "}
              Buscamos información que pueda dar un plus en el desarrollo de sus
              proyectos, por ello, compartimos diferentes cursos que pueden ser
              de su interés (la mayoría es de acceso gratuito).
              <br /> Sabemos lo complicado y extenso que es el camino para que
              ese proyecto empiece a funcionar, vaya que lo es, jamás es
              suficiente para saberlo todo.
              <br /> Pero, justamente vemos que es ese el punto diferencial,
              aunque parezca imposible seguir estudiando, aprendiendo y de a
              poco estás más cerca de aquello que era imposible.
              <br /> ¡Anímate a unirte al hashtag #NuncaParesDeAprender
              #ConPerseverancia #DisfrutaElCamino <br />
              <br />​ Atentamente,
              <br /> Equipo CRECÉ
            </p>
          </div>
        </div>
      </Contenedor>
    </Fragment>
  );
};

const Contenedor = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  .seccion-1 {
    height: 100%;
    background: #0b1629;
    border: #8cda3f solid 2px;
  }
  img {
    margin-top: 20px;
    width: 7vw;
  }
  .titulo {
    color: #8cda3f;
    font-family: "Oswald", sans-serif;
    font-size: 67px;
    line-height: 74px;
    font-weight: 700;
  }
  .texto {
    font-family: "Montserrat", sans-serif;
    color: #fff;
    padding: 30px;
    font-size: 15px;
    margin-right: 100px;
  }
  @media (max-width: 600px) {
    margin-top: 50px;
    margin-bottom: 50px;

    img {
      margin-top: 20px;
      width: 20vw;
    }
    .titulo {
      font-size: 50px;
      line-height: 50px;
      font-weight: 700;
    }
    .texto {
      margin-right: 0px;

      padding: 0px;
    }
  }
  @media (min-width: 601px) and (max-width: 992px) {
    margin-top: 50px;
    margin-bottom: 50px;

    img {
      margin-top: 20px;
      width: 15vw;
    }
    .titulo {
      font-size: 50px;
      line-height: 50px;
      font-weight: 700;
    }
    .texto {
      margin-right: 0px;

      padding: 0px;
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
  }
  @media (min-width: 1201px) {
  }
`;
export default On1;
