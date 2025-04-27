// src/app/services/[slug]/page.tsx

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Clock, Users, BarChart4, Code, FileCode2, Laptop } from "lucide-react";
import { notFound } from "next/navigation";
import { cloudImg, CustomSystems, DataAnalysisimage, DevopsImg, MobileDevImage, UiUxImage } from "../../../../../public/assets/images/Images";

// Define comprehensive service details type
type DetailedService = {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    image: StaticImageData; // Assuming you're using Next.js StaticImageData for images
    heroImage: StaticImageData; // Can be the same as image if needed
    longDescription: string;
    approach: {
        title: string;
        description: string;
        icon: React.ReactNode;
    }[];
    benefits: {
        title: string;
        description: string;
    }[];
    features: string[];
    technologies: {
        name: string;
        logo?: string; // Optional logo path
    }[];
    process: {
        step: string;
        title: string;
        description: string;
    }[];
    faqs: {
        question: string;
        answer: string;
    }[];
    caseStudies: {
        title: string;
        description: string;
        image: StaticImageData;
        link: string;
    }[];
    relatedServices: string[]; // Slugs of related services
};

// Service data (in a real app, this would come from a CMS or API)
const servicesData: DetailedService[] = [
    {
        slug: "design",
        title: "UI/UX Design",
        subtitle: "Create intuitive and engaging user experiences",
        description: "User-centered design that delights your customers and drives engagement with intuitive interfaces and seamless experiences.",
        image: UiUxImage,
        heroImage: UiUxImage,
        longDescription: "Our UI/UX design services focus on creating digital experiences that are not only visually appealing but also highly functional and user-friendly. We begin by understanding your users' needs, behaviors, and pain points through comprehensive research. This foundation allows us to design interfaces that feel intuitive and natural, guiding users effortlessly toward their goals while reinforcing your brand identity. Our iterative design process combines creativity with usability testing to ensure the final product exceeds expectations and delivers measurable results.",
        approach: [
            {
                title: "User Research",
                description: "We conduct in-depth research to understand your users' needs, behaviors, and pain points to inform our design decisions.",
                icon: <Users className="h-8 w-8 text-primary" />
            },
            {
                title: "Information Architecture",
                description: "We organize content and features in a logical structure that makes navigation intuitive and helps users find what they need quickly.",
                icon: <BarChart4 className="h-8 w-8 text-primary" />
            },
            {
                title: "Wireframing & Prototyping",
                description: "We create low and high-fidelity prototypes to visualize concepts and test interactions before final implementation.",
                icon: <FileCode2 className="h-8 w-8 text-primary" />
            },
            {
                title: "Visual Design",
                description: "We craft visually stunning interfaces that align with your brand identity while prioritizing usability and accessibility.",
                icon: <Laptop className="h-8 w-8 text-primary" />
            }
        ],
        benefits: [
            {
                title: "Increased User Engagement",
                description: "Intuitive interfaces keep users engaged longer, reducing bounce rates and increasing time spent with your product."
            },
            {
                title: "Higher Conversion Rates",
                description: "Streamlined user journeys and clear call-to-actions significantly improve conversion metrics."
            },
            {
                title: "Reduced Development Costs",
                description: "Identifying usability issues early through prototyping prevents expensive changes later in development."
            },
            {
                title: "Brand Differentiation",
                description: "Distinctive and polished design helps your product stand out in a crowded marketplace."
            }
        ],
        features: [
            "User Research & Persona Development",
            "Information Architecture",
            "Wireframing & Interactive Prototyping",
            "Visual Design & UI Systems",
            "Usability Testing",
            "Accessibility Compliance",
            "Design Systems & Component Libraries",
            "Motion & Interaction Design"
        ],
        technologies: [
            { name: "Figma" },
            { name: "Adobe XD" },
            { name: "Sketch" },
            { name: "InVision" },
            { name: "Principle" },
            { name: "Zeplin" },
            { name: "Adobe Creative Suite" },
            { name: "Maze" }
        ],
        process: [
            {
                step: "01",
                title: "Discovery",
                description: "We analyze your business goals, user needs, and current pain points to establish clear design objectives."
            },
            {
                step: "02",
                title: "Research",
                description: "We conduct user interviews, surveys, and competitive analysis to gather insights and identify opportunities."
            },
            {
                step: "03",
                title: "Design",
                description: "We create wireframes, visual designs, and interactive prototypes with multiple review and feedback cycles."
            },
            {
                step: "04",
                title: "Testing",
                description: "We validate designs through usability testing with real users to identify and address any issues."
            },
            {
                step: "05",
                title: "Handoff",
                description: "We deliver comprehensive design specifications and assets to development teams for implementation."
            }
        ],
        faqs: [
            {
                question: "How long does a typical UI/UX design project take?",
                answer: "Project timelines vary depending on complexity and scope, but most design projects take between 4-12 weeks from discovery to final handoff. We'll provide a detailed timeline during our initial consultation."
            },
            {
                question: "Do you create design systems?",
                answer: "Yes, we specialize in creating comprehensive design systems that ensure consistency across your digital products and make future updates more efficient. Our design systems include component libraries, style guides, and usage documentation."
            },
            {
                question: "How do you handle accessibility in your designs?",
                answer: "Accessibility is integrated into our design process from the beginning. We follow WCAG guidelines to ensure our designs are usable by people with various disabilities, including visual, motor, auditory, and cognitive impairments."
            },
            {
                question: "Can you work with our existing brand guidelines?",
                answer: "Absolutely. We can either work within your established brand guidelines or help you extend them for digital applications. If you don't have brand guidelines, we can help create them as part of our process."
            }
        ],
        caseStudies: [
            {
                title: "Financial App Redesign",
                description: "Increased user engagement by 75% with an intuitive redesign of a complex financial dashboard.",
                image: UiUxImage,
                link: "/case-studies/financial-app-redesign"
            },
            {
                title: "E-commerce UX Optimization",
                description: "Improved conversion rates by 40% through streamlined checkout flows and enhanced product discovery.",
                image: UiUxImage,
                link: "/case-studies/ecommerce-optimization"
            }
        ],
        relatedServices: ["mobile", "custom"]
    },
    {
        slug: "mobile",
        title: "Mobile Development",
        subtitle: "Native and cross-platform mobile applications",
        description: "Custom mobile applications that work flawlessly across iOS and Android, with responsive interfaces and native performance.",
        image: MobileDevImage,
        heroImage: MobileDevImage,
        longDescription: "Our mobile development team creates powerful, feature-rich applications that deliver exceptional user experiences across all devices. Whether you need native iOS and Android apps or prefer a cross-platform solution, we have the expertise to build mobile software that meets your specific business requirements. From concept to store deployment, we handle every aspect of the mobile development lifecycle, ensuring your app is reliable, secure, and scalable. Our focus on performance optimization and intuitive design results in mobile solutions that users love and that drive measurable business results.",
        approach: [
            {
                title: "Platform Strategy",
                description: "We help you decide between native, cross-platform, or hybrid approaches based on your specific requirements and constraints.",
                icon: <Code className="h-8 w-8 text-primary" />
            },
            {
                title: "User-Centered Design",
                description: "We create mobile interfaces that follow platform guidelines while delivering intuitive and engaging user experiences.",
                icon: <Users className="h-8 w-8 text-primary" />
            },
            {
                title: "Agile Development",
                description: "We use iterative development methodologies to deliver working features quickly and adapt to changing requirements.",
                icon: <Clock className="h-8 w-8 text-primary" />
            },
            {
                title: "Performance Optimization",
                description: "We ensure your app runs smoothly even on older devices, with fast load times and efficient resource usage.",
                icon: <BarChart4 className="h-8 w-8 text-primary" />
            }
        ],
        benefits: [
            {
                title: "Multi-Platform Reach",
                description: "Reach your audience regardless of what devices they prefer to use, maximizing your market potential."
            },
            {
                title: "Enhanced Customer Engagement",
                description: "Mobile apps provide direct access to users, enabling push notifications and personalized experiences."
            },
            {
                title: "Offline Functionality",
                description: "Unlike websites, mobile apps can offer full or partial functionality even without internet connection."
            },
            {
                title: "Device Feature Integration",
                description: "Leverage device capabilities like cameras, GPS, biometrics, and sensors for rich functionality."
            }
        ],
        features: [
            "Native iOS Development (Swift/SwiftUI)",
            "Native Android Development (Kotlin)",
            "Cross-Platform Development (React Native, Flutter)",
            "Offline Support & Data Synchronization",
            "Push Notifications & Real-time Updates",
            "Integration with Device Features",
            "Payment Gateway Integration",
            "App Store Optimization & Deployment"
        ],
        technologies: [
            { name: "Swift" },
            { name: "Kotlin" },
            { name: "React Native" },
            { name: "Flutter" },
            { name: "Firebase" },
            { name: "GraphQL" },
            { name: "Realm" },
            { name: "Redux" }
        ],
        process: [
            {
                step: "01",
                title: "Requirements Analysis",
                description: "We define the core functionality, target platforms, and technical requirements for your mobile application."
            },
            {
                step: "02",
                title: "UI/UX Design",
                description: "We create platform-specific designs that follow iOS and Android guidelines while maintaining your brand identity."
            },
            {
                step: "03",
                title: "Development",
                description: "We build your app iteratively, with regular builds you can test and provide feedback on throughout the process."
            },
            {
                step: "04",
                title: "Testing",
                description: "We conduct thorough testing across multiple devices, screen sizes, and OS versions to ensure quality."
            },
            {
                step: "05",
                title: "Deployment & Support",
                description: "We handle app store submissions and provide ongoing support and maintenance after launch."
            }
        ],
        faqs: [
            {
                question: "Should I build a native app or a cross-platform app?",
                answer: "This depends on your requirements. Native apps offer the best performance and access to all platform features, while cross-platform solutions like React Native or Flutter can reduce development time and cost when you need to target multiple platforms. We'll help you make the right choice based on your specific needs."
            },
            {
                question: "How long does it take to develop a mobile app?",
                answer: "Development timelines vary based on complexity, but typically range from 3-6 months for the initial version. Simple apps might take less time, while complex applications with multiple integrations may take longer."
            },
            {
                question: "Do you provide app maintenance after launch?",
                answer: "Yes, we offer ongoing maintenance packages to ensure your app stays compatible with new OS versions, incorporates user feedback, and remains secure against emerging threats."
            },
            {
                question: "Can you help with app store submissions?",
                answer: "Absolutely. We handle the entire submission process for both the Apple App Store and Google Play Store, including preparing all required assets, configuring store listings, and addressing any review feedback."
            }
        ],
        caseStudies: [
            {
                title: "Fitness Tracking App",
                description: "Developed a cross-platform fitness app with real-time workout tracking and social features.",
                image: MobileDevImage,
                link: "/case-studies/fitness-app"
            },
            {
                title: "Enterprise Field Service Solution",
                description: "Built a native mobile solution for field technicians that works offline in remote locations.",
                image: MobileDevImage,
                link: "/case-studies/field-service-app"
            }
        ],
        relatedServices: ["design", "cloud"]
    },
    {
        slug: "cloud",
        title: "Cloud Solutions",
        subtitle: "Scalable and secure cloud infrastructure",
        description: "Scalable infrastructure and cloud-native applications with security and performance at their core.",
        image: cloudImg,
        heroImage: cloudImg,
        longDescription: "Our cloud solutions enable businesses to leverage the full potential of modern cloud platforms like AWS, Azure, and Google Cloud. We design and implement robust cloud architectures that scale with your business, optimize costs, and ensure high availability. From cloud migration and infrastructure automation to implementing serverless architectures and containerized applications, our experts provide end-to-end cloud services tailored to your specific needs. We place a strong emphasis on security, compliance, and operational excellence, ensuring your cloud environment is not just powerful but also reliable and well-governed.",
        approach: [
            {
                title: "Cloud-First Architecture",
                description: "We design solutions that take full advantage of cloud capabilities rather than just migrating existing architectures.",
                icon: <Code className="h-8 w-8 text-primary" />
            },
            {
                title: "Infrastructure as Code",
                description: "We automate infrastructure provisioning and configuration to ensure consistency and enable rapid scaling.",
                icon: <FileCode2 className="h-8 w-8 text-primary" />
            },
            {
                title: "Security by Design",
                description: "We integrate security at every layer of the cloud architecture to protect your data and applications.",
                icon: <Laptop className="h-8 w-8 text-primary" />
            },
            {
                title: "Cost Optimization",
                description: "We implement strategies to minimize cloud spending while maintaining performance and reliability.",
                icon: <BarChart4 className="h-8 w-8 text-primary" />
            }
        ],
        benefits: [
            {
                title: "Scalability on Demand",
                description: "Easily handle traffic spikes and growth without pre-investing in hardware or capacity planning."
            },
            {
                title: "Reduced Operational Costs",
                description: "Pay only for resources you use, converting capital expenditures to predictable operational expenses."
            },
            {
                title: "Increased Reliability",
                description: "Leverage multi-region deployment and automated failover to achieve high availability."
            },
            {
                title: "Faster Time to Market",
                description: "Accelerate development and deployment cycles by removing infrastructure provisioning bottlenecks."
            }
        ],
        features: [
            "Cloud Migration & Modernization",
            "Infrastructure as Code (Terraform, CloudFormation)",
            "Containerization & Kubernetes Orchestration",
            "Serverless Architecture Implementation",
            "Multi-Cloud & Hybrid Cloud Solutions",
            "Cloud Security & Compliance",
            "CI/CD Pipeline Integration",
            "Disaster Recovery & Backup Solutions"
        ],
        technologies: [
            { name: "AWS" },
            { name: "Microsoft Azure" },
            { name: "Google Cloud" },
            { name: "Kubernetes" },
            { name: "Docker" },
            { name: "Terraform" },
            { name: "Ansible" },
            { name: "CloudFormation" }
        ],
        process: [
            {
                step: "01",
                title: "Assessment",
                description: "We evaluate your current infrastructure, requirements, and identify the best cloud strategy for your needs."
            },
            {
                step: "02",
                title: "Architecture Design",
                description: "We create a detailed cloud architecture blueprint optimized for performance, security, and cost."
            },
            {
                step: "03",
                title: "Implementation",
                description: "We deploy your infrastructure using Infrastructure as Code for consistency and repeatability."
            },
            {
                step: "04",
                title: "Migration",
                description: "We move your applications and data to the cloud with minimal disruption to your operations."
            },
            {
                step: "05",
                title: "Optimization",
                description: "We continuously monitor and optimize your cloud environment for performance and cost efficiency."
            }
        ],
        faqs: [
            {
                question: "Which cloud provider should I choose?",
                answer: "The best provider depends on your specific needs. AWS offers the broadest service portfolio, Azure integrates well with Microsoft products, and Google Cloud excels in data analytics and ML. We can help you evaluate options based on your requirements and may even recommend a multi-cloud approach in some cases."
            },
            {
                question: "How secure is cloud computing?",
                answer: "With proper implementation, cloud environments can be more secure than traditional on-premises infrastructure. We implement defense-in-depth security measures including network security, identity management, encryption, and continuous monitoring to protect your cloud resources."
            },
            {
                question: "How do you handle cloud cost management?",
                answer: "We implement various cost optimization strategies including right-sizing resources, utilizing spot/reserved instances, implementing auto-scaling, and setting up detailed cost monitoring. We also provide regular cost analysis reports with optimization recommendations."
            },
            {
                question: "Can you migrate our legacy applications to the cloud?",
                answer: "Yes, we have extensive experience migrating various types of applications to the cloud. Depending on your application, we might recommend strategies like lift-and-shift, re-platforming, or re-architecting to get the maximum benefit from cloud capabilities."
            }
        ],
        caseStudies: [
            {
                title: "E-commerce Platform Migration",
                description: "Migrated a high-traffic e-commerce platform to AWS, reducing infrastructure costs by 40%.",
                image: cloudImg,
                link: "/case-studies/ecommerce-cloud-migration"
            },
            {
                title: "Serverless Application Architecture",
                description: "Built a scalable event-processing system using serverless technologies that handles millions of events daily.",
                image: cloudImg,
                link: "/case-studies/serverless-architecture"
            }
        ],
        relatedServices: ["devops", "custom"]
    },
    {
        slug: "devops",
        title: "DevOps Excellence",
        subtitle: "Streamline development and operations",
        description: "Streamline your development pipeline with continuous integration, delivery, and automated testing frameworks.",
        image: DevopsImg,
        heroImage: DevopsImg,
        longDescription: "Our DevOps services focus on breaking down silos between development and operations to deliver software faster and more reliably. We implement automated pipelines for building, testing, and deploying applications, enabling continuous integration and continuous delivery (CI/CD). Our approach emphasizes infrastructure as code, comprehensive monitoring, and collaborative practices that increase development velocity while maintaining stability. By embracing DevOps culture and tools, we help organizations reduce time-to-market, improve system reliability, and increase the frequency of successful deployments.",
        approach: [
            {
                title: "Automation First",
                description: "We automate repetitive tasks including testing, building, and deployment to improve speed and consistency.",
                icon: <Code className="h-8 w-8 text-primary" />
            },
            {
                title: "Infrastructure as Code",
                description: "We manage infrastructure through code, ensuring consistent environments and enabling version control.",
                icon: <FileCode2 className="h-8 w-8 text-primary" />
            },
            {
                title: "Observability",
                description: "We implement comprehensive monitoring, logging, and alerting to provide full system visibility.",
                icon: <BarChart4 className="h-8 w-8 text-primary" />
            },
            {
                title: "Continuous Improvement",
                description: "We establish metrics and feedback loops to constantly refine and optimize your delivery pipeline.",
                icon: <Clock className="h-8 w-8 text-primary" />
            }
        ],
        benefits: [
            {
                title: "Faster Time to Market",
                description: "Automate software delivery to deploy new features and fixes more frequently and reliably."
            },
            {
                title: "Improved System Stability",
                description: "Comprehensive testing and gradual rollouts reduce the risk of production incidents."
            },
            {
                title: "More Efficient Teams",
                description: "Eliminate manual work and context switching, allowing engineers to focus on creating value."
            },
            {
                title: "Cost Reduction",
                description: "Automate resource provisioning and decommissioning to optimize infrastructure costs."
            }
        ],
        features: [
            "CI/CD Pipeline Implementation",
            "Infrastructure as Code (Terraform, Ansible)",
            "Containerization & Kubernetes Orchestration",
            "Monitoring & Observability Solutions",
            "Automated Testing Integration",
            "Configuration Management",
            "Security Automation (DevSecOps)",
            "Cloud Native Transformations"
        ],
        technologies: [
            { name: "Jenkins" },
            { name: "GitHub Actions" },
            { name: "GitLab CI" },
            { name: "Docker" },
            { name: "Kubernetes" },
            { name: "Terraform" },
            { name: "Prometheus" },
            { name: "Grafana" }
        ],
        process: [
            {
                step: "01",
                title: "Assessment",
                description: "We evaluate your current development process and identify opportunities for automation and improvement."
            },
            {
                step: "02",
                title: "Pipeline Design",
                description: "We design CI/CD pipelines tailored to your specific workflow and technology stack."
            },
            {
                step: "03",
                title: "Implementation",
                description: "We implement automation tools, infrastructure as code, and monitoring solutions."
            },
            {
                step: "04",
                title: "Knowledge Transfer",
                description: "We train your team on the new tools and practices to ensure adoption and self-sufficiency."
            },
            {
                step: "05",
                title: "Continuous Optimization",
                description: "We continuously measure and refine the DevOps processes based on performance metrics."
            }
        ],
        faqs: [
            {
                question: "How long does it take to implement a DevOps transformation?",
                answer: "DevOps is a journey rather than a destination. Initial pipeline setup can be completed in 4-8 weeks, but cultural change and full adoption typically takes 6-12 months. We focus on delivering incremental value throughout the process."
            },
            {
                question: "How do you handle security in a DevOps environment?",
                answer: "We integrate security at every stage of the development lifecycle (DevSecOps). This includes code scanning, dependency analysis, container security, and automated compliance checks as part of the CI/CD pipeline."
            },
            {
                question: "Which CI/CD tools do you recommend?",
                answer: "We work with various tools including Jenkins, GitHub Actions, GitLab CI, CircleCI, and Azure DevOps. The best choice depends on your existing tech stack, team familiarity, and specific requirements."
            },
            {
                question: "How do you measure DevOps success?",
                answer: "We track metrics like deployment frequency, lead time for changes, mean time to recovery, and change failure rate. These metrics help quantify the business impact of DevOps practices."
            }
        ],
        caseStudies: [
            {
                title: "Financial Services CI/CD Transformation",
                description: "Reduced deployment time from weeks to hours for a regulated financial services company.",
                image: DevopsImg,
                link: "/case-studies/financial-devops"
            },
            {
                title: "E-commerce Platform Reliability",
                description: "Improved system stability and reduced downtime by 99% through DevOps practices.",
                image: DevopsImg,
                link: "/case-studies/ecommerce-reliability"
            }
        ],
        relatedServices: ["cloud", "custom"]
    },
    {
        slug: "custom",
        title: "Custom Software",
        subtitle: "Tailored software solutions for your business",
        description: "Bespoke software solutions built from the ground up to address your unique business challenges.",
        image: CustomSystems,
        heroImage: CustomSystems,
        longDescription: "Our custom software development services deliver tailor-made solutions that precisely match your business requirements. When off-the-shelf software falls short, we create purpose-built applications that streamline operations, enhance customer experiences, and provide a competitive edge. From enterprise applications and workflow automation to customer-facing portals and industry-specific solutions, our development team combines technical expertise with business acumen to deliver software that creates real value. We use modern, scalable architectures and follow best practices to ensure your custom solution is maintainable, secure, and adaptable to future needs.",
        approach: [
            {
                title: "Requirements Engineering",
                description: "We conduct thorough analysis to understand your exact needs and translate them into technical specifications.",
                icon: <Users className="h-8 w-8 text-primary" />
            },
            {
                title: "Agile Development",
                description: "We use iterative development methodologies with regular demos and feedback to ensure alignment with your vision.",
                icon: <Clock className="h-8 w-8 text-primary" />
            },
            {
                title: "Quality-Driven",
                description: "We implement comprehensive testing strategies to ensure your software works flawlessly under all conditions.",
                icon: <CheckCircle className="h-8 w-8 text-primary" />
            },
            {
                title: "Future-Proof Architecture",
                description: "We design systems that can scale and adapt to changing business requirements and technologies.",
                icon: <Code className="h-8 w-8 text-primary" />
            }
        ],
        benefits: [
            {
                title: "Perfect Fit Solution",
                description: "Get software that precisely matches your business processes rather than forcing your business to adapt to software."
            },
            {
                title: "Competitive Advantage",
                description: "Differentiate your business with unique software capabilities that competitors don't have access to."
            },
            {
                title: "Integration Capability",
                description: "Custom software can seamlessly connect with your existing systems and third-party applications."
            },
            {
                title: "Ownership and Control",
                description: "Maintain full control over your software's features, updates, and roadmap without dependence on vendor decisions."
            }
        ],
        features: [
            "Enterprise Application Development",
            "Workflow Automation Systems",
            "Customer & Partner Portals",
            "Legacy System Modernization",
            "Industry-Specific Solutions",
            "Integration & API Development",
            "Database Design & Optimization",
            "Real-time Analytics & Reporting"
        ],
        technologies: [
            { name: "JavaScript/TypeScript" },
            { name: "Python" },
            { name: "Java" },
            { name: "C#/.NET" },
            { name: "React/Angular/Vue" },
            { name: "Node.js" },
            { name: "PostgreSQL/MySQL" },
            { name: "MongoDB" }
        ],
        process: [
            {
                step: "01",
                title: "Discovery",
                description: "We work with stakeholders to understand your business processes, pain points, and objectives."
            },
            {
                step: "02",
                title: "Planning",
                description: "We create detailed specifications, technology choices, and a development roadmap."
            },
            {
                step: "03",
                title: "Development",
                description: "We build your software in iterative sprints with regular demos and feedback sessions."
            },
            {
                step: "04",
                title: "Quality Assurance",
                description: "We conduct thorough testing to ensure reliability, security, and performance."
            },
            {
                step: "05",
                title: "Deployment & Support",
                description: "We provide smooth deployment, training, and ongoing support and maintenance."
            }
        ],
        faqs: [
            {
                question: "How much does custom software development cost?",
                answer: "Custom software is an investment that varies widely based on complexity and requirements. Small to medium projects typically range from $50,000 to $250,000, while enterprise-level solutions can be $250,000+. We provide detailed estimates after understanding your specific needs."
            },
            {
                question: "How long will it take to develop my custom software?",
                answer: "Development timelines depend on scope and complexity. Simple applications may take 3-6 months, while complex enterprise systems often require 6-12+ months. We focus on delivering value incrementally, so you'll see working software early in the process."
            },
            {
                question: "Do you provide support after the software is launched?",
                answer: "Yes, we offer various support and maintenance packages to ensure your software continues to run smoothly. This includes bug fixes, security updates, performance optimization, and assistance with new feature development."
            },
            {
                question: "Who owns the intellectual property for the developed software?",
                answer: "Our standard agreements transfer full ownership of the custom software to you upon final payment. This includes all source code, documentation, and related assets. We believe your custom software should truly be yours."
            }
        ],
        caseStudies: [
            {
                title: "Manufacturing Operations System",
                description: "Developed a custom ERP module that increased production efficiency by 35%.",
                image: CustomSystems,
                link: "/case-studies/manufacturing-erp"
            },
            {
                title: "Healthcare Patient Portal",
                description: "Built a secure patient engagement platform that improved satisfaction scores by 45%.",
                image: CustomSystems,
                link: "/case-studies/healthcare-portal"
            }
        ],
        relatedServices: ["design", "mobile", "cloud"]
    },
    {
        slug: "analytics",
        title: "Data Analytics",
        subtitle: "Transform data into actionable insights",
        description: "Transform raw data into actionable insights with advanced analytics, visualization, and AI-powered predictions.",
        image: DataAnalysisimage,
        heroImage: DataAnalysisimage,
        longDescription: "Our data analytics services help businesses make sense of their data and leverage it for strategic advantage. We combine expertise in data engineering, business intelligence, and machine learning to build comprehensive analytics solutions that drive better decision-making. From data warehousing and ETL processes to interactive dashboards and predictive models, we implement end-to-end data pipelines that transform raw information into valuable insights. Our approach emphasizes data quality, scalable architecture, and accessible visualizations that make complex information understandable to stakeholders at all levels.",
        approach: [
            {
                title: "Data Strategy",
                description: "We help you define a comprehensive data strategy aligned with your business objectives and use cases.",
                icon: <BarChart4 className="h-8 w-8 text-primary" />
            },
            {
                title: "Data Engineering",
                description: "We build robust data pipelines and storage solutions that ensure data quality and accessibility.",
                icon: <Code className="h-8 w-8 text-primary" />
            },
            {
                title: "Visualization & BI",
                description: "We create intuitive dashboards and reports that make data insights accessible to all stakeholders.",
                icon: <Laptop className="h-8 w-8 text-primary" />
            },
            {
                title: "Advanced Analytics",
                description: "We implement predictive models and machine learning algorithms to uncover deeper insights.",
                icon: <FileCode2 className="h-8 w-8 text-primary" />
            }
        ],
        benefits: [
            {
                title: "Data-Driven Decisions",
                description: "Replace guesswork with objective analysis based on reliable data and proven methodologies."
            },
            {
                title: "Operational Efficiency",
                description: "Identify bottlenecks, optimize processes, and reduce costs through data-backed insights and automation."
            },
            {
                title: "Competitive Intelligence",
                description: "Gain strategic advantage by understanding market trends and customer behaviors ahead of competitors."
            },
            {
                title: "Proactive Problem Solving",
                description: "Anticipate issues and opportunities with predictive analytics instead of reacting after the fact."
            }
        ],
        features: [
            "Data Warehousing & ETL Solutions",
            "Business Intelligence Dashboards",
            "Predictive Analytics & Forecasting",
            "Machine Learning Implementation",
            "Big Data Processing Frameworks",
            "Real-time Analytics Systems",
            "Custom Reporting Solutions",
            "Data Visualization Tools"
        ],
        technologies: [
            { name: "Python" },
            { name: "R" },
            { name: "Tableau" },
            { name: "Power BI" },
            { name: "AWS/Azure/GCP Data Services" },
            { name: "TensorFlow/PyTorch" },
            { name: "Apache Spark" },
            { name: "SQL/NoSQL Databases" }
        ],
        process: [
            {
                step: "01",
                title: "Data Assessment",
                description: "We evaluate your current data assets, quality, and identify gaps that need to be addressed."
            },
            {
                step: "02",
                title: "Data Architecture",
                description: "We design a scalable data architecture that can accommodate growing volumes and complexity."
            },
            {
                step: "03",
                title: "Implementation",
                description: "We build data pipelines, storage solutions, and analytics tools tailored to your needs."
            },
            {
                step: "04",
                title: "Visualization",
                description: "We create interactive dashboards and reports that make insights accessible to stakeholders."
            },
            {
                step: "05",
                title: "Continuous Improvement",
                description: "We refine models and analytics based on feedback and evolving business requirements."
            }
        ],
        faqs: [
            {
                question: "What types of data can you work with?",
                answer: "We work with structured data (databases, spreadsheets), semi-structured data (JSON, XML), and unstructured data (text, images, videos). Our solutions can integrate data from multiple sources including internal systems, third-party applications, and public data sets."
            },
            {
                question: "Do I need a data warehouse?",
                answer: "It depends on your data volume, complexity, and analytical needs. For organizations with multiple data sources and advanced analytics requirements, a data warehouse or lake provides significant benefits. We can help you evaluate whether this investment makes sense for your situation."
            },
            {
                question: "How do you ensure data quality and governance?",
                answer: "We implement data quality frameworks that include validation rules, cleaning procedures, and monitoring tools. For governance, we establish metadata management, access controls, and audit trails to ensure compliance with regulations and internal policies."
            },
            {
                question: "Can you integrate with our existing systems?",
                answer: "Yes, we design our analytics solutions to integrate with your existing IT infrastructure. We can connect to databases, applications, cloud services, and IoT devices through APIs, webhooks, or custom connectors."
            }
        ],
        caseStudies: [
            {
                title: "Retail Customer Analytics",
                description: "Increased conversion rates by 27% through customer segmentation and personalized marketing.",
                image: DataAnalysisimage,
                link: "/case-studies/retail-analytics"
            },
            {
                title: "Supply Chain Optimization",
                description: "Reduced inventory costs by 18% through predictive demand forecasting and route optimization.",
                image: DataAnalysisimage,
                link: "/case-studies/supply-chain-analytics"
            }
        ],
        relatedServices: ["cloud", "custom"]
    }
];

