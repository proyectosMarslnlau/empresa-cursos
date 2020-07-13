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
                    &nbsp; &nbsp; &nbsp; Cursos &nbsp; &nbsp; &nbsp;
                    <i class="material-icons right">arrow_drop_down</i>
                  </a>
                </li>
                <li>
                  <Link to="/contact">Contacto</Link>
                </li>
              </ul>
            </div>
          </nav>

          <ul id="dropdown1" class="dropdown-content">
            <li>
              <Link to="course-educanino" className="sidenav-close">
                Educanino
              </Link>
            </li>
            <li>
              <Link to="course-wordpress" className="sidenav-close">
                Wordpress 101
              </Link>
            </li>
            <li>
              <Link to="course-photoshop" className="sidenav-close">
                Photoshop Principiantes
              </Link>
            </li>
            <li>
              <Link to="course-canva" className="sidenav-close">
                Canva para Facebook
              </Link>
            </li>
            <li>
              <Link to="course-whatsapp" className="sidenav-close">
                Whatsapp Business
              </Link>
            </li>
          </ul>
          <ul id="dropdown2" class="dropdown-content">
            <li>
              <Link to="course-educanino" className="sidenav-close">
                Educanino
              </Link>
            </li>
            <li>
              <Link to="course-wordpress" className="sidenav-close">
                Wordpress 101
              </Link>
            </li>
            <li>
              <Link to="course-photoshop" className="sidenav-close">
                Photoshop Principiantes
              </Link>
            </li>
            <li>
              <Link to="course-canva" className="sidenav-close">
                Canva para Facebook
              </Link>
            </li>
            <li>
              <Link to="course-whatsapp" className="sidenav-close">
                Whatsapp Business
              </Link>
            </li>
          </ul>
        </div>
        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to="/" className="sidenav-close">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/on" className="sidenav-close">
              Sobre
            </Link>
          </li>
          <li>
            <a className="dropdown-trigger" href="#!" data-target="dropdown2">
              Cursos
              <i className="material-icons right icono-responsive">
                arrow_drop_down
              </i>
            </a>
          </li>
          <li>
            <Link to="contact" className="sidenav-close">
              Contacto
            </Link>
          </li>
        </ul>
      </Contenedor>
    </Fragment>
  );
};

const Contenedor = styled.div`
  border-bottom: double #fff 4px;
  nav {
    height: 15vh;
    background: #0b1629;
    padding: 30px 180px 30px 180px;
    font-family: "Montserrat", sans-serif;
  }
  nav ul li a {
    font-size: 16px;
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
  .sidenav {
    background: #0b1629;
  }
  .sidenav li a {
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
  }
  ul li a .icono-responsive {
    color: #fff;
  }

  @media (max-width: 560px) {
    nav {
      height: 15vh;
      padding: 20px 0 0 0;
    }
    nav div a img {
      margin-top: 30px;
    }
    img {
      width: 20%;
      margin-left: 45%;
    }
  }
  @media (min-width: 561px) and (max-width: 760px) {
    nav {
      height: 25vh;
      padding: 20px 0 0 0;
      background: red;
    }
    nav div a img {
      margin-top: 30px;
    }
    img {
      width: 10%;
      margin-left: 45%;
    }
  }
  @media (min-width: 761px) and (max-width: 992px) {
    nav {
      height: 10vh;
      padding: 20px 0 0 0;
    }
    nav div a img {
      margin-top: 30px;
    }
    img {
      width: 10%;
      margin-left: 45%;
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
  }
  @media (min-width: 1201px) {
  }
`;
export default Navbar;
