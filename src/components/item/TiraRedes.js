import React, { Fragment } from "react";
import styled from "@emotion/styled";
const TiraRedes = () => {
  return (
    <Fragment>
      <Contenedor>
        <p className="right-align">
          <a href="https://www.facebook.com/minus.maya/">
            <i className="fa fa-facebook-f"></i>
          </a>
        </p>
        <p className="right-align">
          <a href="https://www.instagram.com/minus.maya/">
            <i className="fa fa-instagram"></i>
          </a>
        </p>
        <p className="right-align">
          <i className="fa fa-twitter"></i>
        </p>
      </Contenedor>
    </Fragment>
  );
};
const Contenedor = styled.div`
  position: fixed;
  margin-top: 30vh;
  right: 0;
  i {
    font-size: 1.5em;
    color: #fff;
    letter-spacing: 20px;
  }
`;
export default TiraRedes;
