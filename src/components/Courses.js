import React, { useState } from 'react';
import '../css/courses.css'; 

const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [moduleIndex, setModuleIndex] = useState(0);

    const courses = [
        {
            title: 'Introducción al Derecho',
            image: '/img/intro_derecho.jpg',
            description: 'Este curso ofrece una visión general del derecho y su importancia en la sociedad moderna.',
            modules: [
                { title: '¿Qué es el derecho?', content: 'Concepto y definición de derecho. Importancia del derecho en la sociedad.' },
                { title: 'Historia del derecho en Bolivia', content: 'Evolución histórica del derecho en Bolivia. Principales hitos y cambios legislativos.' }
            ]
        },
        {
            title: 'Principios del Derecho',
            image: '/img/principios_derecho.jpg',
            description: 'Descubre los principios fundamentales que rigen el sistema legal en Bolivia.',
            modules: [
                { title: 'Principios fundamentales del derecho', content: 'Principios generales como legalidad, igualdad, justicia.' },
                { title: 'La Constitución de Bolivia', content: 'Análisis de la Constitución Política del Estado. Derechos y deberes constitucionales.' }
            ]
        },
        {
            title: 'Derechos y Deberes',
            image: '/img/derechos_deberes.jpg',
            description: 'Comprende los derechos fundamentales de los ciudadanos y sus responsabilidades legales.',
            modules: [
                { title: 'Derechos de los ciudadanos', content: 'Derechos civiles, políticos, económicos, sociales y culturales.' },
                { title: 'Deberes y responsabilidades', content: 'Deberes y responsabilidades ciudadanas. Implicaciones legales.' }
            ]
        },
        {
            title: 'Derecho Comercial',
            image: '/img/derecho_comercial.jpg',
            description: 'Este curso cubre las leyes comerciales que afectan a las empresas y transacciones económicas.',
            modules: [
                { title: 'Introducción al derecho comercial', content: 'Concepto y alcance del derecho comercial. Importancia en la economía.' },
                { title: 'Tipos de empresas y sociedades', content: 'Clasificación de empresas y sociedades. Características legales.' },
                { title: 'Tipos de contratos comerciales', content: 'Clasificación y características de los contratos comerciales.' },
                { title: 'Redacción de contratos', content: 'Principios y técnicas de redacción de contratos comerciales.' }
            ]
        },
        {
            title: 'Derecho de Propiedad Intelectual',
            image: '/img/propiedad_intelectual.jpg',
            description: 'Explora los aspectos legales de la protección de la propiedad intelectual en la era digital.',
            modules: [
                { title: 'Conceptos básicos', content: 'Introducción a los derechos de autor, patentes y marcas.' },
                { title: 'Propiedad intelectual en la era digital', content: 'Retos y oportunidades en el ámbito digital.' },
                { title: 'Protección de patentes', content: 'Cómo proteger las invenciones y descubrimientos.' }
            ]
        },
        {
            title: 'Derecho Civil',
            image: '/img/derecho_civil.jpg',
            description: 'Aprende sobre las leyes civiles que rigen la vida diaria de los ciudadanos.',
            modules: [
                { title: 'Derecho de familia', content: 'Regulación del matrimonio, filiación y adopción.' },
                { title: 'Derechos de propiedad', content: 'Propiedad, posesión y derechos reales.' },
                { title: 'Responsabilidad civil', content: 'Normas y leyes sobre el daño a terceros.' }
            ]
        }
    ];

    const handleCourseClick = (course) => {
        if (selectedCourse === course.title) {
            setSelectedCourse(null);
            setModuleIndex(0);
        } else {
            setSelectedCourse(course.title);
            setModuleIndex(0);
        }
    };

    const handleNextModule = () => {
        if (selectedCourse) {
            const course = courses.find(c => c.title === selectedCourse);
            if (moduleIndex < course.modules.length - 1) {
                setModuleIndex(moduleIndex + 1);
            }
        }
    };

    return (
        <div className="courses">
            <h2>Cursos de Derechos Legales</h2>
            <div className="course-grid">
                {courses.map((course, index) => (
                    <div key={index} className={`course ${selectedCourse === course.title ? 'active' : ''}`}>
                        <img src={course.image} alt={course.title} className="course-image" />
                        <div className="course-content">
                            <button onClick={() => handleCourseClick(course)}>
                                {course.title}
                            </button>
                            <p>{course.description}</p>
                        </div>
                        {selectedCourse === course.title && (
                            <div className="modules">
                                <div className="module">
                                    <h4>{course.modules[moduleIndex].title}</h4>
                                    <p>{course.modules[moduleIndex].content}</p>
                                </div>
                                <button onClick={handleNextModule} className="next-button">
                                    Siguiente
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
