import React, { Fragment } from "react";
//---------Importacion de Navigation ------------------------
import Navigation from "./navigation/Navigation";
// Importamos Materialize
import "materialize-css/dist/css/materialize.min.css";

const App = () => {
  return (
    <Fragment>
      <Navigation />
    </Fragment>
  );
};

export default App;
