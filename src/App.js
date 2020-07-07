import React, { Fragment } from "react";
//---------Importacion de Navigation ------------------------
import Navigation from "./navigation/Navigation";
// Importamos Materialize
import "materialize-css/dist/css/materialize.min.css";
//Importamos JQUERY

const App = () => {
  return (
    <Fragment>
      <Navigation />
    </Fragment>
  );
};

export default App;
