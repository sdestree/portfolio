import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <footer className="contact">
      

      <p>
        ¿Tenés un proyecto en mente? Contactame!
      </p>

      <div className="contact-links">
        <a href="mailto:selene.destree@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>

        <a
          href="https://github.com/sdestree"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/sdestree"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

      </div>

      <span className="copyright">
        © {new Date().getFullYear()} Selene Destree
      </span>
    </footer>
  );
}
