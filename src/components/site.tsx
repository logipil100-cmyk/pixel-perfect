import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useT } from "@/lib/i18n";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="size-6 bg-ember rounded-[6px] grid place-items-center text-paper font-bold text-[11px] leading-none">C</span>
      <span className="font-display font-bold text-[15px] tracking-tight">ChatDesk</span>
    </Link>
  );
}

export function SiteHeader() {
  const { t, lang, setLang } = useT();
  const [msg, setMsg] = useState(false);
  const link = "text-sm text-sage hover:text-ink transition-colors";
  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur shadow-[0_1px_0_var(--border)]">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-7">
          <Link to="/features" className={link} activeProps={{ className: "text-ink" }}>{t.nav.features}</Link>
          <Link to="/pricing" className={link} activeProps={{ className: "text-ink" }}>{t.nav.pricing}</Link>
          <Link to="/contact" className={link} activeProps={{ className: "text-ink" }}>{t.nav.contact}</Link>
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full overflow-hidden text-[11px] font-medium shadow-[0_0_0_1px_var(--input)]">
            {(["pt", "en"] as const).map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`px-2.5 py-1 uppercase ${lang === l ? "bg-ink text-paper" : "text-sage"}`}>{l}</button>
            ))}
          </div>
          <button onClick={() => { setMsg(true); setTimeout(() => setMsg(false), 2500); }} className="bg-ink text-paper text-[11px] font-semibold px-3 py-1.5 rounded-full">{t.nav.login}</button>
        </div>
      </div>
      <nav className="md:hidden flex gap-5 px-4 pb-2 text-xs">
        <Link to="/features" className={link}>{t.nav.features}</Link>
        <Link to="/pricing" className={link}>{t.nav.pricing}</Link>
        <Link to="/contact" className={link}>{t.nav.contact}</Link>
      </nav>
      {msg && <div className="absolute right-4 top-16 bg-ink text-paper text-xs px-3 py-2 rounded-lg">{t.soon}</div>}
    </header>
  );
}

export function SiteFooter() {
  const { t } = useT();
  return (
    <footer className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <Logo />
        <div className="mt-5 grid grid-cols-2 md:flex md:gap-8 gap-y-2 text-[12px] text-sage">
          <Link to="/features">{t.nav.features}</Link>
          <Link to="/pricing">{t.nav.pricing}</Link>
          <Link to="/contact">{t.nav.contact}</Link>
        </div>
        <p className="mt-6 text-[11px] font-mono text-sage">© 2026 ChatDesk AI · suporte@chatdesk.ai</p>
      </div>
    </footer>
  );
}

export function Pricing() {
  const { t } = useT();
  const [yearly, setYearly] = useState(false);
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-display font-bold text-[1.7rem] md:text-4xl leading-tight">{t.price.title}</h2>
        <div className="mt-4 flex items-center gap-2 text-[11px] font-mono">
          <button onClick={() => setYearly(false)} className={`px-3 py-1.5 rounded-full ${!yearly ? "bg-ink text-paper" : "shadow-[0_0_0_1px_var(--input)] text-sage"}`}>{t.price.monthly}</button>
          <button onClick={() => setYearly(true)} className={`px-3 py-1.5 rounded-full ${yearly ? "bg-ink text-paper" : "shadow-[0_0_0_1px_var(--input)] text-sage"}`}>{t.price.yearly}</button>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-3">
          {t.price.plans.map(([name, p, desc, feats], i) => {
            const pop = i === 1;
            const price = yearly ? Math.round(p * 0.8) : p;
            return (
              <div key={name} className={`relative rounded-[14px] p-5 ${pop ? "bg-ink text-paper" : "card-line"}`}>
                {pop && <span className="absolute -top-2 left-4 bg-ember text-paper text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">{t.price.popular}</span>}
                <div className="flex items-center justify-between"><p className="font-semibold">{name}</p><p className="font-mono">${price}<span className="text-sage text-[11px]">{t.price.per}</span></p></div>
                <p className="text-[12px] text-sage mt-1">{desc}</p>
                <ul className="mt-4 space-y-1.5 text-[13px]">
                  {feats.map((f) => <li key={f} className="flex gap-2"><span className="text-ember">—</span>{f}</li>)}
                </ul>
                <Link to="/contact" className={`mt-5 block ${pop ? "btn-ember" : "btn-line"}`}>{i === 2 ? t.price.sales : `${t.price.choose} ${name}`}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
