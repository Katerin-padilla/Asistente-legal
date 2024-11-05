import React from 'react';
import '../css/informacion.css';

const Informacion = () => {
    return (
        <div className="informacion">
            <div className="columns">
                <div className="column">
                    <div className="section-container">
                        <h1>Blog de Legalkademy</h1>
                        <p>
                            Accede a nuestro blog, donde publicamos artículos sobre temas legales actuales, consejos y análisis que pueden ayudarte a comprender mejor el contexto legal en el que vives.
                        </p>
                    </div>
                    <div className="section-container">
                        <h1>Guías y Recursos</h1>
                        <p>
                            Descarga guías prácticas y documentos que abordan temas legales importantes, como derechos de los consumidores, procedimientos legales y más.
                        </p>
                    </div>
                </div>
                <div className="column">
                    <div className="section-container">
                        <h1>Noticias y Actualizaciones</h1>
                        <p>
                            Mantente informado sobre cambios en la legislación, nuevas leyes y regulaciones que pueden afectar tus derechos y obligaciones.
                        </p>
                    </div>
                    <div className="section-container">
                        <h1>Enlaces Útiles</h1>
                        <p>
                            Accede a una lista de recursos externos que incluyen organizaciones legales, bases de datos y bibliotecas que pueden complementar tu aprendizaje.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Informacion;
