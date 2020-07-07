import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//--------------------------------------------------------------------------
import styled from "@emotion/styled";
//--------------------Importamos los componentes --------------------------------
import Start from "../components/parts/Start";
import On from "../components/parts/On";
import Course from "../components/parts/Course";
import Contact from "../components/parts/Contact";
//---------------------- Error ------------------------------------------------
import ErrorFile from "../components/error/ErrorFile";
//--------------------------------------------------------------------------------
//Importamos M de materialize
import M from "materialize-css";
//Importamos JQUERY
import $ from "jquery";
//----------------------------------------------------------------------------
import Navbar from "../components/item/Navbar";
import Footer from "../components/item/Footer";
import ButtonSocial from "../components/item/ButtonSocial";
//---------------------------------------------------
const Navigation = () => {
  useEffect(() => {
    //Iniciacion del modo responsive del NAV
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {});
    //----------------------------------------------------------------------
    //Despliegue de opciones de materialize
    var elems = document.querySelectorAll(".dropdown-trigger");
    var instances = M.Dropdown.init(elems, {
      coverTrigger: false,
      hover: true,
    });
    //----------------------------------------------------------------------
    //Despliegue del boton de redes sociales
    var elems = document.querySelectorAll(".fixed-action-btn");
    var instances = M.FloatingActionButton.init(elems, {});
    //----------------------------------------------------------------------
    //Pushin clava un objeto estatico en la pagina
    var elems = document.querySelectorAll(".pushpin");
    var instances = M.Pushpin.init(elems, {});
  }, []);

  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/start" component={Start} />
            <Route exact path="/on" component={On} />
            <Route exact path="/course" component={Course} />
            <Route exact path="/contact" component={Contact} />
            <Route component={ErrorFile} />
          </Switch>
        </BrowserRouter>
      </main>
      {/* 
      <Fragment>
        <div className="row">
          <Redes className="pushpin right-align">lENNY LAURA VALENCIA</Redes>
        </div>
      </Fragment>*/}

      {/* <ButtonSocial /> */}
      <Fragment>
        <Footer />
      </Fragment>
    </Fragment>
  );
};
const Redes = styled.h1`
  margin-top: 50vh;
  background: red;
`;
export default Navigation;
