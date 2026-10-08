"use client"

import { useState } from "react"
import { getChatDeskCopy } from "@/components/chatdesk-copy"
import type { ChatDeskCopy, Locale } from "@/components/chatdesk-copy"
import { ChatDeskFeatures, ChatDeskIntegrations } from "@/components/chatdesk-features"
import { ChatDeskFooter } from "@/components/chatdesk-footer"
import { ChatDeskHeader } from "@/components/chatdesk-header"
import { ChatDeskHero } from "@/components/chatdesk-hero"
import { ChatDeskPricing } from "@/components/chatdesk-pricing"
import { ChatDeskFaq, ChatDeskProcess } from "@/components/chatdesk-proof"
import { getSalesContactHref } from "@/components/chatdesk-copy"

function ClosingCallToAction({ copy, locale }: { copy: ChatDeskCopy; locale: Locale }) {
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

export function ChatDeskLanding() {
  const [locale, setLocale] = useState<Locale>("pt")
  const copy = getChatDeskCopy(locale)

  return (
    <div className="page-shell" lang={locale}>
      <ChatDeskHeader copy={copy} locale={locale} onLocaleChange={setLocale} />
      <main>
        <ChatDeskHero copy={copy} />
        <ChatDeskProcess copy={copy} />
        <ChatDeskFeatures copy={copy} />
        <ChatDeskIntegrations copy={copy} />
        <ChatDeskPricing copy={copy} locale={locale} />
        <ChatDeskFaq copy={copy} locale={locale} />
        <ClosingCallToAction copy={copy} locale={locale} />
      </main>
      <ChatDeskFooter copy={copy} locale={locale} />
    </div>
  )
}
