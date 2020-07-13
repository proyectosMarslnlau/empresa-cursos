import React, { Fragment, useEffect } from "react";
//--------------------------------------------------
//Importar sus componentes
//---------------------------------------------------------
import Start1 from "./start/Start1";
import Start2 from "./start/Start2";
import Start3 from "./start/Start3";
import TiraRedes from "../item/TiraRedes";
import { animateScroll as scroll } from "react-scroll";
import WOW from "wowjs";

const Start = () => {
  useEffect(() => {
    const scrollType = {
      duration: 1000,
      delay: 1000,
    };
    scroll.scrollToTop(scrollType);

    new WOW.WOW({
      live: false,
    }).init();
  }, []);
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
