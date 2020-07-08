import React, { Fragment } from "react";
import styled from "@emotion/styled";
const Course2 = () => {
  return (
    <Fragment>
      <Contenedor>
        <div className="container">
          <p className="center-align texto-superior">
            Si eres como yo y estás loco por tu fiel amigo. Una mirada a su
            dulce cara y tu corazón se derrite como la mantequilla. Siempre has
            pensado en tus amigos caninos como miembros de tu familia. <br />
            Les das mucho amor y afecto, pero no les pasó que alguna vez nos
            hacen renegar por alguna traverusa o como cuando abrimos la puerta y
            salen corriendo sin control ¿a quién no? Es por ello, que con
            Educanino tenemos la oportunidad de saber cuáles son las técnicas
            para educar y entrenar a nuestros queridos peludos.
          </p>
        </div>
        <div className="container row">
          <div className="col s4 seccion">
            <p className="titulo center-align">INFORMACIÓN DEL PRODUCTO</p>
            <p className="texto">
              Educanino es un programa completo para educar y entrenar a
              nuestros queridos amigos peludos. Cuenta con más de 100 técnicas
              supér sencillas de seguir sin afectar esa alegría que nos regalan
              estos amiguitos.
            </p>
          </div>
          <div className="col s4 seccion">
            <p className="titulo center-align">POLITICA DE REEMBOLSO</p>
            <p className="texto">
              Prueba el programa por 7 días y si no estás 100% satisfecho, te
              reembolsaremos tu dinero.
            </p>
          </div>
          <div className="col s4 seccion">
            <p className="titulo center-align">SOLICITA TU DESCUENTO</p>
            <p className="texto">
              Píde por messenger tu CUPÓN del 50% de descuento.
            </p>
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

    font-size: 15px;
  }
`;
export default Course2;
