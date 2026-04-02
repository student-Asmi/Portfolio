import { highlights, stats } from '../data'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function AboutSection() {
  return (
    <section className="section" id="about">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          title="A precise, product-first approach to modern engineering."
          description="I focus on thoughtful architecture, clear problem solving, and fast-moving execution across AI, backend, and full-stack development. The goal is software that feels strong technically and polished in experience."
        />
      </Reveal>

      <div className="about-grid">
        <Reveal className="glass-panel about-card" delay={0.1}>
          {highlights.map((item) => (
            <p className="about-highlight" key={item}>
              {item}
            </p>
          ))}
        </Reveal>

        <Reveal className="stats-grid" delay={0.2}>
          {stats.map((stat) => (
            <article className="glass-panel stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
