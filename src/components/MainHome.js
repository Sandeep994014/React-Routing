import React from 'react';
import { Outlet , Link } from 'react-router-dom';

const MainHome = () => {
    return (
        <div style={styles.pageContainer}>
          {/* Hero Section */}
          <section style={styles.heroSection}>
            <h1 style={styles.heroHeading}>Welcome to Our Interactive Page</h1>
            <p style={styles.heroText}>Explore the features we offer to make your life easier and more enjoyable.</p>
            <button style={styles.heroButton} onClick={() => alert("Learn more!")}>
              Get Started
            </button>
          </section>
    
          {/* About Section */}
          <section style={styles.aboutSection}>
            <h2 style={styles.sectionHeading} >About Us</h2>
            <div style={styles.aboutContent}>
              <p style={styles.aboutText}>
                We’re dedicated to providing top-notch services that cater to all your needs. Our team works tirelessly to bring innovative solutions to our clients.
              </p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRHvWyUXodcuQgNiCTUBpsAHeAI4Wwapbe8g&s" alt="About Us" style={styles.aboutImage} />
            </div>
          </section>
    
          {/* Features Section */}
          <section style={styles.featuresSection}>
            <h2 style={styles.sectionHeading}>Our Features</h2>
            <div style={styles.featuresGrid}>
              {["Feature One", "Feature Two", "Feature Three", "Feature Four"].map((feature, index) => (
                <div key={index} style={styles.featureCard}>
                  <h3 style={styles.featureHeading}>{feature}</h3>
                  <p style={styles.featureText}>
                    Discover the benefits of {feature.toLowerCase()} that can help you achieve your goals.
                  </p>
                </div>
              ))}
            </div>
          </section>
          <Outlet />
        </div>
      );
    };
    
    const styles = {
      pageContainer: {
        fontFamily: 'Arial, sans-serif',
      },
      heroSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        backgroundColor: '#282c34',
        color: 'white',
        textAlign: 'center',
        padding: '2rem',
      },
      heroHeading: {
        fontSize: '3rem',
        animation: 'fadeIn 2s ease-in-out',
      },
      heroText: {
        fontSize: '1.2rem',
        marginBottom: '1.5rem',
        animation: 'fadeIn 3s ease-in-out',
      },
      heroButton: {
        padding: '0.8rem 1.5rem',
        fontSize: '1rem',
        backgroundColor: '#61dafb',
        color: '#282c34',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      },
      heroButtonHover: {
        backgroundColor: '#21a1f1',
      },
      aboutSection: {
        padding: '3rem 2rem',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
      },
      sectionHeading: {
        fontSize: '2.5rem',
        marginBottom: '1rem',
        // textAlign: 'center',
      },
      aboutContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        flexDirection: 'row',
      },
      aboutText: {
        fontSize: '1.2rem',
        maxWidth: '600px',
      },
      aboutImage: {
        // width: '300px',
        height: 'auto',
        borderRadius: '8px',
      },
      featuresSection: {
        padding: '3rem 2rem',
        backgroundColor: '#e2e2e2',
        textAlign: 'center',
      },
      featuresGrid: {
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      featureCard: {
        padding: '1.5rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
      },
      featureCardHover: {
        transform: 'scale(1.05)',
        boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.2)',
      },
      featureHeading: {
        fontSize: '1.5rem',
        marginBottom: '0.5rem',
      },
      featureText: {
        fontSize: '1rem',
      },
    };
    
    // Add simple animations using keyframes in CSS
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `, styleSheet.cssRules.length);
    
    export default MainHome;
