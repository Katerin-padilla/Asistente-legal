import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Inicio from './components/Inicio';
import Menu from './components/Menu';
import Information from './components/Information';
import QuienesSomos from './components/QuienesSomos';
import Servicios from './components/Servicios';
import Contactos from './components/Contactos';
import Courses from './components/Courses';
import UserManagement from './components/UserManagement';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleToggleRegister = () => {
    setShowRegister(!showRegister);
  };

  if (!isLoggedIn) {
    return showRegister ? (
      <Register onToggleLogin={handleToggleRegister} />
    ) : (
      <Login onToggleRegister={handleToggleRegister} onLoginSuccess={handleLoginSuccess} />
    );
  }

  return (
    <Router>
      <div className="app">
        <Menu />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/cursos" element={<Courses />} />
            <Route path="/informacion" element={<Information />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
