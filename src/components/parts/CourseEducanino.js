import React, { Fragment } from "react";
import Course1 from "./course/Course1";
import Course2 from "./course/Course2";
import Course3 from "./course/Course3";
import TiraRedes from "../item/TiraRedes";
const CourseEducanino = () => {
  return (
    <Fragment>
      <TiraRedes />
      <Course1 />
      <Course2 />
      <Course3 />
    </Fragment>
  );
};

export default CourseEducanino;
