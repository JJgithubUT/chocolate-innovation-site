import ProjectCard from "../components/UI/ProjectCard";

function Projects() {
  const styles = {
    section: {
      minHeight: "100vh",
      background: "#000000",
      color: "#ffffff",
      padding: "80px 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    container: {
      maxWidth: "1200px",
      width: "100%",
      textAlign: "center",
    },

    badge: {
      display: "inline-block",
      background: "rgba(59, 130, 246, 0.15)",
      color: "#93c5fd",
      padding: "8px 18px",
      borderRadius: "999px",
      border: "1px solid rgba(59, 130, 246, 0.3)",
      fontSize: "0.85rem",
      fontWeight: "600",
      letterSpacing: "1px",
      textTransform: "uppercase",
      marginBottom: "20px",
    },

    title: {
      fontSize: "3rem",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#3b82f6",
    },

    subtitle: {
      fontSize: "1.15rem",
      color: "#cbd5e1",
      maxWidth: "800px",
      margin: "0 auto 50px auto",
      lineHeight: "1.8",
    },

    projectsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "30px",
      marginTop: "40px",
    },

    infoCard: {
      background: "#0f172a",
      padding: "30px",
      borderRadius: "20px",
      border: "1px solid #2563eb",
      boxShadow: "0 0 25px rgba(37, 99, 235, 0.2)",
      transition: "all 0.3s ease",
    },
  };

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <span style={styles.badge}>Nuestros Proyectos</span>

        <h2 style={styles.title}>
          Soluciones Tecnológicas para el Sector Salud
        </h2>

        <p style={styles.subtitle}>
          En Chocolate Innovation desarrollamos plataformas innovadoras que
          optimizan la gestión hospitalaria, mejoran la atención médica y
          facilitan la transformación digital de clínicas, hospitales y centros
          de salud mediante tecnologías modernas y procesos eficientes.
        </p>

        <div style={styles.projectsGrid}>
          <div style={styles.infoCard}>
            <ProjectCard title="Sistema de Información Hospitalaria (HIS)" />
          </div>

          <div style={styles.infoCard}>
            <ProjectCard title="Gestión Inteligente de Pacientes" />
          </div>

          <div style={styles.infoCard}>
            <ProjectCard title="Plataforma de Transformación Digital" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;