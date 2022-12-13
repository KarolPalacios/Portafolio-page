import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav>
                <h3 className="nav-brand">
                    <b>DN</b>
                </h3>
                
                <ul className="navbar">
                    <li className="nav-item">
                        <a href="#inicio">Inicio</a>
                    </li>

                    <li className="nav-item">
                        <a href="#habilidades">Habilidades</a>
                    </li>

                    <li className="nav-item">
                        <a href="portafolio">Portafolio</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;