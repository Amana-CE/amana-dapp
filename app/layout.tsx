import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// import { AuthProvider } from "@/contexts/auth-context"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Amana CE - Transforming SACCO Operations with Blockchain",
  description:
    "Amana Chain Entities (Amana CE) is a blockchain-based platform built on Cardano that transforms how SACCOs operate through innovative features.",
  generator: 'v0.dev',
  // Simple favicon
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="min-h-full bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <head>
        {/* Removed additional favicon links for simplicity */}
      </head>
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900`}>
        {/* <AuthProvider> */}
          {children}
          <Toaster />
        {/* </AuthProvider> */}
      </body>
    </html>
  )
}