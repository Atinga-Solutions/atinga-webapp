// src/components/value-proposition.tsx
'use client'
import { useState } from 'react';
import { CheckCircle, Award, Users, TrendingUp, X } from 'lucide-react';

export default function ValueProposition() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    const values = [
        {
            icon: <CheckCircle className="h-8 w-8 text-primary" />,
            title: "Quality Assurance",
            description: "Our rigorous quality assurance process ensures that every solution we deliver meets the highest standards."
        },
        {
            icon: <Award className="h-8 w-8 text-primary" />,
            title: "Industry Expertise",
            description: "With over a decade of experience across multiple industries, we understand your unique challenges."
        },
        {
            icon: <Users className="h-8 w-8 text-primary" />,
            title: "Dedicated Support",
            description: "Our customer success teams provide 24/7 support to ensure your systems run smoothly."
        },
        {
            icon: <TrendingUp className="h-8 w-8 text-primary" />,
            title: "Scalable Solutions",
            description: "Our technology grows with your business, from startup to enterprise-scale operations."
        }
    ];

    return (
        <section className="relative py-20 md:py-28 px-4">
            {/* Background accent */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="mx-auto max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Why Choose <span className="text-gradient">Our Solutions</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We deliver value through innovation, expertise, and a relentless focus on your success.
                    </p>
                </div>

                {/* Value Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="flex gap-5 animate-slide-in-from-right"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="shrink-0 p-3 bg-primary/10 h-fit rounded-lg">
                                {value.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                <p className="text-muted-foreground">{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto animate-fade-in shadow-lg">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Ready to <span className="text-gradient">Transform</span> Your Business?
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Get a personalized quote tailored to your specific needs and discover how our solutions can help you achieve your business goals.
                    </p>
                    <button
                        onClick={() => setIsQuoteModalOpen(true)}
                        className="bg-gradient-primary text-primary-foreground font-medium py-3 px-8 rounded-lg shadow-md hover-scale inline-flex items-center justify-center text-lg"
                    >
                        Get a Custom Quote
                    </button>
                </div>

                {/* Quote Request Modal */}
                {isQuoteModalOpen && (
                    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
                        <div className="bg-card border border-border rounded-xl shadow-xl w-full max-w-lg mx-auto animate-scale-in overflow-hidden">
                            <div className="flex items-center justify-between p-4 border-b border-border">
                                <h3 className="text-xl font-semibold">Request a Custom Quote</h3>
                                <button
                                    onClick={() => setIsQuoteModalOpen(false)}
                                    className="text-muted-foreground hover:text-foreground rounded-full p-1 hover:bg-muted transition-colors"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="p-6">
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                                                Full Name
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                className="w-full p-2 rounded-md border border-border bg-background focus:ring-1 focus:ring-primary focus:border-primary"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-muted-foreground mb-1">
                                                Company
                                            </label>
                                            <input
                                                id="company"
                                                type="text"
                                                className="w-full p-2 rounded-md border border-border bg-background focus:ring-1 focus:ring-primary focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="w-full p-2 rounded-md border border-border bg-background focus:ring-1 focus:ring-primary focus:border-primary"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-muted-foreground mb-1">
                                            Service of Interest
                                        </label>
                                        <select
                                            id="service"
                                            className="w-full p-2 rounded-md border border-border bg-background focus:ring-1 focus:ring-primary focus:border-primary"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="design">UI/UX Design</option>
                                            <option value="mobile">Mobile Development</option>
                                            <option value="cloud">Cloud Solutions</option>
                                            <option value="devops">DevOps</option>
                                            <option value="custom">Custom Software</option>
                                            <option value="analytics">Data Analytics</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                                            Project Details
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full p-2 rounded-md border border-border bg-background focus:ring-1 focus:ring-primary focus:border-primary resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-primary text-primary-foreground font-medium py-2 px-6 rounded-lg shadow-md hover-scale inline-flex items-center justify-center"
                                    >
                                        Submit Request
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}