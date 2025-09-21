import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CIVET - Terminal Veterinario',
  description: 'Estandarte Publicitario - Veterinaria CIVET',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="h-full">
      <body className="h-full font-corpo bg-civet-green text-corpo-black overflow-hidden">
        {/* DOCTRINA: Terminal Soberano - Layout Vertical Arquitectónico */}
        <div className="h-full">
          {children}
        </div>
      </body>
    </html>
  )
}