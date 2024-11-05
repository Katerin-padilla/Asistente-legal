
import React, { useState } from 'react';
import '../css/login.css';

const Login = ({ onToggleRegister, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulación de validación simple
    if (email === 'laura@gmail.com' && password === '12345') {
      onLoginSuccess();
    } else {
      setError('Email o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src="/img/logos.png" alt="Logo" className="logo" />
      </div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Acceder</button>
      </form>
      <p style={{color: '#3f3f3f', textAlign: 'center'}}> 
        ¿No tienes cuenta?{' '}
        <span onClick={onToggleRegister} style={{ cursor: 'pointer', color: '#8c52ff' }} className="toggle-link">
          Registrarse
        </span>
      </p>
    </div>
  );
};

export default Login;