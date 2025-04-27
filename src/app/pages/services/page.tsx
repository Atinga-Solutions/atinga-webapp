// src/app/services/page.tsx

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { cloudImg, CustomSystems, DataAnalysisimage, DevopsImg, MobileDevImage, UiUxImage } from "../../../../public/assets/images/Images";

// Define type for service detail
type ServiceDetail = {
    title: string;
    description: string;
    image: StaticImageData;
    longDescription: string;
    benefits: string[];
    technologies: string[];
};

export default function ServicesPage() {
    // Extended service details
    const serviceDetails: ServiceDetail[] = [
        {
            title: "UI/UX Design",
            description: "User-centered design that delights your customers and drives engagement with intuitive interfaces and seamless experiences.",
            image: UiUxImage,
            longDescription: "Our design team crafts interfaces that are not only visually stunning but also intuitive and efficient. We combine user research, wireframing, prototyping, and usability testing to create designs that truly resonate with your target audience.",
            benefits: [
                "Increase user engagement and satisfaction",
                "Reduce development costs through early prototype testing",
                "Create consistent brand experiences across platforms",
                "Improve conversion rates with optimized user flows"
            ],
            technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "User Testing"],
        },
        {
            title: "Mobile Development",
            description: "Custom mobile applications that work flawlessly across iOS and Android, with responsive interfaces and native performance.",
            image: MobileDevImage,
            longDescription: "From concept to launch, we build mobile applications that provide seamless experiences across all devices. Our cross-platform expertise ensures your app delivers consistent value whether on iOS or Android, without compromising on performance or design.",
            benefits: [
                "Reach users on any device with cross-platform solutions",
                "Native-like performance with modern frameworks",
                "Offline capabilities for uninterrupted usage",
                "Streamlined deployment and maintenance"
            ],
            technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
        },
        {
            title: "Cloud Solutions",
            description: "Scalable infrastructure and cloud-native applications with security and performance at their core.",
            image: cloudImg,
            longDescription: "Our cloud experts architect and implement reliable, scalable, and secure infrastructure solutions. We help businesses leverage the full potential of cloud platforms to reduce costs, improve operational efficiency, and enable rapid innovation.",
            benefits: [
                "Reduce infrastructure costs with pay-as-you-go models",
                "Scale resources dynamically based on demand",
                "Enhance security with modern cloud-native patterns",
                "Achieve high availability and disaster recovery"
            ],
            technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Terraform", "Docker"],
        },
        {
            title: "DevOps Excellence",
            description: "Streamline your development pipeline with continuous integration, delivery, and automated testing frameworks.",
            image: DevopsImg,
            longDescription: "Our DevOps practices accelerate your software delivery lifecycle while maintaining high quality and reliability. We implement automation, monitoring, and collaboration tools that bridge the gap between development and operations teams.",
            benefits: [
                "Faster time-to-market with automated pipelines",
                "Improved code quality through automated testing",
                "Reduced downtime with monitoring and alerting",
                "Consistent environments from development to production"
            ],
            technologies: ["Jenkins", "GitHub Actions", "GitLab CI", "Ansible", "Prometheus", "Grafana"],
        },
        {
            title: "Custom Software",
            description: "Bespoke software solutions built from the ground up to address your unique business challenges.",
            image: CustomSystems,
            longDescription: "When off-the-shelf solutions fall short, our custom software development services deliver precisely what your business needs. We work closely with stakeholders to understand requirements, design future-proof architecture, and implement robust solutions that grow with your business.",
            benefits: [
                "Perfectly aligned with your specific business processes",
                "Competitive advantage through proprietary solutions",
                "Seamless integration with existing systems",
                "Full ownership and control of your software assets"
            ],
            technologies: ["JavaScript/TypeScript", "Python", "Java", "C#", ".NET", "Node.js", "React", "Angular", "Vue"],
        },
        {
            title: "Data Analytics",
            description: "Transform raw data into actionable insights with advanced analytics, visualization, and AI-powered predictions.",
            image: DataAnalysisimage,
            longDescription: "Our data specialists help you harness the power of your information assets. From data warehousing and business intelligence to advanced analytics and machine learning models, we provide end-to-end solutions that turn data into a strategic advantage.",
            benefits: [
                "Data-driven decision making across your organization",
                "Identify trends and opportunities with predictive analytics",
                "Automate reporting with interactive dashboards",
                "Extract insights from unstructured data with AI"
            ],
            technologies: ["Python", "R", "TensorFlow", "Power BI", "Tableau", "Snowflake", "BigQuery"],
        }
    ];

    // Map service titles to their respective slugs for dynamic routing
    const serviceSlugMap: { [key: string]: string } = {
        "UI/UX Design": "design",
        "Mobile Development": "mobile",
        "Cloud Solutions": "cloud",
        "DevOps Excellence": "devops",
        "Custom Software": "custom",
        "Data Analytics": "analytics"
    };

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 px-4 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/5 dark:from-primary/20 dark:to-blue-500/10" />
                    <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-30" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto animate-fade-in">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Our <span className="text-gradient">Services</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                            Comprehensive technology solutions tailored to drive your business forward
                        </p>
   
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section id="services" className="py-16 md:py-24 px-4 bg-secondary/30 dark:bg-secondary/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Comprehensive <span className="text-gradient">Tech Solutions</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            We offer end-to-end technology services to help businesses transform,
                            innovate, and stay ahead of the competition.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceDetails.map((service, index) => (
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
                                        href={`/pages/services/${serviceSlugMap[service.title]}`}
                                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                                    >
                                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Service Sections */}
            {serviceDetails.map((service, index) => (
                <section
                    id={service.title.toLowerCase().replace(/\s+/g, '-')}
                    key={index}
                    className={`py-20 md:py-28 px-4 ${index % 2 === 0 ? 'bg-background' : 'bg-secondary/20 dark:bg-secondary/5'}`}
                >
                    <div className="max-w-7xl mx-auto">
                        <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                            {/* Image Section */}
                            <div className="w-full lg:w-1/2 animate-fade-in">
                                <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden border border-border shadow-lg">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-1/2 animate-fade-in">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    {service.title}
                                </h2>
                                <p className="text-lg mb-6 text-muted-foreground">
                                    {service.longDescription}
                                </p>

                                <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                                <ul className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {service.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h3 className="text-xl font-semibold mb-4">Technologies</h3>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {service.technologies.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-4">

                                    <Link
                                        href={`/pages/services/${serviceSlugMap[service.title]}`}
                                        className="inline-flex items-center bg-secondary text-secondary-foreground px-6 py-3 rounded-lg border border-border hover-scale"
                                    >
                                        Full Service Details <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Process Section */}
            <section className="py-20 md:py-28 px-4 bg-gradient-to-br from-primary/10 to-blue-500/5 dark:from-primary/20 dark:to-blue-500/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Our <span className="text-gradient">Process</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            We follow a proven methodology that ensures transparency, collaboration,
                            and successful outcomes for every project.
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Discovery",
                                description: "We start by understanding your business, goals, and technical requirements through in-depth discovery sessions."
                            },
                            {
                                step: "02",
                                title: "Strategy",
                                description: "Our team develops a comprehensive roadmap, defining the technical approach, timeline, and key milestones."
                            },
                            {
                                step: "03",
                                title: "Development",
                                description: "Using agile methodologies, we build your solution with regular demos and feedback loops to ensure alignment."
                            },
                            {
                                step: "04",
                                title: "Launch & Support",
                                description: "We ensure a smooth deployment and provide ongoing maintenance and support to keep your solution operating at peak performance."
                            }
                        ].map((process, index) => (
                            <div
                                key={index}
                                className="bg-card rounded-xl border border-border p-6 animate-fade-in hover-scale"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="text-4xl font-bold text-primary/80 mb-4">
                                    {process.step}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                                <p className="text-muted-foreground">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-20 md:py-28 px-4 bg-secondary/30 dark:bg-secondary/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Our <span className="text-gradient">Technology Stack</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            We leverage cutting-edge technologies to deliver modern, robust, and scalable solutions.
                        </p>
                    </div>

                    {/* Tech Categories */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                category: "Frontend",
                                technologies: ["React", "Next.js", "Vue", "Angular", "TailwindCSS", "TypeScript"]
                            },
                            {
                                category: "Backend",
                                technologies: ["Node.js", "Python", "Java", "C#/.NET", "Go", "PHP"]
                            },
                            {
                                category: "Database",
                                technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Elasticsearch"]
                            },
                            {
                                category: "DevOps",
                                technologies: ["Docker", "Kubernetes", "AWS", "Azure", "Google Cloud", "CI/CD"]
                            },
                            {
                                category: "Mobile",
                                technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "PWA"]
                            },
                            {
                                category: "Data & AI",
                                technologies: ["TensorFlow", "PyTorch", "Pandas", "Spark", "BigQuery", "Power BI"]
                            }
                        ].map((techGroup, index) => (
                            <div
                                key={index}
                                className="bg-card rounded-xl border border-border p-6 animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <h3 className="text-xl font-semibold mb-4">{techGroup.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {techGroup.technologies.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 rounded-2xl p-8 md:p-12 border border-primary/20 animate-fade-in">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Ready to Transform Your Business?
                                </h2>
                                <p className="text-lg mb-6 text-muted-foreground">
                                    Let&apos;s discuss how our expertise can help you achieve your
                                    technology goals and drive your business forward.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact-us"
                                        className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg border border-border hover-scale"
                                    >
                                        Get in Touch
                                    </Link>

                                </div>
                            </div>
                            <div className="relative w-full max-w-md h-64">
                                <div className="absolute inset-0 bg-primary/20 rounded-lg animate-pulse" />
                                <div className="absolute inset-2 bg-card rounded-lg border border-border flex items-center justify-center">
                                    <div className="text-center p-6">
                                        <h3 className="text-xl font-semibold mb-2">Need a custom solution?</h3>
                                        <p className="text-muted-foreground mb-4">
                                            Schedule a free consultation with our experts
                                        </p>
                                        <Link
                                            href="/contact-us"
                                            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                                        >
                                            Book Now <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}