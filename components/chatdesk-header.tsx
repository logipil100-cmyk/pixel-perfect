"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import { getSalesContactHref } from "@/components/chatdesk-copy"
import type { ChatDeskCopy, Locale } from "@/components/chatdesk-copy"

interface ChatDeskHeaderProps {
  copy: ChatDeskCopy
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

export function ChatDeskHeader({ copy, locale, onLocaleChange }: ChatDeskHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const contactHref = getSalesContactHref(locale)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <a className="brand" href="#inicio" aria-label={copy.header.homeLabel}>
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">ChatDesk<span className="brand-ai">AI</span></span>
        </a>

        <nav
          id="primary-navigation"
          className={`primary-nav${menuOpen ? " is-open" : ""}`}
          aria-label={copy.header.navigationLabel}
        >
          {copy.header.links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="nav-mobile-login" href={contactHref} onClick={closeMenu}>
            {copy.header.contact}
          </a>
        </nav>

        <div className="header-actions">
          <div className="language-switch" role="group" aria-label={copy.header.languageLabel}>
            <button
              type="button"
              aria-pressed={locale === "pt"}
              onClick={() => onLocaleChange("pt")}
            >
              PT
            </button>
            <button
              type="button"
              aria-pressed={locale === "en"}
              onClick={() => onLocaleChange("en")}
            >
              EN
            </button>
          </div>
          <a className="header-login" href={contactHref}>
            {copy.header.contact}
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? copy.header.menuClose : copy.header.menuOpen}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}
