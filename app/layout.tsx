import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ACG Auditores',
  description: 'ACG Auditores Consultores - Excelencia en Auditoría y Consultoría',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
