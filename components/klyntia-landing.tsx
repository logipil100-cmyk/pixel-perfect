"use client"

import { useState } from "react"
import { getKlyntiaCopy } from "@/components/klyntia-copy"
import type { KlyntiaCopy, Locale } from "@/components/klyntia-copy"
import { KlyntiaFeatures, KlyntiaIntegrations } from "@/components/klyntia-features"
import { KlyntiaFooter } from "@/components/klyntia-footer"
import { KlyntiaHeader } from "@/components/klyntia-header"
import { KlyntiaHero } from "@/components/klyntia-hero"
import { KlyntiaPricing } from "@/components/klyntia-pricing"
import { KlyntiaFaq, KlyntiaProcess } from "@/components/klyntia-proof"
import { getSalesContactHref } from "@/components/klyntia-copy"

function ClosingCallToAction({ copy, locale }: { copy: KlyntiaCopy; locale: Locale }) {
  return (
    <section className="cta-section">
      <div className="site-container">
        <div className="cta-panel">
          <div className="cta-copy">
            <p className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" />{copy.cta.eyebrow}</p>
            <h2>{copy.cta.heading}</h2>
            <p>{copy.cta.description}</p>
          </div>
          <div className="cta-action">
            <a className="button cta-button" href={getSalesContactHref(locale)}>
              {copy.cta.button}
              <span aria-hidden="true">→</span>
            </a>
            <span className="cta-reassurance">{copy.cta.reassurance}</span>
          </div>
          <span className="cta-orbit cta-orbit-one" aria-hidden="true" />
          <span className="cta-orbit cta-orbit-two" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

export function KlyntiaLanding() {
  const [locale, setLocale] = useState<Locale>("pt")
  const copy = getKlyntiaCopy(locale)

  return (
    <div className="page-shell" lang={locale}>
      <KlyntiaHeader copy={copy} locale={locale} onLocaleChange={setLocale} />
      <main>
        <KlyntiaHero copy={copy} />
        <KlyntiaProcess copy={copy} />
        <KlyntiaFeatures copy={copy} />
        <KlyntiaIntegrations copy={copy} />
        <KlyntiaPricing copy={copy} locale={locale} />
        <KlyntiaFaq copy={copy} locale={locale} />
        <ClosingCallToAction copy={copy} locale={locale} />
      </main>
      <KlyntiaFooter copy={copy} locale={locale} />
    </div>
  )
}
