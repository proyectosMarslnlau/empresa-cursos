import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

const Counter = ({ titulo }) => {
	const [ time, guardarTime ] = useState('');

	const calculateTimeLeft = () => {
		const difference = +new Date(`${time}`) - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60)
			};
		}
		if (isNaN(difference)) {
			timeLeft = {
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0
			};
		}
		if (timeLeft.days < 10) {
			//dos cifras para el segundo
			timeLeft.days = '0' + timeLeft.days;
		}
		if (timeLeft.hours < 10) {
			//dos cifras para el segundo
			timeLeft.hours = '0' + timeLeft.hours;
		}
		if (timeLeft.minutes < 10) {
			//dos cifras para el segundo
			timeLeft.minutes = '0' + timeLeft.minutes;
		}
		if (timeLeft.seconds < 10) {
			//dos cifras para el segundo
			timeLeft.seconds = '0' + timeLeft.seconds;
		}
		return timeLeft;
	};
	const [ timeLeft, setTimeLeft ] = useState(calculateTimeLeft());

	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
	});

	useEffect(
		() => {
			peticionCourse();
		},
		[ titulo ]
	);

	const peticionCourse = async () => {
		const url = `https://crece-pronto.com/api/cursos/${titulo}`;

		try {
			const peticion = await axios.get(url);
			const datos = peticion.data[0].tiempo;
			guardarTime(datos);
		} catch (error) {
			console.log(error);
		}
	};
	//-------------------------------------------
	return (
		<Contenedor>
			<div className="container row">
				<div className="col s3 center-align">
					<span className="tipo">{timeLeft.days}</span>
				</div>
				<div className="col s3 center-align">
					<span className="tipo">{timeLeft.hours}</span>
				</div>
				<div className="col s3 center-align">
					<span className="tipo">{timeLeft.minutes}</span>
				</div>
				<div className="col s3 center-align">
					<span className="tipo">{timeLeft.seconds}</span>
				</div>
				<div className="row" />

				<div className="col s3 center-align white">
					<span className="titulo">Dias</span>
				</div>
				<div className="col s3 center-align white">
					<span className="titulo">Horas</span>
				</div>
				<div className="col s3 center-align white">
					<span className="titulo">Minutos</span>
				</div>
				<div className="col s3 center-align white">
					<span className="titulo">Segundos</span>
				</div>
			</div>
		</Contenedor>
	);
};
const Contenedor = styled.div`
	p {
		color: #fff;
	}
	.tipo {
		font-family: "Montserrat", sans-serif;
		font-size: 27px;
		font-weight: 400;
		padding: 10px;
		border-radius: 5px;
		color: #000;
		background: #fff;
	}

	.titulo {
		font-family: "Montserrat", sans-serif;
		font-size: 12px;
		font-weight: bold;
		color: #000;
	}
	@media (max-width: 600px) {
		.tipo {
			font-size: 20px;
		}
		.titulo {
			font-size: 9px;
		}
	}
	@media (min-width: 601px) and (max-width: 992px) {
	}
	@media (min-width: 993px) and (max-width: 1200px) {
	}
	@media (min-width: 1201px) {
	}
`;
export default Counter;
