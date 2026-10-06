import { createFileRoute, Link } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { Pricing } from "@/components/site";
import marina from "@/assets/marina.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ChatDesk AI — Atendimento, CRM e vendas com IA 24/7" },
      { name: "description", content: "Agentes de IA que atendem no WhatsApp, Instagram e site, preenchem o CRM e fecham vendas sozinhos." },
      { property: "og:title", content: "ChatDesk AI — Atendimento com IA 24/7" },
      { property: "og:description", content: "Agentes de IA para suporte, CRM e automação de vendas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useT();
  return (
    <>
      <section className="overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-14 md:pt-20 md:pb-24 md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div>
            <p className="eyebrow mb-5">{t.hero.eyebrow}</p>
            <h1 className="font-display font-extrabold leading-[0.9] text-[3.4rem] md:text-[5.5rem] -ml-[2px]">
              <span className="cd-slide">{t.hero.a}</span><br />
              <span className="text-ember">24/7</span><br />
              <span className="cd-slide" style={{ animationDelay: ".12s" }}>{t.hero.b}</span>
            </h1>
            <p className="mt-6 text-[15px] md:text-lg text-sage leading-relaxed max-w-[34ch]">{t.hero.sub}</p>
            <div className="mt-7 flex flex-col sm:flex-row gap-2.5">
              <Link to="/pricing" className="btn-ember">{t.hero.cta}</Link>
              <Link to="/features" className="btn-line">{t.hero.demo}</Link>
            </div>
            <div className="mt-7 flex items-center gap-4 text-[11px] font-mono text-sage">
              <span className="flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-ember" />{t.hero.stat1}</span>
              <span>·</span><span>{t.hero.stat2}</span>
            </div>
          </div>
          <div className="hidden md:block"><DemoInbox /></div>
        </div>
      </section>

      <section className="bg-ink text-paper py-12 md:hidden">
        <div className="max-w-md mx-auto px-4">
          <p className="eyebrow mb-4">{t.demo.label}</p>
          <DemoInbox />
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display font-bold text-[1.7rem] md:text-4xl leading-tight">{t.feat.title}</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-3">
            {t.feat.items.map(([h, p], i) => (
              <div key={h} className="card-line p-4 flex gap-3 items-start">
                <span className="size-9 shrink-0 bg-accent rounded-lg grid place-items-center font-mono text-ember text-[11px] shadow-[0_0_0_1px_var(--accent)]">0{i + 1}</span>
                <div><p className="font-semibold text-sm">{h}</p><p className="text-[13px] text-sage mt-0.5">{p}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Integrations />
      <Pricing />

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display font-bold text-[1.7rem] md:text-4xl leading-tight">{t.testi.title}</h2>
          <div className="mt-6 card-line p-5 md:p-8 max-w-2xl">
            <p className="text-[15px] md:text-xl leading-relaxed">{t.testi.quote}</p>
            <div className="mt-4 flex items-center gap-3">
              <img src={marina} alt="Marina Alves" width={816} height={816} loading="lazy" className="size-10 rounded-full object-cover" />
              <div><p className="font-semibold text-xs">Marina Alves</p><p className="text-[11px] text-sage">{t.testi.role}</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display font-bold text-[1.7rem] md:text-4xl leading-tight">{t.faq.title}</h2>
          <div className="mt-6 space-y-2 max-w-2xl">
            {t.faq.items.map(([q, a]) => (
              <details key={q} className="card-line p-4 group">
                <summary className="font-semibold text-sm cursor-pointer list-none flex justify-between">{q}<span className="text-ember group-open:rotate-45 transition-transform">+</span></summary>
                <p className="text-[13px] text-sage mt-2">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ember text-paper py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display font-extrabold text-[2.2rem] md:text-6xl leading-[0.95]">{t.cta.a}<br />{t.cta.b}</h2>
          <Link to="/pricing" className="mt-6 inline-flex btn-ink">{t.cta.btn}</Link>
        </div>
      </section>
    </>
  );
}

export function DemoInbox() {
  const { t } = useT();
  return (
    <div className="bg-paper text-ink rounded-2xl shadow-[0_0_0_1px_var(--border),0_20px_50px_-20px_var(--ink)] p-3 md:p-5">
      <div className="flex items-center justify-between border-b pb-2 mb-3">
        <span className="text-[11px] font-semibold">{t.demo.ch}</span>
        <span className="text-[10px] font-mono text-sage">online</span>
      </div>
      <div className="space-y-2 text-[12px] md:text-sm">
        <div className="bg-muted rounded-lg rounded-tl-sm px-3 py-2 max-w-[80%]">{t.demo.m1}</div>
        <div className="bg-accent shadow-[0_0_0_1px_var(--accent)] rounded-lg rounded-tr-sm px-3 py-2 max-w-[85%] ml-auto">{t.demo.m2}</div>
        <div className="bg-muted rounded-lg rounded-tl-sm px-3 py-2 max-w-[70%]">{t.demo.m3}</div>
        <div className="bg-accent rounded-lg rounded-tr-sm px-3 py-2 w-fit ml-auto flex items-center gap-1.5">{t.demo.m4} <span className="cd-blink text-ember">▍</span></div>
      </div>
      <div className="mt-3 pt-2 border-t flex items-center justify-between">
        <span className="text-[10px] font-mono text-sage">{t.demo.foot}</span>
        <span className="text-[10px] font-mono text-ember">{t.demo.ai}</span>
      </div>
    </div>
  );
}

export function Integrations() {
  const { t } = useT();
  return (
    <section className="bg-ink text-paper py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <p className="eyebrow mb-4">{t.integ.label}</p>
        <div className="grid grid-cols-3 gap-2.5">
          {t.integ.items.map(([h, p]) => (
            <div key={h} className="bg-paper/5 shadow-[0_0_0_1px_oklch(1_0_0/10%)] rounded-[12px] p-3 md:p-6 text-center">
              <p className="font-semibold text-xs md:text-base">{h}</p><p className="text-[10px] md:text-xs text-sage mt-1">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
