import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CartProvider } from "@/context/cart-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IPL Cricket Trading Cards | Collect Your Favorites",
  description:
    "Exclusive collection of IPL cricket trading cards featuring your favorite players and teams. Limited editions, rare finds, and authenticated collectibles.",
    generator: 'v0.dev',
    other: {
      "google-site-verification": "ljr-D1ZEg_anUFzonIVGhn5fzbAS7kImResYAWEdNEQ"
    },
    keywords: ["IPL trading cards", "Cricket Attax", "IPL collectibles", "Rare cricket cards", "Virat Kohli cards", "RCB collectibles", "Mumbai Indians trading cards", "Cricket cards India"],
  authors: [{ name: "Jayom" }],
  creator: "Jayom",
  publisher: "IPL Trading Cards",
  metadataBase: new URL('https://ipl-trading-cards-cricket-attax.vercel.app'),

  openGraph: {
    title: "IPL Cricket Trading Cards | Collect Your Favorites",
    description: "Discover and collect exclusive IPL trading cards featuring your favorite cricket superstars. Limited editions and rare finds await you!",
    url: "https://ipl-trading-cards-cricket-attax.vercel.app",
    siteName: "IPL Trading Cards",
    images: [
      {
        url: "https://ipl-trading-cards-cricket-attax.vercel.app/og-image.jpg", // Create this image
        width: 1200,
        height: 630,
        alt: "IPL Trading Cards Collection",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "IPL Cricket Trading Cards | Collect Your Favorites",
    description: "Explore exclusive IPL cards of your favorite cricket legends. Limited editions, rare collectibles, and more.",
    creator: "@your_twitter_handle", // Optional if you have Twitter
    images: ["https://ipl-trading-cards-cricket-attax.vercel.app/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'