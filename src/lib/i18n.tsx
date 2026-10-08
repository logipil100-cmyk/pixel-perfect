import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";

const dict = {
  pt: {
    nav: { features: "Recursos", pricing: "Preços", contact: "Contato", login: "Entrar" },
    hero: { eyebrow: "Suporte com IA · CRM · Vendas", a: "Atenda", b: "sem pausa.", sub: "O agente de IA da ChatDesk resolve o atendimento, organiza o CRM e fecha vendas — sozinho, no seu idioma.", cta: "Começar grátis", demo: "Ver demonstração", stat1: "1.2M+ msgs/dia", stat2: "40+ idiomas" },
    demo: { label: "Caixa de entrada · demo", ch: "Suporte · WhatsApp", m1: "Oi! Meu pedido #4821 chegou danificado 😕", m2: "Sinto muito! Já enviei a etiqueta de troca — chega em 48h. Posso emitir um reembolso parcial de $30 agora?", m3: "Sim, pode reembolsar 👍", m4: "Reembolso confirmado", foot: "resolvido em 6s · 0 humanos", ai: "IA ativa" },
    feat: { title: "Tudo em uma caixa de entrada.", items: [["Agente IA que resolve", "Responde, consulta o catálogo e executa ações no CRM sem escalar."], ["CRM que se preenche", "Cada conversa vira contato, histórico e oportunidade automaticamente."], ["Automação de vendas", "Follow-ups, cotações e recuperação de carrinho rodando sozinhos."]] },
    more: { title: "Feito para equipas que crescem.", items: [["Base de conhecimento", "Treine a IA com PDFs, site e FAQs em minutos."], ["Passagem para humano", "Quando o caso é difícil, a IA passa a conversa com contexto completo."], ["Relatórios em tempo real", "Veja o que foi resolvido, convertido e onde a IA travou."], ["Multi-equipa", "Permissões, filas e atribuição automática por canal."], ["Segurança", "Dados encriptados, logs de auditoria e controlo de acesso."], ["API e webhooks", "Ligue a ChatDesk a qualquer sistema."]] },
    integ: { label: "Integrações", items: [["WhatsApp", "API oficial"], ["Instagram", "DMs + comentários"], ["Website", "widget leve"]] },
    price: { title: "Escolha seu plano.", monthly: "Mensal", yearly: "Anual −20%", per: "/mês", popular: "Popular", choose: "Escolher", sales: "Falar com vendas", plans: [["Starter", 29, "1 caixa · 500 respostas IA/mês", ["1 agente de IA", "Website + e-mail", "CRM básico"]], ["Pro", 89, "3 caixas · CRM · automações ilimitadas", ["3 agentes de IA", "WhatsApp + Instagram", "Automações ilimitadas", "Relatórios"]], ["Scale", 199, "Multi-filial · SLA · SSO", ["Agentes ilimitados", "API dedicada", "SLA 99,9% · SSO", "Gestor dedicado"]]] as [string, number, string, string[]][] },
    faq: { title: "Perguntas frequentes", items: [["Preciso de cartão para testar?", "Não. O teste de 14 dias é grátis e sem cartão."], ["Posso cancelar quando quiser?", "Sim, sem multa e sem burocracia."], ["A IA fala português e inglês?", "Sim, e mais de 40 idiomas, detetados automaticamente."]] },
    testi: { title: "Quem já atende em escala.", quote: "“Cortamos o tempo de primeira resposta de 4h para 8 segundos. O time hoje cuida só dos casos difíceis.”", role: "Head de CX · Lume Store" },
    cta: { a: "Pare de perder", b: "vendas no vácuo.", btn: "Criar minha conta" },
    contact: { title: "Fale com a gente.", sub: "Um especialista responde em menos de um dia útil.", name: "Nome completo", email: "E-mail profissional", msg: "Conte o que você precisa automatizar…", send: "Enviar mensagem", ok: "Mensagem recebida! Respondemos em breve.", err: "Preencha nome, e-mail válido e mensagem." },
    soon: "Login chega na próxima fase.",
  },
  en: {
    nav: { features: "Features", pricing: "Pricing", contact: "Contact", login: "Log in" },
    hero: { eyebrow: "AI Support · CRM · Sales", a: "Support", b: "nonstop.", sub: "ChatDesk's AI agent handles support, keeps your CRM tidy and closes sales — on its own, in any language.", cta: "Start free", demo: "Watch demo", stat1: "1.2M+ msgs/day", stat2: "40+ languages" },
    demo: { label: "Inbox · demo", ch: "Support · WhatsApp", m1: "Hi! My order #4821 arrived damaged 😕", m2: "So sorry! I've sent a return label — arrives in 48h. Shall I issue a $30 partial refund now?", m3: "Yes, please refund 👍", m4: "Refund confirmed", foot: "resolved in 6s · 0 humans", ai: "AI active" },
    feat: { title: "Everything in one inbox.", items: [["An AI agent that resolves", "Answers, checks your catalog and takes CRM actions without escalating."], ["A CRM that fills itself", "Every conversation becomes a contact, history and deal automatically."], ["Sales automation", "Follow-ups, quotes and cart recovery running on their own."]] },
    more: { title: "Built for growing teams.", items: [["Knowledge base", "Train the AI on PDFs, your site and FAQs in minutes."], ["Human handoff", "For tough cases, the AI hands over with full context."], ["Real-time reports", "See what was resolved, converted and where the AI got stuck."], ["Multi-team", "Permissions, queues and auto-assignment per channel."], ["Security", "Encrypted data, audit logs and access control."], ["API & webhooks", "Connect ChatDesk to any system."]] },
    integ: { label: "Integrations", items: [["WhatsApp", "Official API"], ["Instagram", "DMs + comments"], ["Website", "lightweight widget"]] },
    price: { title: "Pick your plan.", monthly: "Monthly", yearly: "Yearly −20%", per: "/mo", popular: "Popular", choose: "Choose", sales: "Talk to sales", plans: [["Starter", 29, "1 inbox · 500 AI replies/mo", ["1 AI agent", "Website + email", "Basic CRM"]], ["Pro", 89, "3 inboxes · CRM · unlimited automations", ["3 AI agents", "WhatsApp + Instagram", "Unlimited automations", "Reports"]], ["Scale", 199, "Multi-branch · SLA · SSO", ["Unlimited agents", "Dedicated API", "99.9% SLA · SSO", "Dedicated manager"]]] as [string, number, string, string[]][] },
    faq: { title: "FAQ", items: [["Do I need a card to try?", "No. The 14-day trial is free, no card required."], ["Can I cancel anytime?", "Yes, no fees, no hassle."], ["Does the AI speak Portuguese and English?", "Yes, plus 40+ languages, auto-detected."]] },
    testi: { title: "Teams supporting at scale.", quote: "“We cut first response time from 4 hours to 8 seconds. Our team now only handles the hard cases.”", role: "Head of CX · Lume Store" },
    cta: { a: "Stop losing", b: "sales to silence.", btn: "Create my account" },
    contact: { title: "Talk to us.", sub: "A specialist replies within one business day.", name: "Full name", email: "Work email", msg: "Tell us what you want to automate…", send: "Send message", ok: "Message received! We'll reply soon.", err: "Please enter a name, valid email and message." },
    soon: "Login arrives in the next phase.",
  },
};

export type Dict = (typeof dict)["pt"];
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({ lang: "pt", setLang: () => {}, t: dict.pt });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");
  useEffect(() => {
    const s = localStorage.getItem("cd-lang");
    if (s === "en" || s === "pt") setLangState(s);
  }, []);
  const setLang = (l: Lang) => { setLangState(l); localStorage.setItem("cd-lang", l); document.documentElement.lang = l; };
  return <Ctx.Provider value={{ lang, setLang, t: dict[lang] as Dict }}>{children}</Ctx.Provider>;
}
export const useT = () => useContext(Ctx);
