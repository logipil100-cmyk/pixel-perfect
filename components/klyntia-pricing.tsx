import { ArrowRight } from "lucide-react"
import type { KlyntiaCopy, Locale } from "@/components/klyntia-copy"
import { getSalesContactHref } from "@/components/klyntia-copy"

interface KlyntiaPricingProps {
  copy: KlyntiaCopy
  locale: Locale
}

export function KlyntiaPricing({ copy, locale }: KlyntiaPricingProps) {
  return (
    <section className="pricing-section section-anchor" id="planos" aria-labelledby="pricing-heading">
      <div className="site-container">
        <div className="pricing-contact-panel">
          <div className="pricing-contact-copy">
            <p className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" />{copy.pricing.eyebrow}</p>
            <h2 id="pricing-heading">{copy.pricing.heading}</h2>
            <p className="section-intro">{copy.pricing.description}</p>
            <p className="pricing-contact-note">{copy.pricing.contactNote}</p>
          </div>
          <a className="button button-primary pricing-contact-button" href={getSalesContactHref(locale)}>
            {copy.pricing.contactCta}
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
