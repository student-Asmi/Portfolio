import { motion, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState, type PointerEvent } from 'react'
import portrait from '../assets/asmi-verma.jpeg'
import { Reveal } from './Reveal'

export function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const springX = useSpring(0, { stiffness: 120, damping: 16, mass: 0.4 })
  const springY = useSpring(0, { stiffness: 120, damping: 16, mass: 0.4 })

  const rotateY = useTransform(springX, [-1, 1], [-9, 9])
  const rotateX = useTransform(springY, [-1, 1], [9, -9])
  const floatX = useTransform(springX, [-1, 1], [-14, 14])
  const floatY = useTransform(springY, [-1, 1], [-10, 10])
  const imageX = useTransform(springX, [-1, 1], [-10, 10])
  const imageY = useTransform(springY, [-1, 1], [-8, 8])
  const shineX = useTransform(springX, [-1, 1], ['-10%', '10%'])
  const shineY = useTransform(springY, [-1, 1], ['-8%', '8%'])

  useEffect(() => {
    springX.set(mouse.x)
    springY.set(mouse.y)
  }, [mouse, springX, springY])

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1
    setMouse({ x, y })
  }

  const resetMouse = () => setMouse({ x: 0, y: 0 })

  return (
    <section className="hero-section section" id="home">
      <div className="hero-grid">
        <Reveal className="hero-copy">
          <span className="eyebrow">AI Engineer • Full-Stack Developer</span>
          <h1>Asmi Verma</h1>
          <p className="hero-role">AI/ML • MERN • RAG • Backend Systems</p>
          <p className="hero-text">
            B.Tech CSE student at the University of Kalyani with past experience
            at HEPro AI+, building AI-powered applications, MERN products, and
            real-time systems with a strong backend and systems mindset.
          </p>

          <div className="hero-meta">
            <div className="glass-panel pill-list">
              <span>LangChain & LLaMA</span>
              <span>FastAPI & MERN</span>
              <span>WebRTC Systems</span>
            </div>
          </div>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Projects
            </a>
            <a className="button button-secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </Reveal>

        <Reveal className="hero-visual-wrap" delay={0.15}>
          <div
            className="hero-visual-shell"
            onPointerMove={handleMove}
            onPointerLeave={resetMouse}
          >
            <motion.div className="hero-orbit" style={{ x: floatX, y: floatY }} />
            <motion.div
              className="portrait-card glass-panel"
              style={{ rotateX, rotateY, x: floatX, y: floatY }}
            >
              <motion.div className="portrait-shine" style={{ x: shineX, y: shineY }} />
              <motion.img
                className="portrait-image"
                src={portrait}
                alt="Portrait of Asmi Verma"
                style={{ x: imageX, y: imageY, scale: 1.04 }}
              />
              <div className="portrait-caption glass-panel">
                <span>Kalyani, West Bengal</span>
                <strong>AI-focused Full-Stack Developer</strong>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