// Function to find a service by slug
function getServiceBySlug(slug: string): DetailedService | undefined {
    return servicesData.find(service => service.slug === slug);
}

// Get related services by slug array
function getRelatedServices(slugs: string[]): DetailedService[] {
    return servicesData.filter(service => slugs.includes(service.slug));
}

// Page component that handles the dynamic route
export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const service = getServiceBySlug(params.slug);
    
    if (!service) {
        notFound();
    }
    
    const relatedServices = getRelatedServices(service.relatedServices);
    
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-20 pb-16 md:pt-24 md:pb-20">
                <div className="container px-4 mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
                        <div className="w-full md:w-1/2 space-y-6">
                            <Link href="/services" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-2">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Services
                            </Link>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{service.title}</h1>
                            <p className="text-xl text-muted-foreground">{service.subtitle}</p>
                            <div className="mt-4">
                                <p className="text-lg leading-relaxed">{service.longDescription}</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 mt-8 md:mt-0">
                            <div className="rounded-xl overflow-hidden shadow-lg">
                                <Image 
                                    src={service.heroImage} 
                                    alt={service.title}
                                    width={700}
                                    height={450}
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Approach Section */}
            <section className="py-16 bg-muted/50">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Approach</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {service.approach.map((item, index) => (
                            <div key={index} className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Benefits Section */}
            <section className="py-16">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Key Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {service.benefits.map((benefit, index) => (
                            <div key={index} className="border border-border rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-muted-foreground">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Features Section */}
            <section className="py-16 bg-muted/50">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-8">
                        {service.features.map((feature, index) => (
                            <div key={index} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                <p>{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Process Section */}
            <section className="py-16">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {service.process.map((step, index) => (
                            <div key={index} className="border border-border rounded-xl p-6 relative">
                                <div className="text-4xl font-bold text-primary/20 absolute top-4 right-4">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Technologies Section */}
            <section className="py-16 bg-muted/50">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Technologies We Use</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {service.technologies.map((tech, index) => (
                            <div key={index} className="bg-background px-4 py-2 rounded-full border border-border">
                                {tech.name}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* FAQ Section */}
            <section className="py-16">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6 max-w-3xl mx-auto">
                        {service.faqs.map((faq, index) => (
                            <div key={index} className="border border-border rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                                <p className="text-muted-foreground">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Case Studies Section */}
            <section className="py-16 bg-muted/50">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Case Studies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {service.caseStudies.map((caseStudy, index) => (
                            <Link href={caseStudy.link} key={index} className="group">
                                <div className="rounded-xl overflow-hidden shadow-md transition-all group-hover:shadow-lg">
                                    <div className="relative h-52">
                                        <Image 
                                            src={caseStudy.image}
                                            alt={caseStudy.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6 bg-card">
                                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{caseStudy.title}</h3>
                                        <p className="text-muted-foreground">{caseStudy.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Related Services Section */}
            <section className="py-16">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Related Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedServices.map((relatedService, index) => (
                            <Link href={`/services/${relatedService.slug}`} key={index} className="group">
                                <div className="border border-border rounded-xl p-6 h-full transition-all group-hover:border-primary/50 group-hover:shadow-md">
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{relatedService.title}</h3>
                                    <p className="text-muted-foreground">{relatedService.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* CTA Section */}
            <section className="py-16 bg-primary/5">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Contact us today to discuss how our {service.title.toLowerCase()} services can help your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-medium">
                            Contact Us
                        </Link>
                        <Link href="/case-studies" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-8 py-3 rounded-md font-medium">
                            View Case Studies
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}