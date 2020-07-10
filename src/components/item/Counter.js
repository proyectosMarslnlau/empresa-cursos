import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
const Counter = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2020-07-15") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    if (timeLeft.days < 10) {
      //dos cifras para el segundo
      timeLeft.days = "0" + timeLeft.days;
    }
    if (timeLeft.hours < 10) {
      //dos cifras para el segundo
      timeLeft.hours = "0" + timeLeft.hours;
    }
    if (timeLeft.minutes < 10) {
      //dos cifras para el segundo
      timeLeft.minutes = "0" + timeLeft.minutes;
    }
    if (timeLeft.seconds < 10) {
      //dos cifras para el segundo
      timeLeft.seconds = "0" + timeLeft.seconds;
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

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
        <div className="row"></div>

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
`;
export default Counter;
