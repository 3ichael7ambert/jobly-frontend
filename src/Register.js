import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import
import { registerUser } from './api'; // Correct import
import './Register.css';

const Register = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the registerUser function from the API
      const token = await registerUser(formData);
      console.log('Registration successful. Token:', token);

      // Redirect to the login page or any other page after successful registration
      navigate('/login'); // Use navigate instead of history.push
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle registration error, e.g., show an error message to the user
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
