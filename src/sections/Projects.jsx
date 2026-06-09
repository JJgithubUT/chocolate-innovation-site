import ProjectCard from "../components/UI/ProjectCard";

function Projects() {
  return (
    <section id="projects">
      <h2>Sección: Proyectos</h2>
      <div>
        <ProjectCard title="Proyecto 1" />
        <ProjectCard title="Proyecto 2" />
        <ProjectCard title="Proyecto 3" />
      </div>
    </section>
  );
}

export default Projects;