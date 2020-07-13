import React, { Fragment, useEffect, useState } from 'react';
import Course1 from './course/Course1';
import Course2 from './course/Course2';
import Course3 from './course/Course3';
import TiraRedes from '../item/TiraRedes';

import Modal from '../item/Modal';
import { animateScroll as scroll } from 'react-scroll';

import WOW from 'wowjs';
import axios from 'axios';

const CourseWhatsapp = () => {
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
		peticionWhatsapp();
	}, []);
	//Variables contantes
	const curso = {
		resumenCurso: `Sabías que si compartes tus estados en whatsapp y lo ven tus propios clientes, esto podría cambiar la imagen de tu negocio en su totalidad, y muy probablemente de manera negativa.
    Estas en ese punto entre subir una imagen a tu perfil de whatsapp pero debes mantener uno formal por tu negocio. Entonces es programa puede ayudarte a utilizar whatsapp business, con el cual puedes desde darle un perfil más profesional a la cuenta de whatsapp de tu negocio, administrar tus clientes o proveedores de manera independiente de tu whatsapp personal. 
    `,
		informacionProducto: `Con este programa aprenderás a tener una cuenta en whatsapp business, darle un perfil de negocio, añadir tu dirección o tu catálogo en tu whatsapp para que todos tus clientes puedan llegar directamente.`,
		politicaReembolso: `Prueba el programa por 7 días y si no estás 100% satisfecho, te reembolsaremos tu dinero.`,
		solicitaDescuento: `Píde por messenger tu CUPÓN del 50% de descuento. `
	};
	const imagenes = {
		imagen1: `/sheet_public/img/whatsapp/02 whatsapp.jpg`,
		imagen2: `/sheet_public/img/whatsapp/02 whatsapp.jpg`
	};

	const peticionWhatsapp = async () => {
		const urlWhatsapp = `http://crece-pronto.com:2600/api/cursos/WHATSAPP BUSINESS`;
		try {
			const peticion = await axios.get(urlWhatsapp);
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

export default CourseWhatsapp;
