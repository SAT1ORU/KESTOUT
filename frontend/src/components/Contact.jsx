// frontend/src/components/Contact.jsx
import React, { useState } from 'react';
import './Contact.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    console.log('Formulario enviado:', formData);
    alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
  };

  return (
    <div className="contact-container">
      <h1>Contáctenos</h1>
      <p className="contact-intro">¿Tienes alguna pregunta, comentario o sugerencia? ¡Estamos aquí para ayudarte!</p>

      <div className="contact-info-section">
        <h2>Información de Contacto</h2>
        <p><strong>Email:</strong> info@kestout.com</p>
        <p><strong>Teléfono:</strong> +57 310 123 4567</p>
        <p><strong>Dirección:</strong> Calle 123 #45-67, Bogotá, Colombia</p>
        <p><strong>Horario de Atención:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
      </div>

      <div className="contact-form-section">
        <h2>Envíanos un Mensaje</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
