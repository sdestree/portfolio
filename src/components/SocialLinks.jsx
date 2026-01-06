import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import '../styles/SocialLinks.css'

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://github.com/sdestree"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com/in/sdestree"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>

      <a href="mailto:selene.destree@gmail.com" aria-label="Email">
        <FaEnvelope />
      </a>
    </div>
  )
}

export default SocialLinks
