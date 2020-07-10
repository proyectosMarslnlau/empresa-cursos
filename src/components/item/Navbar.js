import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Fragment>
      <Contenedor>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo">
                <img src="/sheet_public/img/logo.png" alt="" />
              </a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/on">Sobre</Link>
                </li>
                <li>
                  <a class="dropdown-trigger" href="#!" data-target="dropdown1">
                    Cursos double double
                    <i class="material-icons right">arrow_drop_down</i>
                  </a>
                </li>
                <li>
                  <Link to="/contact">Contacto</Link>
                </li>
              </ul>
            </div>
          </nav>

          <ul className="sidenav" id="mobile-demo">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">Javascript</a>
            </li>
            <li>
              <a href="mobile.html">Mobile</a>
            </li>
          </ul>

          <ul id="dropdown1" class="dropdown-content">
            <li>
              <Link to="course-educanino">Educanino</Link>
            </li>
            <li>
              <a href="#!">Wordpress 101</a>
            </li>
            <li>
              <a href="#!">Photoshop Principiantes</a>
            </li>
            <li>
              <a href="#!">Canva para Facebook</a>
            </li>
            <li>
              <a href="#!">Whatsapp Business</a>
            </li>
          </ul>
        </div>
      </Contenedor>
    </Fragment>
  );
};

const Contenedor = styled.div`
  border-bottom: double #fff 4px;
  nav {
    height: 15vh;
    background: #0b1629;
    padding: 30px 100px 30px 100px;
    font-family: "Montserrat", sans-serif;
  }
  img {
    width: 4vw;
  }
  .dropdown-content li {
    background: #0b1629;
  }
  .dropdown-content li a {
    color: #8cda3f;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    text-align: right;
  }
`;
export default Navbar;
