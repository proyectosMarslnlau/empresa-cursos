import React, { Fragment, useEffect, useState } from 'react';
import Course1 from './course/Course1';
import Course2 from './course/Course2';
import Course3 from './course/Course3';
import TiraRedes from '../item/TiraRedes';

import Modal from '../item/Modal';
import { animateScroll as scroll } from 'react-scroll';

import WOW from 'wowjs';
import axios from 'axios';

const CoursePhotoShop = () => {
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
		peticionPhotoshop();
	}, []);
	//Variables contantes
	const curso = {
		resumenCurso: `¿Aún editas tus imágenes en paint o word?
    Todos hemos oído o sabemos qué es Photoshop y para qué sirve, pero debemos admitir que ni bien ingresamos tenemos una interfaz con muchos controles y botones y no sabes por dónde empezar.
    Si a ti te gusta tomar fotografías con el teléfono o te gustaría poder hacer tus propios diseños para tus trabajos o proyectos, este es el programa adecuado, porque te inicias con Photoshop desde lo básico, paso a paso, desde entendiendo la interfaz hasta retoques de fotografías.   
    ¡Aprende el software de diseño más usado en el mundo! 
    `,
		informacionProducto: `Este curso está orientado a personas que nunca tocaron Adobe Photoshop, descubre paso a paso todas las herramientas y atajos para aplicarlos en tus propios proyectos.`,
		politicaReembolso: `Prueba el programa por 7 días y si no estás 100% satisfecho, te reembolsaremos tu dinero.`,
		solicitaDescuento: `Píde por messenger tu CUPÓN del 50% de descuento. `
	};
	const imagenes = {
		imagen1: `/sheet_public/img/photoshop/01 photoshop.jpg`,
		imagen2: `/sheet_public/img/photoshop/02 photoshop.jpg`
	};
	const peticionPhotoshop = async () => {
		const urlPhotoshop = `https://crece-pronto.com/api/cursos/PHOTOSHOP PRINCIPIANTES`;
		try {
			const peticion = await axios.get(urlPhotoshop);
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

export default CoursePhotoShop;
