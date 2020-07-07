import React, { Fragment } from "react";
import styled from "@emotion/styled";
const Footer = () => {
  return (
    <Fragment>
      <Contenedor>
        <div className="container row ">
          <div className="col s2 left-align  red lighten-4">1</div>
          <div className="col s8 center-align purple lighten-4">1</div>
          <div className="col s2 right-align pink lighten-3">1</div>
        </div>
      </Contenedor>
    </Fragment>
  );
};
const Contenedor = styled.div`
  background: red;
  padding-top: 20px;
  border-bottom: solid #fff 3px;
`;
export default Footer;
