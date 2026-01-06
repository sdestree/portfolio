import '../../styles/Projects.css'

export default function ProjectCard({ project, onClick }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <span>{project.year}</span>

      <div className="stack-tags">
        {project.stack.map(tech => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <button onClick={onClick}> » Ver más</button>
    </article>
  );
}
