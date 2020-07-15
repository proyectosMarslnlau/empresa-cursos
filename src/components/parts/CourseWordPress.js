import React, { Fragment, useEffect, useState } from 'react';
import Course1 from './course/Course1';
import Course2 from './course/Course2';
import Course3 from './course/Course3';
import TiraRedes from '../item/TiraRedes';

import Modal from '../item/Modal';
import { animateScroll as scroll } from 'react-scroll';

import WOW from 'wowjs';
import axios from 'axios';

const CourseWordPress = () => {
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
		peticionWordpress();
	}, []);
	//Variables contantes
	const curso = {
		resumenCurso: `¿Aún no tienes tu página web para tu negocio?
    Estamos en 2020 y debido a la pandemia, absolutamente todos los negocios se están digitalizando, es necesario, porque los negocios tienen que seguir adelante no podemos parar.
    Además de contar con una página en Facebook, es indispensable tener una página web donde nos presentemos, donde expongamos nuestros productos y nos demos a conocer. Un negocio sin página web tiende a no generar esa confianza con nuestros clientes.
    Ahora quizás estés pensando en contratar un desarrollador para tu página pero muchas veces suele salir algo caro, créeme tener una página bonita, sencilla y completa no es tan caro y tú mismo podrías darle actualizaciones o modificaciones cuantas veces quieras. 
    `,
		informacionProducto: `Con este programa aprenderás a crear tu propia página web con WordPress, la plataforma más ampliamente usada para tu negocio o proyecto personal de manera rápida y sencilla.`,
		politicaReembolso: `Prueba el programa por 7 días y si no estás 100% satisfecho, te reembolsaremos tu dinero.`,
		solicitaDescuento: `Píde por messenger tu CUPÓN del 50% de descuento. `
	};
	const imagenes = {
		imagen1: `/sheet_public/img/wordpress/01 wordpress 101.jpg`,
		imagen2: `/sheet_public/img/wordpress/02 wordpress 101.jpg`
	};

	const peticionWordpress = async () => {
		const urlWordpress = `https://crece-pronto.com/api/cursos/WORDPRESS 101`;
		try {
			const peticion = await axios.get(urlWordpress);
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

export default CourseWordPress;
