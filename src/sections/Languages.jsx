import { languages } from "../data/languages";
import { certifications } from "../data/certifications";
import "../styles/Languages.css";

export default function Languages() {
    return (
        <section id="idiomas" className="languages">
            <h2>Idiomas y certificaciones</h2>
            <p>Formación y habilidades complementarias a mi perfil técnico</p>

            <div className="languages-grid">
                {/* Idiomas */}
                <div className="languages-block">
                    <h3>Idiomas</h3>

                    <div className="languages-cards">
                        {languages.map((lang) => (
                            <div key={lang.name} className="language-card">
                                <span className="language-name">{lang.name}</span>
                                <span className="language-level">{lang.level}</span>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Certificaciones */}
                <div className="languages-block">
                    <h3>Certificaciones</h3>

                    <div className="languages-cards">
                        {certifications.map((cert) => (
                            <div key={cert.title} className="cert-card">
                                <span className="cert-title">{cert.title}</span>
                                <span className="cert-meta">
                                    {cert.institution} · {cert.year}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
