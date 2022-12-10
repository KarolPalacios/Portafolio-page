import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#inicio">DN</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#habilidades">Habilidades</Nav.Link>
                        <Nav.Link href="#portafolio">Portafolio</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default NavBar;