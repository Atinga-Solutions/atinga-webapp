// src/app/page.tsx

import Footer from "@/components/footer-section";
import Header from "@/components/header-section";


export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Main background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        
        {/* Primary color gradients - matches logo blue */}
        <div className="absolute right-0 top-0 h-[600px] w-[600px] bg-primary/10 blur-[120px] animate-pulse" 
             style={{ animationDuration: '8s' }} />
        
        {/* Secondary accent gradient */}
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px] animate-pulse" 
             style={{ animationDuration: '12s' }} />
        
        {/* Subtle accent gradient */}
        <div className="absolute bottom-40 right-20 h-[300px] w-[300px] bg-primary/5 blur-[80px] animate-pulse" 
             style={{ animationDuration: '15s' }} />
        
        {/* Optional: grid or pattern overlay */}
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] bg-center opacity-[0.02]" />
      </div>

      <div className="relative z-10">
        <Header />
        
        {/* Hero section placeholder - you can expand on this */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Innovative Tech Solutions
                </span> 
                <br />for Modern Businesses
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Transforming ideas into powerful digital solutions tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Get Started
                </button>
                <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Placeholder for the footer section */}
        <footer className="mb-0">
          <Footer />
        </footer>
      </div>
    </div>
  )
}