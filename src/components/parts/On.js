import React, { Fragment, useEffect } from "react";
//Importamos los componentes de este
import On1 from "./on/On1";
import On2 from "./on/On2";
import TiraRedes from "../item/TiraRedes";
import { animateScroll as scroll } from "react-scroll";
import WOW from "wowjs";

const On = () => {
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
      <On1 />
      <On2 />
    </Fragment>
  );
};

export default On;
