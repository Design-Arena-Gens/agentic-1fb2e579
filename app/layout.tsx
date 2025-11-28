import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Video Automation Dashboard',
  description: 'Comprehensive video automation tool for trend identification, content creation, and viral optimization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
