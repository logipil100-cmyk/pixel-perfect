import { ArrowUpRight, AtSign, Bot, Mail, MessageCircle, Globe2, TrendingUp, UserRoundCog } from "lucide-react"
import type { KlyntiaCopy } from "@/components/klyntia-copy"

const featureIcons = [Bot, UserRoundCog, TrendingUp]
const channelIcons = [MessageCircle, AtSign, Globe2, Mail]

export function KlyntiaFeatures({ copy }: { copy: KlyntiaCopy }) {
  return (
    <section className="features-section section-anchor" id="funcionalidades">
      <div className="site-container">
        <div className="section-heading feature-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" />{copy.features.eyebrow}</p>
            <h2>{copy.features.heading}</h2>
          </div>
          <p className="section-intro">{copy.features.description}</p>
        </div>

        <div className="feature-grid">
          {copy.features.items.map((item, index) => {
            const Icon = featureIcons[index] ?? Bot
            return (
              <article className="feature-card" key={item.title}>
                <div className="feature-card-top">
                  <span className="feature-icon"><Icon aria-hidden="true" /></span>
                  <span className="feature-number">0{index + 1}</span>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="feature-card-bottom">
                  <span>{item.detail}</span>
                  <ArrowUpRight aria-hidden="true" />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function KlyntiaIntegrations({ copy }: { copy: KlyntiaCopy }) {
  return (
    <section className="integrations-band section-anchor" id="canais" aria-labelledby="integrations-heading">
      <div className="site-container integrations-layout">
        <div className="integrations-copy">
          <p className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" />{copy.integrations.eyebrow}</p>
          <h2 id="integrations-heading">{copy.integrations.heading}</h2>
          <p className="integrations-note">{copy.integrations.note}</p>
        </div>
        <div className="integration-grid">
          {copy.integrations.cards.map((item, index) => {
            const Icon = channelIcons[index] ?? MessageCircle
            return (
              <div className="integration-card" key={item.title}>
                <span className="integration-icon"><Icon aria-hidden="true" /></span>
                <span className="integration-card-copy">
                  <strong>{item.title}</strong>
                  <small>{item.detail}</small>
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
