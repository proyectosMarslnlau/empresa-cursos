import React, { Fragment, useEffect } from "react";
//IMportamos los componentes de Contact
import Contact1 from "./contact/Contact1";
import TiraRedes from "../item/TiraRedes";
import { animateScroll as scroll } from "react-scroll";
import WOW from "wowjs";

const Contact = () => {
  useEffect(() => {
    const scrollType = {
      duration: 700,
      delay: 700,
    };
    scroll.scrollToTop(scrollType);

    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <Fragment>
      <TiraRedes />
      <Contact1 />
    </Fragment>
  );
};

export default Contact;
