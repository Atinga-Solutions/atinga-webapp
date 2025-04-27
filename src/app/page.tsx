/* eslint-disable @typescript-eslint/no-unused-vars */
// src/app/page.tsx

import Header from "@/components/header-section";
import HeroSection from "@/components/hero-section";
import IntuitiveFeatures from "@/components/intuitive-features";
import ServicesSection from "@/components/services-section";
import ValueProposition from "@/components/value-proposition";
import Footer from "@/components/footer-section";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Main background */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" /> */}

        {/* Primary color gradients - matches logo blue */}
        <div
          className="absolute right-0 top-0 h-[600px] w-[600px] bg-primary/10 blur-[120px] animate-pulse"
          style={{ animationDuration: '8s' }}
        />

        {/* Secondary accent gradient */}
        <div
          className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px] animate-pulse"
          style={{ animationDuration: '12s' }}
        />

        <div
          className="absolute bottom-40 right-20 h-[300px] w-[300px] bg-primary/5 blur-[80px] animate-pulse"
          style={{ animationDuration: '15s' }}
        />

        {/* Optional: grid or pattern overlay */}
        {/* <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] bg-center opacity-[0.02]" /> */}
      </div>

      <Header />
      <main>
        <HeroSection />
        <IntuitiveFeatures />
        <ServicesSection />
        <ValueProposition />
        
      </main>
      
    </div>
  );
}