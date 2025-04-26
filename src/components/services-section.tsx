// src/components/services-section.tsx

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cloudImg, CustomSystems, DataAnalysisimage, DevopsImg, MobileDevImage, UiUxImage } from "../../public/assets/images/Images";

type Service = {
    title: string;
    description: string;
    image: string | StaticImageData;
    link: string;
};

export default function ServicesSection() {
    const services: Service[] = [
        {
            title: "UI/UX Design",
            description: "User-centered design that delights your customers and drives engagement with intuitive interfaces and seamless experiences.",
            image: UiUxImage,
            link: "/services/design"
        },
        {
            title: "Mobile Development",
            description: "Custom mobile applications that work flawlessly across iOS and Android, with responsive interfaces and native performance.",
            image: MobileDevImage,
            link: "/services/mobile"
        },
        {
            title: "Cloud Solutions",
            description: "Scalable infrastructure and cloud-native applications with security and performance at their core.",
            image: cloudImg,
            link: "/services/cloud"
        },
        {
            title: "DevOps Excellence",
            description: "Streamline your development pipeline with continuous integration, delivery, and automated testing frameworks.",
            image: DevopsImg,
            link: "/services/devops"
        },
        {
            title: "Custom Software",
            description: "Bespoke software solutions built from the ground up to address your unique business challenges.",
            image: CustomSystems,
            link: "/services/custom"
        },
        {
            title: "Data Analytics",
            description: "Transform raw data into actionable insights with advanced analytics, visualization, and AI-powered predictions.",
            image: DataAnalysisimage,
            link: "/services/analytics"
        }
    ];

    return (
        <section className="py-20 md:py-28 px-4 bg-secondary/30">
            <div className="mx-auto max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Our <span className="text-gradient">Tech Solutions</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Comprehensive technology services to drive your business forward, built on expertise and innovation.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative h-48 w-full">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-muted-foreground mb-4">{service.description}</p>
                                <Link
                                    href={service.link}
                                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                                >
                                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Bar */}
                <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-xl border border-primary/20 flex flex-col md:flex-row justify-between items-center animate-fade-in">
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2">Ready to explore how we can help?</h3>
                        <p className="text-muted-foreground">Discover the right solution for your specific needs.</p>
                    </div>
                    <Link
                        href="/services"
                        className="mt-4 md:mt-0 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow hover-scale inline-flex"
                    >
                        View All Services
                    </Link>
                </div>
            </div>
        </section>
    );
}