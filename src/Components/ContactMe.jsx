import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const ContactMe = () => {

    const gitHubProfile = () => location.href = "https://github.com/KarolPalacios"

    const linkedinProfile = () => location.href = "https://www.linkedin.com/in/karol-dayana-palacios-nieva-b06ba9252"

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dscirmt', 'template_5zpniwb', form.current, 'a9cISZdXIntVlrzAv')
        .then((result) => {
            console.log(result.text);
            alert("mensaje enviado");
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="contact" id="contacto">
            <h2>Contacto</h2>
            <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" name="email"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" placeholder="Mensaje" name="mensaje" />
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