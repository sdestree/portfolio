import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import "../../styles/Projects.css";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => document.body.classList.remove("modal-open");
  }, []);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <div className="modal-header">
    <h3>{project.title}</h3>
  </div>
        {/* -------- COLUMNA TEXTO -------- */}
        <div className="modal-content">
          
          <span className="year">{project.year}</span>

          <p>{project.description}</p>
          <p>{project.featuresTitle}</p>

          <ul>
            {project.features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* -------- COLUMNA VIDEO -------- */}
        <div className="modal-media">
          {project.demoVideo && (
            <div className="video-wrapper">
              <video controls>
                <source src={project.demoVideo} type="video/mp4" />
                Tu navegador no soporta video.
              </video>
            </div>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="modal-github"
            >
              <FaGithub />
              Ver repositorio
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
