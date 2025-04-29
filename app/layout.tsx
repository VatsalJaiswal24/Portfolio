import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { CertificateViewer } from "@/components/certificate-viewer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Interactive Portfolio",
  description: "A dark-themed interactive portfolio website showcasing skills, projects, and experience",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <CertificateViewer>{children}</CertificateViewer>
        </ThemeProvider>
      </body>
    </html>
  )
}
