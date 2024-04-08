import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Reset error message when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateEmail = (email) => {
    // Email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Validate the field on blur
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
      }));
    } else if (name === 'email' && !validateEmail(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    let hasErrors = false;
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
      hasErrors = true;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      hasErrors = true;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
      hasErrors = true;
    }

    // Display errors if any
    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Form submission logic here (e.g., sending data to server)
    console.log(formData);

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };
  
  const styles = {
    container: {
      margin: '20px',
    },
    innerContainer: {
      padding: '20px',
      borderLeft: '1px solid #efefef',
      borderColor: '#6272a4',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Contact</h2>
      <p style={styles.innerContainer}>
        Fill out the form below to get in touch with me.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
