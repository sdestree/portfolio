import NavBar from './components/NavBar';
import Hero from './sections/Hero'
import Stack from './sections/Stack'
import Projects from "./sections/Projects";
import Languages from './sections/Languages';
import AboutMe from './sections/AboutMe';
import Contact from './sections/Contact';


function App() {
  return (
    <>
      <NavBar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="stack">
          <Stack />
        </section>
        <section id="projects">
          <Projects />
        </section>
      <section id="languages">
        <Languages />
      </section>
      <section id="aboutme">
        <AboutMe />
      </section>
    
      <Contact />
      </main>
      
    </>
  )
}

export default App
