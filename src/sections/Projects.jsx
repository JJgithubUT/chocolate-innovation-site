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
  return (
    <section id="projects" className="bg-[#000000] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sky-200 font-semibold tracking-widest uppercase text-xs bg-sky-400/10 px-4 py-1.5 rounded-full border border-sky-400/20">
            Soluciones
          </span>
          <h2 className="text-4xl font-black mt-4 mb-4 tracking-tight text-white">
            Software diseñado para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-400">
              el sector salud
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Módulos especializados que se integran como un ecosistema completo,
            adaptados a las necesidades operativas de cada institución.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;