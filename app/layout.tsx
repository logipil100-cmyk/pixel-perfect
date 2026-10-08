import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Klyntia AI — Atendimento ao cliente com inteligência artificial',
  description:
    'Conheça o Klyntia AI: uma abordagem organizada para conversas de suporte, respostas assistidas por IA e passagem para a equipa.',
  generator: 'v0.app',
  applicationName: 'Klyntia AI',
  openGraph: {
    title: 'Klyntia AI — Atendimento ao cliente com inteligência artificial',
    description:
      'Organize conversas de suporte, prepare respostas com apoio de IA e defina quando a equipa deve intervir.',
    siteName: 'Klyntia AI',
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Klyntia AI — Atendimento ao cliente com inteligência artificial',
    description:
      'Organize conversas de suporte e prepare respostas com apoio de IA e passagem para a equipa.',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f1e9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className="light">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
