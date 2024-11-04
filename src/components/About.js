import React from 'react';

const About = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Header Section */}
      <section style={styles.headerSection}>
        <h1 style={styles.headerHeading}>About Us</h1>
        <p style={styles.headerText}>
          We are committed to excellence and innovation. Our team is passionate about building solutions that make a difference.
        </p>
      </section>

      {/* Core Values Section */}
      <section style={styles.coreValuesSection}>
        <h2 style={styles.sectionHeading}>Our Core Values</h2>
        <div style={styles.valuesGrid}>
          {['Integrity', 'Innovation', 'Collaboration', 'Customer Success'].map((value, index) => (
            <div key={index} style={styles.valueCard}>
              <h3 style={styles.valueHeading}>{value}</h3>
              <p style={styles.valueText}>
                Our team embodies {value.toLowerCase()} in everything we do, ensuring quality and dedication in every step.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section style={styles.teamSection}>
        <h2 style={styles.sectionHeading}>Meet Our Team</h2>
        <div style={styles.teamGrid}>
          {[
            { name: 'Alice Johnson', role: 'CEO', image: 'https://via.placeholder.com/150' },
            { name: 'Bob Smith', role: 'CTO', image: 'https://via.placeholder.com/150' },
            { name: 'Claire Lee', role: 'Lead Designer', image: 'https://via.placeholder.com/150' },
            { name: 'David Kim', role: 'Project Manager', image: 'https://via.placeholder.com/150' },
          ].map((member, index) => (
            <div key={index} style={styles.teamCard}>
              <img src={member.image} alt={member.name} style={styles.teamImage} />
              <h3 style={styles.teamName}>{member.name}</h3>
              <p style={styles.teamRole}>{member.role}</p>
            </div>
          ))}
        </div>
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
  coreValuesSection: {
    padding: '3rem 2rem',
    textAlign: 'center',
    backgroundColor: '#ffffff',
  },
  sectionHeading: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
  },
  valuesGrid: {
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  },
  valueCard: {
    padding: '1.5rem',
    backgroundColor: '#e2e8f0',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
  },
  valueCardHover: {
    transform: 'scale(1.05)',
  },
  valueHeading: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  valueText: {
    fontSize: '1rem',
  },
  teamSection: {
    padding: '3rem 2rem',
    textAlign: 'center',
    backgroundColor: '#f0f0f5',
  },
  teamGrid: {
    display: 'grid',
    gap: '1.5rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  },
  teamCard: {
    padding: '1rem',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s',
  },
  teamCardHover: {
    transform: 'scale(1.05)',
  },
  teamImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '0.5rem',
  },
  teamName: {
    fontSize: '1.2rem',
    margin: '0.5rem 0',
  },
  teamRole: {
    fontSize: '1rem',
    color: '#666',
  },
};

export default About;
