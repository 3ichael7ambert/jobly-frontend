import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { loginUser } from './api';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const token = await loginUser(username, password);
      console.log('Token:', token);
      navigate('/');
      // Store the token 
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div className="Login">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
