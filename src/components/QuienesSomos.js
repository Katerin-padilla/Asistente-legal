import React from 'react';
import '../css/quienes-somos.css';

const QuienesSomos = () => {
    return(

        <div className="quienes-somos">
            <div className="section-container">
                <h1>Nuestra Misión</h1>
                <p>
                    En Legalkademy, creemos que el conocimiento legal es un derecho de todos. Nuestra misión es hacer accesible la educación legal de alta calidad para todos, sin importar su nivel de conocimiento previo.
                </p>
            </div>
            <div className="section-container">
                <h1>Nuestra Visión</h1>
                <p>
                    Aspiramos a ser la plataforma de referencia en educación legal en línea, empoderando a las personas con los conocimientos necesarios para defender y ejercer sus derechos.
                </p>
            </div>
            <div className="section-container">
                <h1>Nuetros Valores</h1>
                <ul>
                    <li>Accesibilidad: Creemos en la educación para todos.</li>
                    <li>Innovación: Usamos tecnología para mejorar la experiencia de aprendizaje.</li>
                    <li>Calidad: Ofrecemos contenido actualizado y de alta calidad.</li>
                    <li>Integridad: Actuamos con ética en todas nuestras interacciones.</li>
                </ul>
            </div>
            <div className="section-container">
                <h1>El Equipo</h1>
                <p>
                    Con un equipo de expertos en derecho, educadores y tecnólogos, Legalkademy combina experiencia y pasión por la enseñanza. Cada miembro está comprometido a proporcionar la mejor experiencia educativa.
                </p>
            </div>
        </div>
    );
};

export default QuienesSomos;
