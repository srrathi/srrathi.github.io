import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import NavbarComponent from '@/components/navbar/Index'
import FooterComponent from '@/components/footer/footer'
import { GoogleTagManager } from '@next/third-parties/google'
import LoaderComponent from '@/components/loader'

const inter = Ubuntu({ weight: "300", subsets: ['latin'], display: 'swap', adjustFontFallback: false })

export const metadata: Metadata = {
  metadataBase: new URL("https://imrathi.vercel.app"),
  title: "Sitaram Rathi | Software/Fullstack/Backend Developer",
  description:
    "I’m Sitaram Rathi, a Full Stack Developer 👨‍💻. I expertise in creating frontend and backend web applications using React, Nodejs, Golang, AWS, Firebase, Serverless, Cloud Functions, Pub/Sub, Express, Mongodb, MySQL, Nextjs, Typescript. I also have experience with deploying and hosting scalable applications and services. I'm looking for FT roles in Software Development.",
  robots: 'index, follow',
  openGraph: {
    title: "Sitaram Rathi | Software/Fullstack/Backend Developer",
    description:
      "I’m Sitaram Rathi, a Full Stack Developer 👨‍💻. I expertise in creating frontend and backend web applications using React, Nodejs, Golang, AWS, Firebase, Serverless, Cloud Functions, Pub/Sub, Express, Mongodb, MySQL, Nextjs, Typescript. I also have experience with deploying and hosting scalable applications and services. I'm looking for FT roles in Software Development.",
    images: '/SR.webp',
    siteName: "Sitaram Rathi | Software/Fullstack/Backend Developer"
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sitaram Rathi | Software/Fullstack/Backend Developer",
    description:
      "I’m Sitaram Rathi, a Full Stack Developer 👨‍💻. I expertise in creating frontend and backend web applications using React, Nodejs, Golang, AWS, Firebase, Serverless, Cloud Functions, Pub/Sub, Express, Mongodb, MySQL, Nextjs, Typescript. I also have experience with deploying and hosting scalable applications and services. I'm looking for FT roles in Software Development.",
    images: '/SR.webp',
    site: "Sitaram Rathi | Software/Fullstack/Backend Developer"
  }
};

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
        <GoogleTagManager gtmId="G-TCXDYQHMH5" />
      </head>
      <body className={inter.className}>
        <div className="root-background w-full h-full">
          <LoaderComponent />
          <NavbarComponent />
          <div className='mx-auto bg-black max-w-[1536px]'>
            {children}
          </div>
          <FooterComponent />
        </div>
      </body>
    </html>
  )
}
