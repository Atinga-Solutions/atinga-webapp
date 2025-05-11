import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import MouseMoveEffect from "@/components/mouse-move-effect"
import Footer from "@/components/footer-section";
import Header from "@/components/header-section";
import { AtingaLogo, TwitterLogo } from "../../public/assets/icons/Icons";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    metadataBase: new URL('https://atingasolutions.com'),
    title: {
        default: 'Atinga Solutions | Digital Infrastructure Solutions in Africa',
        template: '%s | Atinga Solutions'
    },
    description: 'Leading digital infrastructure provider in Africa, offering cloud solutions, DevOps, and custom software development to empower businesses across the continent.',
    keywords: ['digital infrastructure', 'cloud solutions', 'DevOps', 'Africa', 'technology solutions', 'IT infrastructure'],
    authors: [{ name: 'Atinga Solutions' }],
    creator: 'Atinga Solutions',
    publisher: 'Atinga Solutions',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://atingasolutions.com',
        siteName: 'Atinga Solutions',
        title: 'Atinga Solutions - Digital Infrastructure Solutions in Africa',
        description: 'Empowering African businesses with innovative technology solutions',
        images: [
            {
                url: AtingaLogo.src,
                width: 1200,
                height: 630,
                alt: 'Atinga Solutions',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Atinga Solutions - Digital Infrastructure Solutions in Africa',
        description: 'Empowering African businesses with innovative technology solutions',
        images: [
            {
                url: TwitterLogo.src
            },
        ],
        creator: '@AtingaSolutions',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
  }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}  antialiased`}
      >
        <ThemeProvider attribute='class' defaultTheme="system" enableSystem disableTransitionOnChange>
          <MouseMoveEffect />
          {children}
          <Header />
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}
