import React, { Fragment, useEffect, useState } from 'react';
import Course1 from './course/Course1';
import Course2 from './course/Course2';
import Course3 from './course/Course3';
import TiraRedes from '../item/TiraRedes';

import Modal from '../item/Modal';
import { animateScroll as scroll } from 'react-scroll';

import WOW from 'wowjs';
import axios from 'axios';

const CourseEducanino = () => {
	//State para poder abrir el MODAL
	const [ ventanaModal, guardarVentanaModal ] = useState(false);
	//State de datos de CURSO
	const [ datos, guardarDatos ] = useState({});
	//Inicializamos el use Effect para inicializar el proyecto
	useEffect(() => {
		//Inicializamos el Scroll Automatico para los cambios de Pagina
		const scrollType = {
			duration: 1000,
			delay: 1000
		};
		scroll.scrollToTop(scrollType);
		//Inicializamos la libreria de WOW que permite las animaciones con ayuda de SCROLL
		new WOW.WOW({
			live: false
		}).init();
		peticionEducanino();
	}, []);
	//Variables contantes
	const curso = {
		resumenCurso: `Si eres como yo y estás loco por tu fiel amigo. Una mirada a su dulce cara y tu corazón se derrite como la mantequilla.
    Siempre has pensado en tus amigos caninos como miembros de tu familia. Les das mucho amor y afecto, pero no les pasó que alguna vez nos hacen renegar por alguna traverusa o como cuando abrimos la puerta y salen corriendo sin control ¿a quién no?
    Es por ello, que con Educanino tenemos la oportunidad de saber cuáles son las técnicas para educar y entrenar a nuestros queridos peludos.
    `,
		informacionProducto: `Lenny Educanino es un programa completo para educar y entrenar a nuestros queridos amigos peludos.
    Cuenta con más de 100 técnicas supér sencillas de seguir sin afectar esa alegría que nos regalan estos amiguitos.`,
		politicaReembolso: `Prueba el programa por 7 días y si no estás 100% satisfecho, te reembolsaremos tu dinero.`,
		solicitaDescuento: `Píde por messenger tu CUPÓN del 50% de descuento.`
	};
	const imagenes = {
		imagen1: `/sheet_public/img/educanino/01 educanino.jpg`,
		imagen2: `/sheet_public/img/educanino/02 educanino.jpg`
	};

	const peticionEducanino = async () => {
		const urlEducanino = `https://crece-pronto.com/api/cursos/EDUCANINO`;
		try {
			const peticion = await axios.get(urlEducanino);
			const datos = peticion.data[0];
			guardarDatos(datos);
			if (datos.promocion === 'si') {
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
			{ventanaModal ? <Modal guardarVentanaModal={guardarVentanaModal} datos={datos} /> : null}
			<TiraRedes />
			<Course1 imagenes={imagenes} datos={datos} />
			<Course2 curso={curso} />
			<Course3 datos={datos} />
		</Fragment>
	);
};

export default CourseEducanino;
