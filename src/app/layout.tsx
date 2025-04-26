import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import MouseMoveEffect from "@/components/mouse-move-effect"
import Footer from "@/components/footer-section";
import Header from "@/components/header-section";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Atinga Solutions",
  description: "tech solutions expert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
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
