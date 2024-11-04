import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={styles.pageContainer}>
      {/* Contact Header */}
      <section style={styles.headerSection}>
        <h1 style={styles.headerHeading}>Get in Touch</h1>
        <p style={styles.headerText}>
          We'd love to hear from you! Whether you have a question or just want to say hello, feel free to reach out.
        </p>
      </section>

      {/* Contact Form Section */}
      <section style={styles.contactFormSection}>
        <form onSubmit={handleSubmit} style={styles.contactForm}>
          <label style={styles.label} htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <label style={styles.label} htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <label style={styles.label} htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            rows="5"
            required
          />

          <button type="submit" style={styles.submitButton}>Send Message</button>
        </form>
      </section>

      {/* Contact Info Section */}
      {/* <section style={styles.contactInfoSection}> */}
      <section style={styles.contactInfoSection}>
        <h2 style={styles.infoHeading}>Contact Information</h2>
        <p style={styles.infoText}><strong>Phone:</strong> +123 456 7890</p>
        <p style={styles.infoText}><strong>Email:</strong> info@example.com</p>
        <p style={styles.infoText}><strong>Address:</strong> 123 Main St, Anytown, Country</p>
        <img src="https://via.placeholder.com/400x200" alt="Map" style={styles.mapImage} />
      </section>
    </div>
  );
};

const styles = {
  pageContainer: {
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    backgroundColor: '#f5f5f5',
  },
  headerSection: {
    textAlign: 'center',
    padding: '3rem 2rem',
    backgroundColor: '#282c34',
    color: 'white',
  },
  headerHeading: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  headerText: {
    fontSize: '1.2rem',
    maxWidth: '700px',
    margin: '0 auto',
  },
  contactFormSection: {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    margin: '2rem auto',
    maxWidth: '600px',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  label: {
    textAlign: 'left',
    fontSize: '1rem',
    color: '#333',
  },
  input: {
    padding: '0.8rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '0.8rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  submitButton: {
    padding: '0.8rem',
    fontSize: '1rem',
    backgroundColor: '#61dafb',
    color: '#282c34',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  submitButtonHover: {
    backgroundColor: '#21a1f1',
  },
  contactInfoSection: {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#f0f0f5',
    margin: '2rem auto',
    borderRadius: '8px',
    maxWidth: '600px',
  },
  infoHeading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  infoText: {
    fontSize: '1.1rem',
    margin: '0.5rem 0',
  },
  mapImage: {
    width: '100%',
    borderRadius: '8px',
    marginTop: '1rem',
  },
};

export default Contact;
