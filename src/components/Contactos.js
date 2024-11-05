import React from 'react';
import '../css/contactos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contactos = () => {
    return (
        <div className="contactos">
            <div className="columns">
                <div className="column">
                    <div className="section-container">
                        <h1>Formulario de Contacto</h1>
                        <p>
                            Si tienes preguntas, sugerencias o necesitas asistencia, no dudes en contactarnos a través de nuestro formulario en línea.
                        </p>
                        <form>
                            <input type="text" placeholder="Nombre" />
                            <input type="email" placeholder="Correo Electrónico" />
                            <textarea placeholder="Mensaje"></textarea>
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                    <div className="section-container">
                        <h1>Datos de Contacto</h1>
                        <p>
                            Correo Electrónico: soporte@legalkademy.com<br />
                            Teléfono: +1 (800) 123-4567<br />
                            Dirección: Calle de la Legalidad, Ciudad, País
                        </p>
                    </div>
                </div>
                <div className="column">
                    <div className="section-container">
                        <h1>Redes Sociales</h1>
                        <p>
                            Mantente conectado y sigue nuestras actualizaciones en nuestras redes sociales:
                        </p>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                    <div className="section-container">
                        <h1>Preguntas Frecuentes</h1>
                        <p>
                            Visita nuestra sección de FAQ para obtener respuestas rápidas a las preguntas más comunes sobre nuestros cursos y servicios.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactos;
