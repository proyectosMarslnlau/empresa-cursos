import React, { Fragment } from "react";
//--------------------------------------------------
//Importar sus componentes
//---------------------------------------------------------
import Start1 from "./start/Start1";
import Start2 from "./start/Start2";
import Start3 from "./start/Start3";
import TiraRedes from "../item/TiraRedes";
const Start = () => {
  return (
    <Fragment>
      <TiraRedes />
      <Start1 />
      <Start2 />
      <Start3 />
    </Fragment>
  );
};

export default Start;
