"use client";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>👋 Hi I&apos;m Karan!</title>
        <meta
          property="og:image"
          content="https://karanjeswani.vercel.app/api/og"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@karanjeswani306" />
        <meta name="twitter:title" content="👋 Hi I'm Karan!" />
        <meta name="twitter:description" content="Karan Jeswani's Portfolio" />
        <meta
          name="twitter:image"
          content="https://karanjeswani.vercel.app/api/og"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
