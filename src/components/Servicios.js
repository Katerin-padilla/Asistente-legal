import React from 'react';
import '../css/servicios.css';

const Servicios = () => {
    return (
            <div className="servicios">
                <div className="section-container">
                    <h1>Cursos en Línea</h1>
                    <p>
                        Ofrecemos una variedad de cursos que abarcan desde los fundamentos del derecho hasta temas especializados. Nuestros cursos son interactivos, accesibles y diseñados para satisfacer las necesidades de diferentes perfiles de estudiantes.
                    </p>
                </div>
                <div className="section-container">
                    <h1>Asistencia Personalizada</h1>
                    <p>
                        Nuestro asistente virtual está disponible para ayudarte a encontrar los recursos adecuados, responder preguntas sobre el contenido de los cursos y ofrecer orientación personalizada en tu aprendizaje.
                    </p>
                </div>
                <div className="section-container">
                    <h1>Recursos Adicionales</h1>
                    <p>
                        Accede a materiales complementarios como documentos, artículos y guías que te ayudarán a profundizar en los temas de tu interés.
                    </p>
                </div>               
            </div>
    );
};

export default Servicios;
