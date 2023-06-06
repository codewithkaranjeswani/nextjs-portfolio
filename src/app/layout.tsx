"use client"
import "@/src/styles/globals.css"
import Navbar from "@/src/components/Navbar"
import Footer from "@/src/components/Footer"
import { ThemeProvider } from "next-themes"
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>KJo&apos;s World!</title>
        <meta
          property="og:image"
          content="http://karanjeswani.vercel.app/api/og"
        />
      </head>
      <body className="bg-stone-200 dark:bg-stone-800 flex flex-col min-h-screen">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
