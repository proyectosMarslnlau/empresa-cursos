import React, { Fragment } from "react";
//Importamos los componentes de este
import On1 from "./on/On1";
import On2 from "./on/On2";
import TiraRedes from "../item/TiraRedes";
const On = () => {
  return (
    <Fragment>
      <TiraRedes />
      <On1 />
      <On2 />
    </Fragment>
  );
};

export default On;
