import React, { Fragment } from "react";
import styled from "@emotion/styled";
const Footer = () => {
  return (
    <Fragment>
      <Contenedor>
        <div className="container row ">
          <div className="col s2 m2 x2 xl2 left-align">
            <img src="/sheet_public/img/logo.png" alt="" />
          </div>
          <div className="col s10 m10 x8 xl8 center-align texto">
            &copy; 2020 Crece - Hecho orgullosamente en Latam{" "}
            <img
              src="/sheet_public/img/latam.png"
              alt=""
              className="logotipo"
            />
          </div>
          <div className="col s12 m12 x2 xl2 right-align">
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
  .logotipo {
    width: 2vw;
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
  @media (max-width: 600px) {
    img {
      width: 10vw;
    }
    .logotipo {
      width: 7vw;
    }
    i {
      font-size: 1em;
      text-align: center;
      margin-top: 15px;
    }
  }
  @media (min-width: 601px) and (max-width: 992px) {
    i {
      font-size: 1.2em;
      text-align: center;
      margin-top: 20px;
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
  }
  @media (min-width: 1201px) {
  }
`;
export default Footer;
