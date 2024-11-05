import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  const [language, setLanguage] = useState('es');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <header className="header">
      <div className="left-section">
        <img src="/img/logo-menu1.png" alt="Legalkademy Logo" className="logo" />
      </div>

      <div className="center-section">
        <div className="search-container">
          <input type="text" placeholder="Buscar..." />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <nav className="menu">
          <ul>
            <li><Link to="./Inicio.js">Inicio</Link></li>
            <li><Link to="/quienes-somos">Quiénes Somos</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/contactos">Contactos</Link></li>
            <li><Link to="/cursos">Cursos</Link></li>
            <li><Link to="/informacion">Información</Link></li>
          </ul>
        </nav>
      </div>

      <div className="right-section">
        <div className="auth-social-lang">
          <div className="auth-links">
            <Link to="./Login.js">Iniciar Sesión</Link>
            <Link to="./Register.js">Registrarse</Link>
          </div>

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

          <div className="language-selector">
            <select value={language} onChange={handleLanguageChange}>
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Menu;
