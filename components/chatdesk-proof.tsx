import { ArrowUpRight, Plus } from "lucide-react"
import type { ChatDeskCopy, Locale } from "@/components/chatdesk-copy"
import { getContactHref } from "@/components/chatdesk-copy"

export function ChatDeskProcess({ copy }: { copy: ChatDeskCopy }) {
  return (
    <section className="workflow-section section-anchor" id="como-funciona" aria-labelledby="workflow-heading">
      <div className="site-container">
        <div className="section-heading workflow-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" />{copy.process.eyebrow}</p>
            <h2 id="workflow-heading">{copy.process.heading}</h2>
          </div>
          <p className="section-intro">{copy.process.description}</p>
        </div>

        <ol className="workflow-grid">
          {copy.process.steps.map((step, index) => (
            <li className="workflow-card" key={step.title}>
              <span className="workflow-number" aria-hidden="true">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function ChatDeskFaq({ copy, locale }: { copy: ChatDeskCopy; locale: Locale }) {
  return (
    <section className="faq-section section-anchor" id="faq" aria-labelledby="faq-heading">
      <div className="site-container faq-layout">
        <div className="faq-column">
          <p className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" />{copy.faq.eyebrow}</p>
          <h2 id="faq-heading">{copy.faq.heading}</h2>
          <p className="section-intro faq-intro">{copy.faq.description}</p>
          <div className="faq-list">
            {copy.faq.items.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>
                  <span>{item.question}</span>
                  <Plus aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
          <a className="faq-contact-link" href={getContactHref(locale)}>
            {copy.faq.contactText} <span>{copy.faq.contactLink}</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
