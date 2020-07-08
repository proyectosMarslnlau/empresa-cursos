import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//--------------------------------------------------------------------------

//--------------------Importamos los componentes --------------------------------
import Start from "../components/parts/Start";
import On from "../components/parts/On";
import CourseEducanino from "../components/parts/CourseEducanino";
import Contact from "../components/parts/Contact";
//---------------------- Error ------------------------------------------------
import ErrorFile from "../components/error/ErrorFile";
//--------------------------------------------------------------------------------
//Importamos M de materialize
import M from "materialize-css";

//----------------------------------------------------------------------------
import Navbar from "../components/item/Navbar";
import Footer from "../components/item/Footer";
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
      hover: false,
    });
    //----------------------------------------------------------------------
    //Despliegue del boton de redes sociales
    var elems = document.querySelectorAll(".fixed-action-btn");
    var instances = M.FloatingActionButton.init(elems, {});
    //----------------------------------------------------------------------
  }, []);

  return (
    <Fragment>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/start" component={Start} />
            <Route exact path="/on" component={On} />
            <Route exact path="/course-educanino" component={CourseEducanino} />
            <Route exact path="/contact" component={Contact} />
            <Route component={ErrorFile} />
          </Switch>
        </main>
      </BrowserRouter>
      <Fragment>
        <Footer />
      </Fragment>
    </Fragment>
  );
};

export default Navigation;
