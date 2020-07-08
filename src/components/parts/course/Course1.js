import React, { Fragment } from "react";
//Importamos el Slider
import Slider from "../../item/Slider";
import styled from "@emotion/styled";
const Course1 = () => {
  return (
    <Fragment>
      <Contenedor>
        <Slider />
      </Contenedor>
    </Fragment>
  );
};
const Contenedor = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;
export default Course1;
