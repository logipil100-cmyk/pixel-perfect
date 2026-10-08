import { ArrowDownRight, ArrowRight, Check, MessageCircle, Sparkles } from "lucide-react"
import type { KlyntiaCopy } from "@/components/klyntia-copy"

export function KlyntiaHero({ copy }: { copy: KlyntiaCopy }) {
  return (
    <section className="hero-section" id="inicio">
      <div className="site-container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            {copy.hero.eyebrow}
          </p>
          <h1 className="hero-title">
            <span className="sr-only">{copy.hero.titleWords.join(" ")}</span>
            <span className="hero-motion-track" aria-hidden="true">
              {copy.hero.titleWords.map((word, index) => (
                <span
                  className={index === 1 ? "hero-motion-word hero-motion-accent" : "hero-motion-word"}
                  key={word}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>
          <p className="hero-description">{copy.hero.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#planos">
              {copy.hero.primaryCta}
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#como-funciona">
              <ArrowDownRight aria-hidden="true" className="play-mark" />
              {copy.hero.secondaryCta}
            </a>
          </div>
          <ul className="hero-highlights" aria-label={copy.hero.highlightsLabel}>
            {copy.hero.highlights.map((highlight) => (
              <li key={highlight}>
                <Check aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual" id="demonstracao">
          <div className="visual-glow" aria-hidden="true" />
          <article className="chat-preview" aria-label={copy.hero.demoLabel}>
            <div className="chat-preview-header">
              <div className="chat-channel-icon" aria-hidden="true">
                <MessageCircle />
              </div>
              <div className="chat-heading">
                <strong>{copy.hero.chatTitle}</strong>
                <span>{copy.hero.chatChannel}</span>
              </div>
              <div className="online-status">
                <span className="status-dot" aria-hidden="true" />
                {copy.hero.previewStatus}
              </div>
            </div>

            <div className="chat-customer">
              <span className="customer-avatar" aria-hidden="true">A</span>
              <div className="customer-details">
                <strong>{copy.hero.customerName}</strong>
                <span>{copy.hero.customerMeta}</span>
              </div>
              <span className="chat-open-label">{copy.hero.ticketLabel}</span>
            </div>

            <div className="chat-messages">
              <div className="chat-bubble customer-bubble">{copy.hero.customerMessage}</div>
              <div className="assistant-response">
                <span className="assistant-label">
                  <Sparkles aria-hidden="true" /> Klyntia AI
                </span>
                <div className="chat-bubble assistant-bubble">{copy.hero.assistantMessage}</div>
              </div>
              <div className="chat-bubble customer-bubble short-bubble">
                {copy.hero.confirmationMessage}
              </div>
              <div className="resolution-message">
                <span className="resolution-check" aria-hidden="true"><Check /></span>
                <span>{copy.hero.resolvedMessage}</span>
              </div>
            </div>

            <div className="chat-preview-footer">
              <span>{copy.hero.resolvedMeta}</span>
              <span className="ai-active"><span className="status-dot" aria-hidden="true" />{copy.hero.aiActive}</span>
            </div>
          </article>

          <div className="floating-response-card" aria-hidden="true">
            <span className="floating-icon"><Sparkles /></span>
            <span className="floating-copy">
              <strong>{copy.hero.floatingTitle}</strong>
              <span>{copy.hero.floatingMeta}</span>
            </span>
            <span className="floating-value">{copy.hero.floatingValue}</span>
          </div>
          <span className="visual-caption" aria-hidden="true">{copy.hero.previewCaption}</span>
        </div>
      </div>
    </section>
  )
}
