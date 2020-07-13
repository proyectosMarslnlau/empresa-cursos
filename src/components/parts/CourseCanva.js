import React, { Fragment, useEffect, useState } from "react";
import Course1 from "./course/Course1";
import Course2 from "./course/Course2";
import Course3 from "./course/Course3";
import TiraRedes from "../item/TiraRedes";

import Modal from "../item/Modal";
import { animateScroll as scroll } from "react-scroll";

import WOW from "wowjs";
import axios from "axios";

const CourseCanva = () => {
  const [ventanaModal, guardarVentanaModal] = useState(false);
  //State de datos de CURSO
  const [datos, guardarDatos] = useState({});
  useEffect(() => {
    //Inicializamos el Scroll Automatico para los cambios de Pagina
    const scrollType = {
      duration: 1000,
      delay: 1000,
    };
    scroll.scrollToTop(scrollType);
    //Inicializamos la libreria de WOW que permite las animaciones con ayuda de SCROLL
    new WOW.WOW({
      live: false,
    }).init();
    peticionCanva();
  }, []);
  //Variables contantes
  const curso = {
    resumenCurso: `¿Por más que intentas tus diseños no son lo que buscas?
    Sí lo entiendo, estamos horas y horas frente al Photoshop, revisando cómo hacen publicidad la competencia, pero nada, siempre o bien tenemos un arte frío y que nos dice que algo hace falta.
    Pues gracias a este programa podemos aprender a utilizar una valiosa plataforma que nos llenará de ideas, no solo eso, sino que podremos realizar nuestros diseños directamente ahí en CANVA, para luego poder exportarlos como imagen y publicar en Facebook.
    Créeme, tus diseños ahora sí podrán ser diferentes y captar la atención de tu público..
    `,
    informacionProducto: `Con este programa aprenderás a dominar Canva de una manera sencilla, más fácil de aprender que otros costosos software de diseño gráfico. Puedes lograr excelentes resultados, y dado que Canva es de uso gratuito, puedes ahorrar enormes cantidades de dinero en subcontratar o comprar software.`,
    politicaReembolso: `Prueba el programa por 7 días y si no estás 100% satisfecho, te reembolsaremos tu dinero.`,
    solicitaDescuento: `Píde por messenger tu CUPÓN del 50% de descuento. `,
  };
  const imagenes = {
    imagen1: `/sheet_public/img/canva/01 canva.jpg`,
    imagen2: `/sheet_public/img/canva/01 canva.jpg`,
  };
  const peticionCanva = async () => {
    const urlCanva = `http://localhost:5000/dates?titulo=CANVA PARA FACEBOOK`;
    try {
      const peticion = await axios.get(urlCanva);
      const datos = peticion.data[0];
      guardarDatos(datos);
      if (datos.promocion === "si") {
        setTimeout(() => {
          guardarVentanaModal(true);
        }, 5000);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      {ventanaModal ? (
        <Modal guardarVentanaModal={guardarVentanaModal} datos={datos} />
      ) : null}
      <TiraRedes />
      <Course1 imagenes={imagenes} datos={datos} />
      <Course2 curso={curso} />
      <Course3 datos={datos} />
    </Fragment>
  );
};

export default CourseCanva;
