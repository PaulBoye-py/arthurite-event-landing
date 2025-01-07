import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Arthurite Integrated - Transformative Cloud Innovations - AWS Partner Event 2025',
  description: 'This landmark conference by Arthurite Integrated is bringing together tech pioneers and business leaders to explore the limitless potential of AWS cloud technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        {children}
        <Toaster />
        </body>
    </html>
  )
}

