import React, { Fragment, useEffect } from "react";
import styled from "@emotion/styled";
import M from "materialize-css";
const Modal = ({ guardarVentanaModal }) => {
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, {});

    var elems1 = document.querySelectorAll(".modal2");
    var instances = M.Modal.init(elems1, {});

    funcionAbrirModal();
  }, []);
  const funcionAbrirModal = () => {
    var elem = document.querySelector("#modal2");
    var instance = M.Modal.getInstance(elem);
    instance.open();

    var elem2 = document.querySelector("#modal1");
    var instance2 = M.Modal.getInstance(elem2);
    instance2.open();
  };
  const funcionCerrarModal = () => {
    var elem3 = document.querySelector("#modal1");
    var instance3 = M.Modal.getInstance(elem3);
    instance3.close();

    var elem4 = document.querySelector("#modal2");
    var instance4 = M.Modal.getInstance(elem4);
    instance4.close();
    guardarVentanaModal(false);
  };
  return (
    <Fragment>
      <Contenedor>
        <button onClick={funcionAbrirModal}>ABRIR</button>
        <div id="modal2" class="modal">
          <div class="modal-content ">
            <div className="center-align titulo-modal">
              Aprovecha y aplica <br />
              el siguiente cupon
            </div>
            <div className="container row">
              <div className="col s4 rebajas">
                <div className="titulo-rebajas center-align">Rebajas</div>
                <div className="titulo-descuento center-align">50% Dto.</div>
              </div>
              <div className="col s4">
                <div className="center-align cupon">031016</div>
                <div className="center-align">
                  <button className="comprar-ahora">Comprar ahora</button>
                </div>
              </div>
              <div className="col s4 center-align">
                <img src="/sheet_public/img/garantia.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div id="modal1" class="modal">
          <div class="modal-content">
            <div className="container row">
              <div className="col s10">
                <div className="cerrar-modal center-align">
                  <span> 50% OFF </span>HASTA EL DOMINGO
                </div>
              </div>
              <div className="col s2 left-align">
                <a onClick={funcionCerrarModal} className="boton-cerrar">
                  X
                </a>
              </div>
            </div>
          </div>
        </div>
      </Contenedor>
    </Fragment>
  );
};
const Contenedor = styled.div`
  #modal1 {
    margin-top: 75vh;
    top: 100%;
    width: 100%;
    display: table;
    background: #0b1629;
    color: #fff;
    border-top: solid 2px #fff;
  }
  #modal2 {
    background: rgba(211, 95, 94, 0.9);

    color: #fff;
  }
  .modal {
    z-index: 2000;
  }
  .modal-overlay {
    position: relative;
    z-index: 20000;
  }
  .titulo-modal {
    color: #f7e114;
    font-family: "Oswald", sans-serif;
    font-size: 65px;
    font-weight: bold;
  }
  .cupon {
    font-family: "Oswald", sans-serif;
    font-size: 40px;
    color: #8cda3f;
    background: #0b1629;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  .comprar-ahora {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    width: 150px;
    border: #8cda3f solid 2px;
    font-weight: 200;
    color: #8cda3f;
    background: #0b1629;
    border-radius: 30px;
    border-color: #8cda3f;
    padding: 15px;
    transition: 0.5s;
    margin-top: 40px;
  }
  .comprar-ahora:hover {
    background: #8cda3f;
    color: #0b1629;
    transition: 0.5s;
  }
  .rebajas {
    margin-top: 20px;
  }
  .titulo-rebajas {
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    width: 150px;
    background: #0b1629;
    border-radius: 10px;
    padding: 5px;
    transition: 0.5s;
  }
  .titulo-rebajas:hover {
    letter-spacing: 0.3em;
    transition: 0.5s;
  }
  .titulo-descuento {
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
    color: #fff;
  }
  img {
    width: 80%;
  }
  .cerrar-modal {
    color: #fff;
    font-family: "Oswald", sans-serif;
    font-size: 36px;
    font-weight: bold;
  }
  .cerrar-modal span {
    color: #ffc940;
    font-family: "Oswald", sans-serif;
    font-size: 36px;
    font-weight: bold;
  }
  .boton-cerrar {
    color: #fff;
    background: #0b1629;
    font-size: 36px;
  }
  .boton-cerrar:hover {
    cursor: pointer;
    cursor: hand;
  }
`;
export default Modal;
