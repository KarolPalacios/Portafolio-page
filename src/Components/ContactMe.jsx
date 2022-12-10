import React from 'react';
import { Button, Form } from 'react-bootstrap';

const ContactMe = () => {

    const gitHubProfile = () => location.href = "https://github.com/KarolPalacios"

    const linkedinProfile = () => location.href = "https://www.linkedin.com/in/karol-dayana-palacios-nieva-b06ba9252"


    return (
        <div className="contact" id="contacto">
            <h2>Contacto</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" placeholder="Mensaje" />
                </Form.Group>

                <Button variant="outline-light" type="submit">
                    Enviar
                </Button>
            </Form>
            <div className="social">
                <i className="fa-brands fa-github social-icon github" onClick={gitHubProfile}></i>
                <i className="fa-brands fa-linkedin social-icon linkedin" onClick={linkedinProfile}></i>
            </div>

        </div>
    );
};

export default ContactMe;