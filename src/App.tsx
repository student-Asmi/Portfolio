import { useEffect, useState, type CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { HeroSection } from './components/HeroSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'

function App() {
  const [pointer, setPointer] = useState({ x: 50, y: 20 })

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 100
      const y = (event.clientY / window.innerHeight) * 100
      setPointer({ x, y })
    }

    window.addEventListener('pointermove', handlePointerMove)

    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return (
    <div
      className="page-shell"
      style={
        {
          '--pointer-x': `${pointer.x}%`,
          '--pointer-y': `${pointer.y}%`,
        } as CSSProperties
      }
    >
      <div className="page-noise" />
      <div className="cursor-spotlight" />

      <motion.header
        className="topbar glass-panel"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <a className="brand" href="#home">
          Asmi Verma
        </a>
        <nav className="topnav" aria-label="Section navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </motion.header>

      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
