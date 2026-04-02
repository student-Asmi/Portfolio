import { skills } from '../data'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function SkillsSection() {
  return (
    <section className="section" id="skills">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I use to ship applied AI and full-stack systems."
          description="My stack spans backend APIs, AI frameworks, modern frontend engineering, and the problem-solving foundation needed to build reliable products."
        />
      </Reveal>

      <Reveal className="glass-panel skills-panel" delay={0.1}>
        <div className="skill-cloud">
          {skills.map((skill) => (
            <span className="skill-chip" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
