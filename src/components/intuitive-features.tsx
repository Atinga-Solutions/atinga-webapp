// src/components/intuitive-features.tsx

import Image from "next/image";
import { Code, Cloud, Smartphone, Palette, Cog, GitBranch } from "lucide-react";
import { DashboardImg } from "../../public/assets/images/Images";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function IntuitiveFeatures() {
  const features: Feature[] = [
    {
      title: "Modern UI/UX Design",
      description:
        "Create delightful user experiences with our award-winning design team's expertise.",
      icon: <Palette className="h-8 w-8 text-primary" />,
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable, secure infrastructure that grows with your business needs.",
      icon: <Cloud className="h-8 w-8 text-primary" />,
    },
    {
      title: "Mobile Development",
      description:
        "Native and cross-platform solutions for iOS and Android ecosystems.",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
    },
    {
      title: "Custom Software",
      description:
        "Bespoke software solutions tailored to your unique business challenges.",
      icon: <Code className="h-8 w-8 text-primary" />,
    },
    {
      title: "DevOps Excellence",
      description:
        "Streamline your development workflow with CI/CD and modern practices.",
      icon: <GitBranch className="h-8 w-8 text-primary" />,
    },
    {
      title: "System Integration",
      description:
        "Seamlessly connect your existing systems with new technologies.",
      icon: <Cog className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 mx-auto max-w-7xl">
      <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Intuitive Technology <span className="text-gradient">Solutions</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Our platform combines powerful capabilities with user-friendly
          experiences to help you achieve more with less effort.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-card/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-border/30 hover:border-primary/30 transition-all hover:shadow-lg hover-scale"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="p-3 bg-primary/10 rounded-lg inline-flex mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Visual Section with Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
        <div className="order-2 lg:order-1 animate-slide-in-from-top">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Accelerate Your{" "}
            <span className="text-gradient">Digital Transformation</span>
          </h3>
          <p className="text-muted-foreground mb-6">
            Our intuitive platform helps businesses of all sizes streamline
            operations, increase productivity, and drive innovation. With a
            focus on usability and powerful features, we make technology work
            for you.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Reduce implementation time by up to 60%",
              "Increase team productivity and collaboration",
              "Scale seamlessly as your business grows",
              "Enterprise-grade security and compliance",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="inline-flex h-5 w-5 mr-2 rounded-full bg-primary/20 text-primary items-center justify-center text-xs">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 lg:order-2 relative h-[350px] md:h-[450px] animate-fade-in">
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl animate-pulse"
            style={{ animationDuration: "8s" }}
          />
          <div className="relative h-full w-full rounded-2xl overflow-hidden border border-border/20 shadow-xl">
            <Image
              src={DashboardImg}// Update with actual image
              alt="Intuitive platform dashboard"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
