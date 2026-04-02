import { motion } from 'framer-motion'
import { projects } from '../data'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work across AI systems, RAG applications, and real-time products."
          description="These projects reflect the themes that show up repeatedly across my resumes: applied AI, backend integration, execution pipelines, and interfaces that make complex workflows easier to use."
        />
      </Reveal>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal className="project-column" delay={index * 0.1} key={project.title}>
            <motion.article
              className="glass-panel project-card"
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            >
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.stack.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
