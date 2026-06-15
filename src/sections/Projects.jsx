import ProjectCard from "../components/UI/ProjectCard";

const projects = [
  {
    icon: "🏥",
    title: "Expediente Clínico Electrónico",
    description:
      "Sistema centralizado para la gestión del historial médico de pacientes. Permite acceso en tiempo real a diagnósticos, estudios y tratamientos desde cualquier área del hospital.",
    tag: "HIS Core",
  },
  {
    icon: "🛏️",
    title: "Gestión de Camas Hospitalarias",
    description:
      "Módulo de control y disponibilidad de camas en tiempo real. Optimiza el flujo de admisión, traslados y egresos para reducir tiempos de espera y mejorar la ocupación.",
    tag: "Operaciones",
  },
  {
    icon: "💊",
    title: "Farmacia y Control de Medicamentos",
    description:
      "Trazabilidad completa del inventario farmacéutico: dispensación, caducidades, alertas de stock crítico e integración directa con las órdenes médicas del expediente.",
    tag: "Farmacia",
  },
  {
    icon: "📊",
    title: "Panel de Indicadores Directivos",
    description:
      "Dashboard ejecutivo con métricas clave de operación hospitalaria: ocupación, tiempos de atención, productividad médica y alertas tempranas para la toma de decisiones.",
    tag: "Analytics",
  },
  {
    icon: "📅",
    title: "Agendamiento y Consulta Externa",
    description:
      "Plataforma de citas médicas con notificaciones automáticas, gestión de listas de espera y vinculación directa al expediente clínico del paciente.",
    tag: "Consulta Externa",
  },
  {
    icon: "🔗",
    title: "Interoperabilidad HL7 / FHIR",
    description:
      "Integración con laboratorios, imagenología y sistemas externos mediante estándares internacionales HL7 y FHIR, garantizando comunicación segura entre plataformas.",
    tag: "Integración",
  },
];

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
  };

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <span style={styles.badge}>Módulos del Sistema</span>
        <h2 style={styles.title}>Nuestros Proyectos</h2>
        <p style={styles.subtitle}>
          Soluciones tecnológicas avanzadas diseñadas para optimizar la gestión hospitalaria, 
          mejorar la atención al paciente y automatizar procesos clínicos.
        </p>
        
        <div style={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              icon={project.icon}
              title={project.title}
              description={project.description}
              tag={project.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;