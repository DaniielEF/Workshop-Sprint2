// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { postData, getData } from '../helpers/peticiones'; 
import { NavLink } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', photo: '', friends: [] });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:3000/users'; 
       // Validar campos requeridos
       if (!formData.name || !formData.email || !formData.password) {
        setError('Por favor, complete todos los campos requeridos.');
        return;
      }

    try {
      const users = await getData(url);
      const emailExists = users.some(user => user.email === formData.email);

      if (emailExists) {
        setError('El correo ya está en uso');
        return;
      }

      
      const lastUser = users[users.length - 1];
      const newId = lastUser ? lastUser.id + 1 : 1; 

      
      const newUser = { ...formData, id: newId };

      const status = await postData(url, newUser);
      if (status === 201) {
        alert('Usuario registrado con éxito');
        setFormData({ photo: '', name: '', email: '', password: '', friends: [] });
        setError('');
      } else {
        alert('Error en el registro');
      }
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Create account
      </Typography>
      {error && <Typography color="error">{error}</Typography>} {/* Mostrar error si el correo ya existe */}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Foto"
          name="photo"
          fullWidth
          margin="normal"
          value={formData.photo}
          onChange={handleChange}
        />
        <TextField
          label="Nombre"
          name="name"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Contraseña"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" fullWidth style={{ marginTop: '20px' }}>
          Registrarse
        </Button>
        <Typography>¿Ya tienes cuenta? 
          <NavLink to='/login'>
            Iniciar Sesion
          </NavLink>
        </Typography>
      </form>
    </Container>
  );
};

export default Register;
