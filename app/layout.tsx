import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Akhilesh Dangi - Full Stack Developer",
  description:
    "Full Stack Developer with 3+ years experience in MEAN/MERN stack. Specialized in React, Angular, Node.js, and modern web technologies.",
  keywords: "Full Stack Developer, MEAN Stack, MERN Stack, React, Angular, Node.js, JavaScript, TypeScript",
  authors: [{ name: "Akhilesh Dangi" }],
  openGraph: {
    title: "Akhilesh Dangi - Full Stack Developer",
    description: "Full Stack Developer with 3+ years experience in MEAN/MERN stack",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
