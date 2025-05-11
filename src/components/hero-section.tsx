/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/hero-section.tsx

import Image from "next/image";
import Link from "next/link";
import { NavImage1, NavImage2 } from "../../public/assets/images/Images";
import StatsSection from "./stats-section";

export default function HeroSection() {
    return (
        <section className="relative px-4 pt-20 md:pt-32 pb-16 md:pb-24 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="animate-slide-in-from-top space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        <span className="text-gradient">Transform</span> Your Business With Intelligent Solutions
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                        Empowering enterprises with cutting-edge technology to innovate,
                        scale, and stay ahead in today&apos;s competitive landscape.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="/pages/contact-page"
                            className="bg-gradient-primary text-primary-foreground font-medium py-3 px-6 rounded-lg shadow-md hover-scale inline-flex items-center justify-center"
                        >
                            Request Demo
                        </Link>
                        <Link
                            href="/pages/services"
                            className="bg-secondary text-secondary-foreground border border-border py-3 px-6 rounded-lg inline-flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                            Explore Solutions
                        </Link>
                    </div>
                </div>

                {/* Image Container */}
                <div className="relative animate-fade-in h-[350px] md:h-[450px] lg:h-[500px] w-full">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl animate-pulse" style={{ animationDuration: '6s' }} />

                    <div className="relative h-full w-full rounded-2xl overflow-hidden border border-border/20 shadow-xl hover-scale transition-transform duration-600">
                        <Image
                            src={NavImage2}// Update with your actual image path
                            alt="Tech dashboard visualization"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Overlay gradient for better text visibility in both modes */}
                        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />

                        {/* Optional: Floating feature highlights */}
                        <div className="absolute bottom-8 left-8 bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border/30 shadow-lg animate-scale-in">
                            <p className="text-sm font-medium text-card-foreground">Trusted by 500+ enterprises worldwide</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Enhanced Stats Section */}
            <StatsSection />

        </section>
    );
}