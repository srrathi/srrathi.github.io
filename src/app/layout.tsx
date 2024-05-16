import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import NavbarComponent from '@/components/navbar/Index'
import FooterComponent from '@/components/footer/footer'

const inter = Ubuntu({ weight: "300", subsets: ['latin'], display: 'swap', adjustFontFallback: false })

export const metadata: Metadata = {
  title: 'Sitaram Rathi | Software/Fullstack/Backend Developer',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <div className="bg-black w-full h-full">
          <NavbarComponent />
          <div className='mx-auto max-w-[1536px]'>
            {children}
          </div>
          <FooterComponent />
        </div>
      </body>
    </html>
  )
}
