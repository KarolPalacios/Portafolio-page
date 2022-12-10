import React from 'react';
import { Card } from 'react-bootstrap';
import rickymorty from '../assets/rickymorty.jpeg';
import pokedex from '../assets/pokedex.jpeg';
import weatherapp from '../assets/weatherapp.jpeg';

const Projects = () => {

    const rickYMorty = () => location.href = "https://celebrated-eclair-0cfaa8.netlify.app/"

    const pokeDex = () => location.href = "https://fluffy-malabi-531236.netlify.app/"

    const weatherApp = () => location.href = "https://dainty-arithmetic-a4c415.netlify.app/"    

    return (
        <div className="projects" id="portafolio">
            <h1>Proyectos</h1>
            <div className="projects-container">
                <Card onClick={rickYMorty} >
                    <Card.Img variant="top" src={rickymorty} />
                    <Card.Body>
                        <Card.Title>Rick & Morty</Card.Title>
                        <Card.Text>
                            Busca todos los mundos de Rick & Morty por su ID.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card onClick={pokeDex} >
                    <Card.Img variant="top" src={pokedex} />
                    <Card.Body>
                        <Card.Title>Pokedex</Card.Title>
                        <Card.Text>
                            Consulta la informacion de tu pokemon favorito
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card onClick={weatherApp} >
                    <Card.Img variant="top" src={weatherapp} />
                    <Card.Body>
                        <Card.Title>Weather App</Card.Title>
                        <Card.Text>
                            Activa tu ubicación para saber cómo está el clima en cualquier lugar.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Projects;