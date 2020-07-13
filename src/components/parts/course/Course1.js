import React, { Fragment } from "react";
//Importamos el Slider
import Slider from "../../item/Slider";
import styled from "@emotion/styled";
const Course1 = ({ imagenes, datos }) => {
  return (
    <Fragment>
      <Contenedor className="wow fadeIn" data-wow-duration="2s">
        <Slider imagenes={imagenes} datos={datos} />
      </Contenedor>
    </Fragment>
  );
};
const Contenedor = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;
export default Course1;
