import '../styles/Hero.css'
import SocialLinks from '../components/SocialLinks'


function Hero() {
    return (
        <section id="inicio" className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Selene Destrée</h1>

                <h2 className="hero-subtitle">
                    ANALISTA EN SISTEMAS | DESARROLLADORA FULL-STACK
                </h2>

                <p className="hero-location">Buenos Aires, Argentina</p>

                <p className="hero-description">
                    Soy una estudiante apasionada por crear soluciones digitales que
                    combinan lógica, diseño y experiencia de usuario. Desarrollo
                    soluciones completas y alineadas con las necesidades reales de las
                    personas y los negocios.
                </p>

                <div className="hero-buttons">
                    <button className="btn-primary" onClick={() =>
                        document.getElementById("proyectos")?.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                    >Ver proyectos</button>
                    <button className="btn-secondary" onClick={() => {
                        const link = document.createElement("a");
                        link.href = "/cv-selene-destree.pdf";
                        link.download = "CV-Selene-Destree.pdf";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }}>Descargar CV</button>
                </div>

                <SocialLinks />

            </div>
        </section>
    )
}

export default Hero
