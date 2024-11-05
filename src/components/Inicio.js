import React from 'react';
import '../css/inicio.css';

const Inicio = () => {
    return (
        <div className="inicio">
            <div className="inicio-image-container">
                <img src="/img/index.jpg" alt="imagelkedemy" className="inicio-image" />
                <h1>Bienvenido a Legalkademy</h1>
            </div>
            <div className="content">
                <p>
                    Bienvenido a Legalkademy, tu plataforma de educación legal en línea. Aquí, nos dedicamos a ofrecerte los conocimientos y habilidades necesarios para entender y aplicar los derechos legales en tu vida cotidiana. Con una amplia gama de cursos y un asistente virtual disponible las 24 horas, estamos aquí para apoyarte en tu camino hacia el empoderamiento legal.
                </p>
            </div>
            <div className="content">
                <h2>¿Qué ofrecemos?</h2>
                <ul>
                    <li>Acceso a Cursos: Encuentra una variedad de cursos diseñados para cubrir temas desde la introducción al derecho hasta aspectos más avanzados del derecho comercial.</li>
                    <li>Asistente Virtual: Nuestro asistente está aquí para responder tus preguntas, guiarte en la selección de cursos y ofrecerte ayuda en cualquier momento.</li>
                    <li>Cursos Destacados: Explora los cursos más populares y comienza a aprender hoy mismo.</li>
                    <li>Novedades: Mantente al tanto de las últimas actualizaciones y nuevos cursos que ofrecemos.</li>
                    <li>Testimonios: Conoce las experiencias de otros estudiantes que han transformado su conocimiento legal con nosotros.</li>
                </ul>
            </div>
        </div>
    );
};

export default Inicio;
