import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/Projects/ProjectCard";
import ProjectModal from "../components/Projects/ProjectModal";
import "../styles/Projects.css";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="proyectos" className="projects">
      <h2>Proyectos destacados</h2>
      <p>Proyectos en los que participé y dejé mi impronta este último año</p>

      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
