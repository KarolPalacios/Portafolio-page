import React from 'react';
// import { Row, Col } from 'react-bootstrap';

const Skills = () => {

        return (
            <div className="skills" id="habilidades">
                <h1>Habilidades</h1>
                {/* <Row xs={1} md={3}> */}
                    {/* <Col> */}
                <div className="skills-container">
                    <div className="icon">
                        <i className="fa-brands fa-git-alt git"></i>
                        <p><b>Git</b></p>
                    </div>
                    <div className="icon">
                        <i className="fa-brands fa-html5 html"></i>
                        <p><b>HTML</b></p>
                    </div>
                    <div className="icon">
                        <i className="fa-brands fa-css3-alt css"></i>
                        <p><b>CSS</b></p>
                    </div>
                    <div className="icon">
                        <i className="fa-brands fa-square-js js"></i>
                        <p><b>JavaScript</b></p>
                    </div>
                    <div className="icon">
                        <i className="fa-brands fa-react react"></i>
                        <p><b>React</b></p>
                    </div>
                </div>
                    {/* </Col> */}
                {/* </Row> */}
            </div>
        );
    };

    export default Skills;