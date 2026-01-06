import { useEffect, useState } from "react";
import "../styles/NavBar.css";

export default function NavBar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < lastScrollY || currentY < 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${visible ? "navbar-visible" : "navbar-hidden"}`}>
      <div className="navbar-logo">SD</div>

      <ul className="navbar-links">
        <li><a href="#inicio">#inicio</a></li>
        <li><a href="#stack">#stack</a></li>
        <li><a href="#proyectos">#proyectos</a></li>
        <li><a href="#idiomas">#idiomas y certificaciones</a></li>
        <li><a href="#about">#más sobre mí</a></li>
      </ul>

      <div className="navbar-lang">ES / EN</div>
    </nav>
  );
}
