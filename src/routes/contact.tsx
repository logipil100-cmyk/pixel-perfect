import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contato — ChatDesk AI" },
      { name: "description", content: "Fale com um especialista da ChatDesk AI. Resposta em menos de um dia útil." },
      { property: "og:title", content: "Contato — ChatDesk AI" },
      { property: "og:description", content: "Fale com a equipa ChatDesk AI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const schema = z.object({ name: z.string().trim().min(1).max(100), email: z.string().trim().email().max(255), msg: z.string().trim().min(1).max(2000) });

function Contact() {
  const { t } = useT();
  const [state, setState] = useState<"idle" | "ok" | "err">("idle");
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const r = schema.safeParse(Object.fromEntries(f));
    if (!r.success) return setState("err");
    setState("ok");
    e.currentTarget.reset();
  };
  const input = "w-full rounded-lg bg-paper px-4 py-3 text-sm shadow-[0_0_0_1px_var(--input)] focus:outline-none focus:shadow-[0_0_0_2px_var(--ember)]";
  return (
    <section className="max-w-xl mx-auto px-4 py-12 md:py-20">
      <p className="eyebrow mb-4">{t.nav.contact}</p>
      <h1 className="font-display font-extrabold text-[2.6rem] md:text-6xl leading-[0.95]">{t.contact.title}</h1>
      <p className="mt-4 text-sage">{t.contact.sub}</p>
      <form onSubmit={submit} className="mt-8 space-y-3">
        <input name="name" placeholder={t.contact.name} className={input} maxLength={100} />
        <input name="email" type="email" placeholder={t.contact.email} className={input} maxLength={255} />
        <textarea name="msg" rows={5} placeholder={t.contact.msg} className={input} maxLength={2000} />
        {state === "ok" && <p className="text-sm text-ember">{t.contact.ok}</p>}
        {state === "err" && <p className="text-sm text-destructive">{t.contact.err}</p>}
        <button className="btn-ember w-full">{t.contact.send}</button>
      </form>
    </section>
  );
}
