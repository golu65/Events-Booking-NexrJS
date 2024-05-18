// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Book Artists for Events - Hire Bands, Singers, Comedians, Celebrities, DJs - StarClinch',
//   description: 'StarClinch - India&#039;s First Online Artist Booking &amp; Discovery Portal with EMI Payment Facility. 17,000+ Local &amp; International Artists / Acts | 14 Talent Categories, 450+ Cities | Artist in Every Budget',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@200&family=Manrope:wght@300&family=Roboto+Condensed:ital,wght@1,700&display=swap"
        rel="stylesheet"></link>

      {/* <title>
      Book Artists for Events - Hire Bands, Singers, Comedians, Celebrities, DJs - StarClinch
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="StarClinch - India&#039;s First Online Artist Booking &amp; Discovery Portal with EMI Payment Facility. 17,000+ Local &amp; International Artists / Acts | 14 Talent Categories, 450+ Cities | Artist in Every Budget"
        />
        <meta property="og:title" content="StarClinch.com" />
        <meta property="og:url" content="https://starclinch.com" />
        <meta property="og:site_name" content="StarClinch" />
        <meta
          property="og:image"
          content="https://cdn.starclinch.in/starclinchcom/staticfiles/favicon.png"
        />
        <meta name="twitter:title" content="StarClinch" />
        <meta
          name="twitter:description"
          content="StarClinch - India&#039;s First Online Artist Booking &amp; Discovery Portal with EMI Payment Facility. 17,000+ Local &amp; International Artists / Acts | 14 Talent Categories, 450+ Cities | Artist in Every Budget"
        /> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
