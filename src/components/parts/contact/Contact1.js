import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";

const Contact1 = () => {
  const [datosFormulario, guardarDatosFormulario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
  });

  const funcionCargarDatos = (e) => {
    guardarDatosFormulario({
      ...datosFormulario,
      [e.target.name]: e.target.value,
    });
  };
  const { nombre, apellido, email, mensaje } = datosFormulario;

  const funcionFormulario = (e) => {
    e.preventDefault();
    if (nombre === "" || apellido === "" || email === "" || mensaje === "") {
      alert("Faltan algunos datos");
      return;
    } else {
      peticionDatos(datosFormulario);
    }
  };

  const peticionDatos = async (valor) => {
    const urlContactos = "http://localhost:5000/productos";

    try {
      const peticion = await axios.post(urlContactos, {
        contact: valor,
      });
      console.log(peticion);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      <Contenedor className="wow fadeIn" data-wow-duration="2s">
        <div className="container row">
          <div className="col s12 m12 x4 xl4 seccion-titulo">
            <p
              className="titulo center-align wow fadeInUp"
              data-wow-duration="3s"
            >
              CONTÁCTANOS
            </p>
          </div>
          <div className="col s12 m12 x8 xl8 seccion-formulario">
            <p className="instrucciones">
              Llena el formulario debajo para <br /> contactarnos para cualquier
              requerimiento especial, pregunta o dudas.
            </p>
            <div classNam="row">
              <form onSubmit={funcionFormulario}>
                <div className="col s6">
                  <div class="input-field">
                    <input
                      id="first-name"
                      type="text"
                      name="nombre"
                      onChange={funcionCargarDatos}
                    />
                    <label for="first-name">Nombre</label>
                  </div>
                  <div class="input-field">
                    <input
                      id="email-user"
                      type="text"
                      name="email"
                      onChange={funcionCargarDatos}
                    />
                    <label for="email-user">Email *</label>
                  </div>
                </div>
                <div className="col s6">
                  <div className="input-field">
                    <input
                      id="second-name"
                      type="text"
                      name="apellido"
                      onChange={funcionCargarDatos}
                    />
                    <label for="second-name">Apellido</label>
                  </div>
                </div>
                <div className="col s12">
                  <textarea
                    id="textarea1"
                    className="materialize-textarea col s12"
                    name="mensaje"
                    onChange={funcionCargarDatos}
                  ></textarea>
                  <label htmlFor="textarea1">Mensaje</label>
                  <br />
                  <button type="submit">ENVIAR</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Contenedor>
    </Fragment>
  );
};
const Contenedor = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  .seccion-titulo {
    height: 40vh;
    background: #fff;
    background: #0b1629;
    border: #8cda3f solid 2px;
  }
  .seccion-formulario {
    color: #fff;
    padding-left: 80px;
  }
  .titulo {
    color: #8cda3f;
    font-family: "Oswald", sans-serif;
    font-size: 40px;
    line-height: 44px;
    font-weight: 700;
  }
  .instrucciones {
    color: #fff;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    font-size: 15px;
  }
  button {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    width: 250px;
    border: #8cda3f solid 2px;
    font-weight: 200;
    color: #8cda3f;
    background: #0b1629;
    border-radius: 30px;
    border-color: #8cda3f;
    padding: 20px;
    transition: 0.5s;
    margin-top: 40px;
  }
  button:hover {
    background: #8cda3f;
    color: #0b1629;
    transition: 0.5s;
  }
  input {
    color: #8cda3f;
  }
  /* label focus color */
  .input-field input[type="text"] + label {
    color: #8cda3f;
    background: #0b1629;
  }
  .input-field input[type="text"]:focus + label {
    color: #8cda3f;
    background: #0b1629;
  }
  /* label underline focus color */
  .input-field input[type="text"]:focus {
    border-bottom: 1px solid #8cda3f;
    box-shadow: 0 1px 0 0 #8cda3f;
    color: #8cda3f;
  }
  label {
    font-size: 1em;
  }
  textarea {
    color: #8cda3f;
  }
  textarea.materialize-textarea + label {
    color: #8cda3f;
  }
  textarea.materialize-textarea:focus {
    color: #8cda3f;
  }
  textarea.materialize-textarea:focus + label {
    color: #8cda3f;
  }
  textarea.materialize-textarea:focus:not([readonly]) {
    border-bottom: 1px solid #8cda3f;
    box-shadow: 0 1px 0 0 #8cda3f;
  }
  @media (max-width: 600px) {
    margin-top: 50px;
    margin-bottom: 50px;
    .seccion-formulario {
      padding-left: 0px;
    }
  }
  @media (min-width: 601px) and (max-width: 992px) {
  }
  @media (min-width: 993px) and (max-width: 1200px) {
  }
  @media (min-width: 1201px) {
  }
`;
export default Contact1;
