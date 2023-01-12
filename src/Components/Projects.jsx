import React from 'react';
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

                <div className="p-card" onClick={rickYMorty}>
                    <div className="p-card-inner">
                        <div className="p-card-front">
                            <img src={rickymorty} alt="" />
                        </div>
                        <div className="p-card-back">
                            <h2>Rick & Morty</h2>
                            <p>Busca todos los mundos de Rick & Morty por su ID.</p>
                        </div>
                    </div>
                </div>

                <div className="p-card" onClick={pokeDex}>
                    <div className="p-card-inner">
                        <div className="p-card-front">
                            <img src={pokedex} alt="" />
                        </div>
                        <div className="p-card-back">
                            <h2>Pokedex</h2>
                            <p>Consulta la informacion de tu pokemon favorito.</p>
                        </div>
                    </div>
                </div>

                <div className="p-card" onClick={weatherApp}>
                    <div className="p-card-inner">
                        <div className="p-card-front">
                            <img src={weatherapp} alt="" />
                        </div>
                        <div className="p-card-back">
                            <h2>Weather App</h2>
                            <p>Activa tu ubicación para saber cómo está el clima en cualquier lugar.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Projects;