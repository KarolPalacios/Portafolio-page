import cv from "../assets/cv/CV karol palacios.pdf";
import React from 'react';
import photo from '../assets/photo.png';
import { Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="header" id="inicio">
            <Row>
                <Col lg={6}>
                    <div className="profile">
                        <h1>Hola! Soy Karol Palacios</h1>
                        <span>FrontEnd Developer</span>
                        <p>
                            Soy desarrolladora front-end, desarrollo aplicaciones y plataformas web. Constantemente mejoro mis habilidades creando proyectos y asumiendo retos que alimentan mi conocimiento.
                        </p>
                        <div className="cv">
                            <a href={cv} download={cv}>
                                <i className="fa-solid fa-file"></i> Descargar CV
                            </a>
                        </div>
                    </div>
                </Col>
                <Col lg={5}>
                    <img src={photo} alt="" className="photo" />
                </Col>
            </Row>
            <button className="contact-btn">
                <a className="contact-link" href="#contacto">Contactame</a>
            </button>
        </div>
    );
};

export default Home;