import React, { Fragment } from "react";
//IMportamos los componentes de Contact
import Contact1 from "./contact/Contact1";
import TiraRedes from "../item/TiraRedes";
const Contact = () => {
  return (
    <Fragment>
      <TiraRedes />
      <Contact1 />
    </Fragment>
  );
};

export default Contact;
