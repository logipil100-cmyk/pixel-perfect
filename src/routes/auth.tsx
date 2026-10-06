import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { useT } from "@/lib/i18n";
import { useSessionUser } from "@/hooks/use-session";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Entrar — ChatDesk AI" },
      { name: "description", content: "Entre ou crie a sua conta ChatDesk AI com email ou Google." },
      { property: "og:title", content: "Entrar — ChatDesk AI" },
      { property: "og:description", content: "Entre ou crie a sua conta ChatDesk AI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

const schema = z.object({ email: z.string().trim().email().max(255), password: z.string().min(6).max(72) });

function AuthPage() {
  const { lang } = useT();
  const pt = lang === "pt";
  const navigate = useNavigate();
  const user = useSessionUser();
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  useEffect(() => { if (user) navigate({ to: "/", replace: true }); }, [user, navigate]);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setMsg(null);
    const parsed = schema.safeParse({ email, password });
    if (!parsed.success) {
      setMsg({ ok: false, text: pt ? "Email válido e palavra-passe com 6+ caracteres." : "Valid email and a 6+ character password." });
      return;
    }
    setBusy(true);
    if (mode === "in") {
      const { error } = await supabase.auth.signInWithPassword(parsed.data);
      if (error) setMsg({ ok: false, text: pt ? "Email ou palavra-passe incorretos." : "Wrong email or password." });
    } else {
      const { error } = await supabase.auth.signUp({ ...parsed.data, options: { emailRedirectTo: window.location.origin } });
      if (error) setMsg({ ok: false, text: error.message });
      else setMsg({ ok: true, text: pt ? "Conta criada! Confirme pelo link enviado ao seu email." : "Account created! Confirm via the link sent to your email." });
    }
    setBusy(false);
  }

  async function google() {
    setMsg(null);
    const r = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (r.error) setMsg({ ok: false, text: pt ? "Não foi possível entrar com o Google." : "Google sign-in failed." });
  }

  const input = "w-full rounded-[10px] px-3 py-2.5 text-sm bg-paper shadow-[0_0_0_1px_var(--input)] outline-none focus:shadow-[0_0_0_2px_var(--ember)]";
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-sm mx-auto px-4">
        <h1 className="font-display font-bold text-3xl leading-tight">
          {mode === "in" ? (pt ? "Bem-vindo de volta." : "Welcome back.") : (pt ? "Crie a sua conta." : "Create your account.")}
        </h1>
        <button onClick={google} className="btn-line mt-6 w-full flex items-center justify-center gap-2">
          <span className="font-bold">G</span> {pt ? "Continuar com o Google" : "Continue with Google"}
        </button>
        <div className="my-5 flex items-center gap-3 text-[11px] font-mono text-sage"><span className="h-px flex-1 bg-border" />{pt ? "ou" : "or"}<span className="h-px flex-1 bg-border" /></div>
        <form onSubmit={submit} className="space-y-3">
          <input type="email" autoComplete="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={input} />
          <input type="password" autoComplete={mode === "in" ? "current-password" : "new-password"} placeholder={pt ? "Palavra-passe" : "Password"} value={password} onChange={(e) => setPassword(e.target.value)} className={input} />
          <button disabled={busy} className="btn-ember w-full disabled:opacity-60">
            {busy ? "…" : mode === "in" ? (pt ? "Entrar" : "Log in") : (pt ? "Criar conta" : "Sign up")}
          </button>
        </form>
        {msg && <p className={`mt-3 text-[13px] ${msg.ok ? "text-ink" : "text-destructive"}`}>{msg.text}</p>}
        <p className="mt-6 text-[13px] text-sage">
          {mode === "in" ? (pt ? "Ainda não tem conta?" : "No account yet?") : (pt ? "Já tem conta?" : "Already have an account?")}{" "}
          <button onClick={() => { setMode(mode === "in" ? "up" : "in"); setMsg(null); }} className="text-ink font-semibold underline">
            {mode === "in" ? (pt ? "Criar conta" : "Sign up") : (pt ? "Entrar" : "Log in")}
          </button>
        </p>
      </div>
    </section>
  );
}
