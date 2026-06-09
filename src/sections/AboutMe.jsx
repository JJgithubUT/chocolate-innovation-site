// eslint-disable-next-line no-unused-vars
import React from 'react';

function AboutMe() {
  const styles = {
    section: {
      minHeight: '100vh',
      background: '#000000',
      color: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '50px 20px',
    },

    container: {
      maxWidth: '1100px',
      width: '100%',
      textAlign: 'center',
    },

    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: '#3b82f6',
    },

    subtitle: {
      fontSize: '1.4rem',
      marginBottom: '30px',
      color: '#93c5fd',
    },

    text: {
      fontSize: '1.1rem',
      lineHeight: '1.8',
      color: '#d1d5db',
      marginBottom: '15px',
    },

    descriptionCard: {
      background: '#111827',
      padding: '30px',
      borderRadius: '20px',
      marginBottom: '40px',
      boxShadow: '0 0 25px rgba(59, 130, 246, 0.25)',
      border: '1px solid #1d4ed8',
    },

    cardsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '25px',
      marginTop: '30px',
    },

    card: {
      background: '#0f172a',
      padding: '25px',
      borderRadius: '18px',
      border: '1px solid #2563eb',
      boxShadow: '0 0 20px rgba(37, 99, 235, 0.2)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },

    cardTitle: {
      color: '#60a5fa',
      fontSize: '1.3rem',
      marginBottom: '15px',
      fontWeight: 'bold',
    },

    cardText: {
      color: '#cbd5e1',
      lineHeight: '1.7',
      fontSize: '1rem',
    },
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-8px)';
    e.currentTarget.style.boxShadow =
      '0 0 30px rgba(59, 130, 246, 0.5)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow =
      '0 0 20px rgba(37, 99, 235, 0.2)';
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h1 style={styles.title}>About Chocolate Innovation</h1>

        <h2 style={styles.subtitle}>
          Innovación tecnológica para el sector salud
        </h2>

        <div style={styles.descriptionCard}>
          <p style={styles.text}>
            Chocolate Innovation es una empresa dedicada al desarrollo de
            soluciones tecnológicas innovadoras orientadas al sector salud.
            Nuestro objetivo es optimizar procesos hospitalarios mediante
            herramientas digitales que mejoren la eficiencia operativa y la
            calidad de atención a los pacientes.
          </p>

          <p style={styles.text}>
            Trabajamos aplicando metodologías ágiles como SCRUM y buenas
            prácticas de gestión de proyectos basadas en PMBOK, permitiendo el
            desarrollo de sistemas confiables, escalables y adaptados a las
            necesidades de cada organización.
          </p>
        </div>

        <div style={styles.cardsContainer}>
          <div
            style={styles.card}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h3 style={styles.cardTitle}>🎯 Misión</h3>
            <p style={styles.cardText}>
              Desarrollar soluciones tecnológicas innovadoras que impulsen la
              transformación digital del sector salud mediante herramientas
              eficientes, seguras y accesibles.
            </p>
          </div>

          <div
            style={styles.card}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h3 style={styles.cardTitle}>🚀 Visión</h3>
            <p style={styles.cardText}>
              Ser una empresa líder en innovación tecnológica para instituciones
              de salud, reconocida por la calidad y confiabilidad de sus
              soluciones.
            </p>
          </div>

          <div
            style={styles.card}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h3 style={styles.cardTitle}>💡 Innovación</h3>
            <p style={styles.cardText}>
              Implementamos tecnologías modernas para optimizar procesos,
              mejorar la toma de decisiones y facilitar la gestión hospitalaria.
            </p>
          </div>

          <div
            style={styles.card}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h3 style={styles.cardTitle}>🤝 Valores</h3>
            <p style={styles.cardText}>
              Compromiso, responsabilidad, trabajo en equipo, calidad e
              innovación continua para brindar el mejor servicio a nuestros
              clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;