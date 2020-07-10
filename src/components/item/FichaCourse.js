import React, { Fragment } from "react";
import styled from "@emotion/styled";
import Counter from "./Counter";
const FichaCourse = () => {
  return (
    <Fragment>
      <Contenedor>
        <p>EDUCANINO</p>
        <p>
          INSCRIPCIONES <br />
          ABIERTAS
        </p>
        <p>
          Hasta el proximo <br />
          Domingo 9:00
        </p>
        <p>
          <Counter />
        </p>
      </Contenedor>
    </Fragment>
  );
};

const Contenedor = styled.div`
  background: rgba(1, 1, 1, 0.1);
`;
export default FichaCourse;
