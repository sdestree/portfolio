import { useState } from 'react'
import '../styles/AboutMe.css'

const data = [
  {
    id: 1,
    image: '/images/reading.jpg',
    text: 'La literatura y la poesía entrenan mi mirada crítica y mi sensibilidad: leer es una forma de pensar con profundidad.'
  },
  {
    id: 2,
    image: '/images/boston.jpg',
    text: 'Viajar me permitió adaptarme a contextos nuevos y aprender de realidades diversas.'
  },
  {
    id: 3,
    image: '/images/tulips.jpg',
    text: 'La naturaleza es mi espacio de serenidad y enfoque: donde encuentro equilibrio y claridad.'
  }
]

export default function AboutMe() {
  const [activeId, setActiveId] = useState(1)

  const activeItem = data.find(item => item.id === activeId)

  return (
    <section id="about" className="about-extra">
      <h2>Más sobre mí</h2>

      <div className="photos-container">
        {data.map(item => (
          <div
            key={item.id}
            className={`photo-card ${activeId === item.id ? 'active' : ''}`}
            onClick={() =>
              setActiveId(activeId === item.id ? null : item.id)
            }
          >
            <img src={item.image} alt="Foto personal" loading="lazy" />

            {/* TEXTO MOBILE */}
            <div className="mobile-text">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* TEXTO DESKTOP */}
      <div className="message-container">
        <span className="arrow">➜</span>
        <p>{activeItem?.text}</p>
      </div>
    </section>
  )
}
