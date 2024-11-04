import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/about" style={styles.link}>About</Link>
      <Link to="/contact" style={styles.link}>Contact</Link>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#333',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem'
  }
};

export default Navbar;
