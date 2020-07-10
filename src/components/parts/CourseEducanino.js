import React, { Fragment, useEffect, useState } from "react";
import Course1 from "./course/Course1";
import Course2 from "./course/Course2";
import Course3 from "./course/Course3";
import TiraRedes from "../item/TiraRedes";

import Modal from "../item/Modal";

const CourseEducanino = () => {
  const [ventanaModal, guardarVentanaModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      guardarVentanaModal(true);
    }, 5000);
  }, []);
  return (
    <Fragment>
      {ventanaModal ? (
        <Modal guardarVentanaModal={guardarVentanaModal} />
      ) : null}
      <TiraRedes />
      <Course1 />
      <Course2 />
      <Course3 />
    </Fragment>
  );
};

export default CourseEducanino;
