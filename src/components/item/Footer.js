import React, { Fragment } from "react";
import styled from "@emotion/styled";
const Footer = () => {
  return (
    <Fragment>
      <Contenedor>
        <div className="container row ">
          <div className="col s2 left-align">
            <img src="/sheet_public/img/logo.png" alt="" />
          </div>
          <div className="col s8 center-align texto">
            &copy; 2020 Crece - Hecho orgullosamente en Latam
          </div>
          <div className="col s2 right-align">
            <a href="https://www.facebook.com/minus.maya/">
              <i className="fa fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/minus.maya/">
              <i className="fa fa-instagram"></i>
            </a>
            <i className="fa fa-twitter"></i>
          </div>
        </div>
      </Contenedor>
    </Fragment>
  );
};
const Contenedor = styled.div`
  background: #0b1629;
  padding-top: 20px;
  border-bottom: solid #8cda3f 3px;
  border-top: solid #8cda3f 3px;
  img {
    width: 3vw;
  }
  .texto {
    font-family: "Montserrat", sans-serif;
    color: #8cda3f;
  }
  i {
    font-size: 1.5em;
    color: #fff;
    letter-spacing: 20px;
  }
`;
export default Footer;
