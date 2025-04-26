// src/components/stats-section.tsx
'use client'
import { useState } from "react";
import {
    Lightbulb,
    Shield,
    BarChart,
    HeadphonesIcon,
    X
} from "lucide-react";

type StatItem = {
    title: string;
    icon: React.ReactNode;
    description: string;
    metrics: { label: string; value: string }[];
};

export default function StatsSection() {
    const [selectedStat, setSelectedStat] = useState<StatItem | null>(null);

    const stats: StatItem[] = [
        {
            title: "Innovation",
            icon: <Lightbulb className="h-6 w-6 text-primary" />,
            description: "Leading the industry with cutting-edge solutions and forward-thinking approaches.",
            metrics: [
                { label: "Patent Filings", value: "20+" },
                { label: "R&D Investment", value: "$2.5M" },
                { label: "New Products (2024)", value: "6" }
            ]
        },
        {
            title: "Security",
            icon: <Shield className="h-6 w-6 text-primary" />,
            description: "Enterprise-grade protection with advanced encryption and compliance standards.",
            metrics: [
                { label: "Compliance Certifications", value: "ISO 27001" },
                { label: "Uptime Guarantee", value: "99.99%" },
                { label: "Security Audits", value: "Quarterly" }
            ]
        },
        {
            title: "Reliability",
            icon: <BarChart className="h-6 w-6 text-primary" />,
            description: "Trusted performance with scalable infrastructure and enterprise-level SLAs.",
            metrics: [
                { label: "System Uptime", value: "99.9%" },
                { label: "Active Users", value: "50K+" },
                { label: "Data Processed", value: "12TB daily" }
            ]
        },
        {
            title: "Support",
            icon: <HeadphonesIcon className="h-6 w-6 text-primary" />,
            description: "24/7 customer success teams dedicated to your business outcomes.",
            metrics: [
                { label: "Response Time", value: "<1 hour" },
                { label: "Customer Satisfaction", value: "96%" },
                { label: "Support Channels", value: "24/7" }
            ]
        }
    ];

    return (
        <div className="relative">
            {/* Stats grid */}
            <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedStat(stat)}
                        className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/30 animate-fade-in cursor-pointer hover-scale transition-all hover:border-primary/50 hover:shadow-md hover:bg-card/70 flex flex-col items-center gap-3"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="p-3 bg-primary/10 rounded-full">
                            {stat.icon}
                        </div>
                        <h3 className="text-lg font-medium text-primary">{stat.title}</h3>
                        <p className="text-xs text-muted-foreground">Click for details</p>
                    </div>
                ))}
            </div>

            {/* Detail modal */}
            {selectedStat && (
                <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
                    <div className="bg-card border border-border rounded-xl shadow-xl w-full max-w-md mx-auto animate-scale-in overflow-hidden">
                        <div className="flex items-center justify-between p-4 border-b border-border">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-full">
                                    {selectedStat.icon}
                                </div>
                                <h3 className="text-xl font-semibold">{selectedStat.title}</h3>
                            </div>
                            <button
                                onClick={() => setSelectedStat(null)}
                                className="text-muted-foreground hover:text-foreground rounded-full p-1 hover:bg-muted transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="p-6">
                            <p className="text-muted-foreground mb-6">{selectedStat.description}</p>

                            <div className="grid grid-cols-2 gap-4">
                                {selectedStat.metrics.map((metric, idx) => (
                                    <div key={idx} className="bg-background/50 p-4 rounded-lg">
                                        <p className="text-muted-foreground text-sm mb-1">{metric.label}</p>
                                        <p className="text-foreground font-semibold text-xl">{metric.value}</p>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => setSelectedStat(null)}
                                className="w-full mt-6 bg-gradient-primary text-primary-foreground font-medium py-2 px-6 rounded-lg shadow-md hover-scale inline-flex items-center justify-center"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}