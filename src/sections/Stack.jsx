import '../styles/Stack.css'

function Stack() {
  return (
    <section className="stack" id="stack">
      <h2 className="section-title">Mi Stack</h2>

      <div className="stack-columns">
        <div className="stack-column">
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>Vite</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        <div className="stack-column">
          <h3>Backend</h3>
          <ul>
            <li>C#</li>
            <li>.NET</li>
            <li>Entity Framework</li>
          </ul>
        </div>

        <div className="stack-column">
          <h3>Bases de Datos</h3>
          <ul>
            <li>SQL Server</li>
            <li>Firestone</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="stack-column">
          <h3>DevOps & Tools</h3>
          <ul>
            <li>Git</li>
            <li>Firebase</li>
            <li>Linux</li>
            <li>Vercel</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Stack
