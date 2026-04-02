import { contactLinks } from '../data'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function ContactSection() {
  return (
    <section className="section" id="contact">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk about internships, AI products, or full-stack opportunities."
          description="I’m especially interested in roles and projects where I can contribute across backend logic, applied AI, and thoughtful product development."
        />
      </Reveal>

      <Reveal className="contact-grid" delay={0.1}>
        <div className="glass-panel contact-card">
          <h3>Connect with me</h3>
          <p>
            If you are hiring for AI, backend, or full-stack roles, I would love
            to connect and share more about my work.
          </p>
          <div className="contact-links">
            {contactLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>

        <form className="glass-panel contact-form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="Your email" />
          </label>
          <label>
            Opportunity
            <textarea
              placeholder="Tell me about the role, internship, collaboration, or product idea."
              rows={5}
            />
          </label>
          <button className="button button-primary" type="button">
            Send Message
          </button>
        </form>
      </Reveal>
    </section>
  )
}
