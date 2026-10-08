import { ArrowUpRight } from "lucide-react"
import { getAffiliateContactHref, type ChatDeskCopy, type Locale } from "@/components/chatdesk-copy"

export function ChatDeskFooter({ copy, locale }: { copy: ChatDeskCopy; locale: Locale }) {
  return (
    <footer className="site-footer" id="contato">
      <div className="site-container">
        <div className="affiliate-card">
          <div className="affiliate-mark" aria-hidden="true">+</div>
          <div className="affiliate-copy">
            <strong>{copy.footer.affiliateTitle}</strong>
            <span>{copy.footer.affiliateDescription}</span>
          </div>
          <a className="button affiliate-button" href={getAffiliateContactHref(locale)}>
            {copy.footer.affiliateCta}
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="footer-main">
          <a className="brand footer-brand" href="#inicio" aria-label={copy.header.homeLabel}>
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-name">ChatDesk<span className="brand-ai">AI</span></span>
          </a>
          <span className="footer-note">{copy.footer.footerNote}</span>
          <a className="footer-email" href={`mailto:${copy.footer.email}`}>
            {copy.footer.email}
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 ChatDesk AI. {copy.footer.copyright}</span>
          <nav className="footer-links" aria-label={copy.header.navigationLabel}>
            <a href="#funcionalidades">{copy.footer.featuresLink}</a>
            <a href="#planos">{copy.footer.plansLink}</a>
            <a href="#faq">{copy.footer.faqLink}</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
