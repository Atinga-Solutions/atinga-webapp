/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
    Briefcase,
    Code,
    Database,
    Layout,
    Search,
    Clock,
    MapPin,
    CheckCircle,
    ChevronRight,
    Upload
} from 'lucide-react'
import { JobApplicationFormData, sendGeneralInquiry, sendJobApplication } from '@/utils/careers-email-config'

// Add this schema before your component
const generalFormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().min(10, {
        message: "Please enter a valid phone number.",
    }),
    message: z.string().min(10, {
        message: "Please provide some information about your background and interests.",
    }),
});

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().min(10, {
        message: "Please enter a valid phone number.",
    }),
    position: z.string().min(1, {
        message: "Please select a position.",
    }),
    resume: z.string().min(1, {
        message: "Please upload your resume.",
    }),
    coverLetter: z.string().optional(),
    portfolio: z.string().url().optional().or(z.literal('')),
})

type JobCategory = 'all' | 'engineering' | 'design' | 'product' | 'operations';

interface JobListing {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    requirements: string[];
    category: JobCategory;
    isRemote: boolean;
}

const Careers = () => {
    const [activeTab, setActiveTab] = useState<JobCategory>('all');
    const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitResult, setSubmitResult] = useState<{ success: boolean, message: string } | null>(null);
    const [generalFormOpen, setGeneralFormOpen] = useState(false);
    const generalForm = useForm<z.infer<typeof generalFormSchema>>({
        resolver: zodResolver(generalFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            position: selectedJob?.title || "",
            resume: "",
            coverLetter: "",
            portfolio: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSubmitting(true);
        setSubmitResult(null);

        // For real file uploads, you would first upload the resume to a storage service
        // and then get back a URL to include in the email
        const resumeLink = "Resume would be uploaded to storage in production";

        const applicationData: JobApplicationFormData = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            position: values.position,
            resumeLink: resumeLink, // In production, this would be a link to the uploaded file
            coverLetter: values.coverLetter,
            portfolio: values.portfolio,
        };

        try {
            const result = await sendJobApplication(applicationData);

            if (result.success) {
                setSubmitResult({
                    success: true,
                    message: "Your application has been submitted successfully! We'll be in touch soon."
                });
                form.reset();
                // Wait a moment before redirecting back to all positions
                setTimeout(() => {
                    setSelectedJob(null);
                }, 3000);
            } else {
                setSubmitResult({
                    success: false,
                    message: "There was a problem submitting your application. Please try again."
                });
            }
        } catch (error) {
            setSubmitResult({
                success: false,
                message: "An unexpected error occurred. Please try again later."
            });
            console.error("Application submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };
    const onSubmitGeneralInquiry = async (values: z.infer<typeof generalFormSchema>) => {
        setIsSubmitting(true);

        try {
            const result = await sendGeneralInquiry({
                name: values.name,
                email: values.email,
                phone: values.phone,
                message: values.message,
                subject: "General Employment Inquiry"
            });

            if (result.success) {
                setSubmitResult({
                    success: true,
                    message: "Your inquiry has been submitted successfully! We'll be in touch soon."
                });
                generalForm.reset();
                setTimeout(() => {
                    setGeneralFormOpen(false);
                    setSubmitResult(null);
                }, 3000);
            } else {
                setSubmitResult({
                    success: false,
                    message: "There was a problem submitting your inquiry. Please try again."
                });
            }
        } catch (error) {
            setSubmitResult({
                success: false,
                message: "An unexpected error occurred. Please try again later."
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Sample job listings
    const jobListings: JobListing[] = [
        {
            id: 1,
            title: "Senior Full Stack Developer",
            department: "Engineering",
            location: "Nairobi, Kenya",
            type: "Full-time",
            description: "We're looking for an experienced Full Stack Developer to join our team working on our core platform. You'll be responsible for building new features, optimizing performance, and ensuring high code quality.",
            requirements: [
                "5+ years of experience with JavaScript/TypeScript",
                "Experience with React, Next.js and Node.js",
                "Understanding of database design and SQL/NoSQL databases",
                "Experience with cloud platforms (AWS/Azure/GCP)",
                "Strong problem-solving skills and attention to detail"
            ],
            category: "engineering",
            isRemote: true
        },
        {
            id: 2,
            title: "UX/UI Designer",
            department: "Design",
            location: "Nairobi, Kenya",
            type: "Full-time",
            description: "Join our design team to create intuitive and engaging user experiences for our products. You'll work closely with product managers and developers to bring designs from concept to implementation.",
            requirements: [
                "3+ years of experience in UX/UI design",
                "Proficiency with design tools (Figma, Sketch)",
                "Portfolio demonstrating UI design and interaction patterns",
                "Experience conducting user research and usability testing",
                "Strong communication and collaboration skills"
            ],
            category: "design",
            isRemote: true
        },
        {
            id: 3,
            title: "Product Manager",
            department: "Product",
            location: "Nairobi, Kenya",
            type: "Full-time",
            description: "We're seeking a Product Manager to help define product vision, strategy and roadmap. You'll work with cross-functional teams to deliver solutions that meet user needs and business objectives.",
            requirements: [
                "3+ years of experience in product management",
                "Experience with agile methodologies",
                "Strong analytical skills and data-driven approach",
                "Excellent communication and stakeholder management",
                "Technical background preferred"
            ],
            category: "product",
            isRemote: false
        },
        {
            id: 4,
            title: "DevOps Engineer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            description: "Help build and maintain our cloud infrastructure, CI/CD pipelines, and deployment processes. You'll ensure our systems are secure, scalable, and highly available.",
            requirements: [
                "Experience with cloud platforms (AWS/Azure/GCP)",
                "Knowledge of containerization (Docker, Kubernetes)",
                "Experience with Infrastructure as Code (Terraform, CloudFormation)",
                "Understanding of CI/CD principles and tools",
                "Strong scripting skills (Bash, Python)"
            ],
            category: "engineering",
            isRemote: true
        },
        {
            id: 5,
            title: "Data Analyst",
            department: "Operations",
            location: "Nairobi, Kenya",
            type: "Full-time",
            description: "Join our data team to analyze user behavior, business metrics, and market trends. You'll provide insights that drive product decisions and business strategy.",
            requirements: [
                "Experience with SQL and data analysis tools",
                "Proficiency in data visualization (Tableau, PowerBI, etc.)",
                "Statistical analysis skills",
                "Experience with Python or R for data processing",
                "Strong communication skills to present findings"
            ],
            category: "operations",
            isRemote: false
        }
    ];

    // Filter jobs based on active tab and search query
    const filteredJobs = jobListings.filter(job => {
        const matchesCategory = activeTab === 'all' || job.category === activeTab;
        const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const resetApplication = () => {
        setSelectedJob(null);
        form.reset();
    };

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'engineering':
                return <Code className="h-5 w-5" />;
            case 'design':
                return <Layout className="h-5 w-5" />;
            case 'product':
                return <Briefcase className="h-5 w-5" />;
            case 'operations':
                return <Database className="h-5 w-5" />;
            default:
                return <Briefcase className="h-5 w-5" />;
        }
    };

    return (
        <div className="relative min-h-screen">
            {/* Background gradients */}


            <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
                    {/* Header */}
                    <div className="text-center mb-12 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Join Our <span className="text-gradient">Team</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            We&apos;re looking for talented individuals who are passionate about technology and innovation.
                            Explore our open positions and find the perfect fit for your skills and career goals.
                        </p>
                    </div>

                    {/* Job Application Content */}
                    {selectedJob ? (
                        <div className="animate-fade-in">
                            <Button
                                variant="ghost"
                                onClick={resetApplication}
                                className="mb-6 hover-scale"
                            >
                                &larr; Back to all positions
                            </Button>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Job Details */}
                                <div className="md:col-span-1">
                                    <Card className="sticky top-24">
                                        <CardHeader>
                                            <CardTitle className="text-xl">{selectedJob.title}</CardTitle>
                                            <CardDescription className="flex items-center gap-2">
                                                {getCategoryIcon(selectedJob.category)}
                                                {selectedJob.department}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <MapPin className="h-4 w-4" />
                                                <span>{selectedJob.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Clock className="h-4 w-4" />
                                                <span>{selectedJob.type}</span>
                                            </div>

                                            <div className="pt-4">
                                                <h4 className="font-medium mb-2">Description</h4>
                                                <p className="text-muted-foreground">{selectedJob.description}</p>
                                            </div>

                                            <div className="pt-2">
                                                <h4 className="font-medium mb-2">Requirements</h4>
                                                <ul className="space-y-2">
                                                    {selectedJob.requirements.map((req, index) => (
                                                        <li key={index} className="flex items-start gap-2">
                                                            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                            <span className="text-muted-foreground">{req}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Application Form */}
                                <div className="md:col-span-2">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Apply for {selectedJob.title}</CardTitle>
                                            <CardDescription>
                                                Please fill out the form below to apply for this position
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Form {...form}>
                                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <FormField
                                                            control={form.control}
                                                            name="name"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Full Name</FormLabel>
                                                                    <FormControl>
                                                                        <Input placeholder="John Doe" {...field} />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />

                                                        <FormField
                                                            control={form.control}
                                                            name="email"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Email</FormLabel>
                                                                    <FormControl>
                                                                        <Input placeholder="johndoe@example.com" {...field} />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <FormField
                                                            control={form.control}
                                                            name="phone"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Phone Number</FormLabel>
                                                                    <FormControl>
                                                                        <Input placeholder="+254 700 000000" {...field} />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />

                                                        <FormField
                                                            control={form.control}
                                                            name="position"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Position</FormLabel>
                                                                    <FormControl>
                                                                        <Input {...field} readOnly />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </div>

                                                    <FormField
                                                        control={form.control}
                                                        name="resume"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Resume/CV</FormLabel>
                                                                <FormControl>
                                                                    <div className="flex items-center gap-2">
                                                                        <Input
                                                                            type="file"
                                                                            id="resume-upload"
                                                                            className="hidden"
                                                                            onChange={(e) => {
                                                                                if (e.target.files?.[0]) {
                                                                                    field.onChange(e.target.files[0].name);
                                                                                }
                                                                            }}
                                                                        />
                                                                        <Button
                                                                            type="button"
                                                                            variant="outline"
                                                                            onClick={() => document.getElementById('resume-upload')?.click()}
                                                                        >
                                                                            <Upload className="h-4 w-4 mr-2" />
                                                                            Upload Resume
                                                                        </Button>
                                                                        <span className="text-sm text-muted-foreground truncate max-w-[200px]">
                                                                            {field.value ? field.value : "No file selected"}
                                                                        </span>
                                                                    </div>
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <FormField
                                                        control={form.control}
                                                        name="coverLetter"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Cover Letter (Optional)</FormLabel>
                                                                <FormControl>
                                                                    <Textarea
                                                                        placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                                                                        className="min-h-[150px]"
                                                                        {...field}
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <FormField
                                                        control={form.control}
                                                        name="portfolio"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Portfolio/Website URL (Optional)</FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="https://yourportfolio.com" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <Button type="submit" className="bg-gradient-primary w-full hover-scale">
                                                        Submit Application
                                                    </Button>
                                                </form>
                                            </Form>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* Job Listings */}
                            <div className="mb-8">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                                    <div className="relative w-full max-w-md">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            placeholder="Search positions..."
                                            className="pl-10"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                    </div>

                                    <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={(value) => setActiveTab(value as JobCategory)}>
                                        <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full md:w-auto">
                                            <TabsTrigger value="all">All</TabsTrigger>
                                            <TabsTrigger value="engineering">Engineering</TabsTrigger>
                                            <TabsTrigger value="design">Design</TabsTrigger>
                                            <TabsTrigger value="product">Product</TabsTrigger>
                                            <TabsTrigger value="operations">Operations</TabsTrigger>
                                        </TabsList>
                                    </Tabs>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    {filteredJobs.length > 0 ? (
                                        filteredJobs.map((job) => (
                                            <Card
                                                key={job.id}
                                                className="hover:border-primary/50 transition-all cursor-pointer hover-scale"
                                                onClick={() => {
                                                    setSelectedJob(job);
                                                    form.setValue("position", job.title);
                                                }}
                                            >
                                                <CardContent className="p-6">
                                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                        <div className="flex items-start gap-4">
                                                            <div className="rounded-md bg-primary/10 p-2 mt-1">
                                                                {getCategoryIcon(job.category)}
                                                            </div>
                                                            <div>
                                                                <h3 className="font-semibold text-lg">{job.title}</h3>
                                                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1">
                                                                    <span className="text-sm text-muted-foreground">{job.department}</span>
                                                                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                                                                        <MapPin className="h-3 w-3" /> {job.location}
                                                                    </span>
                                                                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                                                                        <Clock className="h-3 w-3" /> {job.type}
                                                                    </span>
                                                                    {job.isRemote && (
                                                                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                                                            Remote Eligible
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Button variant="ghost" size="sm" className="shrink-0">
                                                            View & Apply <ChevronRight className="ml-1 h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))
                                    ) : (
                                        <div className="text-center py-12 border border-dashed rounded-lg">
                                            <h3 className="font-medium text-lg">No positions found</h3>
                                            <p className="text-muted-foreground mt-1">Try adjusting your search or filter criteria</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Why Join Us Section */}
                            <section className="mt-20 animate-fade-in">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold mb-4">
                                        Why Join <span className="text-gradient">Our Team</span>
                                    </h2>
                                    <p className="text-muted-foreground max-w-2xl mx-auto">
                                        We&apos;re building a team of passionate individuals who want to make an impact through technology.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <Card className="bg-card/50 border-primary/10">
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-xl">Impactful Work</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">
                                                Work on projects that matter and solve real problems for businesses across Africa.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-card/50 border-primary/10">
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-xl">Growth & Learning</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">
                                                Continuous learning opportunities with support for professional development and certifications.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-card/50 border-primary/10">
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-xl">Inclusive Culture</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">
                                                We foster a collaborative environment where diverse perspectives are valued and celebrated.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>

                            {/* Recruitment Process */}
                            <section className="mt-20 animate-fade-in">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold mb-4">Our Hiring Process</h2>
                                    <p className="text-muted-foreground max-w-2xl mx-auto">
                                        We&apos;ve designed our recruitment process to be transparent, fair, and efficient.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <div className="bg-card/50 p-6 rounded-lg border border-border relative">
                                        <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                                            1
                                        </div>
                                        <h3 className="font-semibold text-lg mt-4">Application</h3>
                                        <p className="text-muted-foreground mt-2">
                                            Submit your application through our careers portal with your resume and any required information.
                                        </p>
                                    </div>

                                    <div className="bg-card/50 p-6 rounded-lg border border-border relative">
                                        <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                                            2
                                        </div>
                                        <h3 className="font-semibold text-lg mt-4">Initial Interview</h3>
                                        <p className="text-muted-foreground mt-2">
                                            A conversation with our recruitment team to learn more about your experience and aspirations.
                                        </p>
                                    </div>

                                    <div className="bg-card/50 p-6 rounded-lg border border-border relative">
                                        <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                                            3
                                        </div>
                                        <h3 className="font-semibold text-lg mt-4">Technical Assessment</h3>
                                        <p className="text-muted-foreground mt-2">
                                            Role-specific evaluation to showcase your skills through practical assignments or challenges.
                                        </p>
                                    </div>

                                    <div className="bg-card/50 p-6 rounded-lg border border-border relative">
                                        <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                                            4
                                        </div>
                                        <h3 className="font-semibold text-lg mt-4">Final Interview</h3>
                                        <p className="text-muted-foreground mt-2">
                                            Meet the team you&apos;ll be working with and get a deeper understanding of the role and our culture.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* CTA */}
                            <div className="mt-20 text-center animate-fade-in">
                                <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-xl p-8 border border-primary/20">
                                    <h2 className="text-2xl font-bold mb-4">Don&apos;t see a position that fits your skills?</h2>
                                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                        We&apos;re always looking for talented individuals to join our team. Send us your resume
                                        and we&apos;ll reach out if there&apos;s a match.
                                    </p>
                                    <Dialog open={generalFormOpen} onOpenChange={setGeneralFormOpen}>
                                        <DialogTrigger asChild>
                                            <Button className="bg-gradient-primary hover-scale">
                                                Submit General Application
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                                            <DialogHeader>
                                                <DialogTitle>General Application</DialogTitle>
                                                <DialogDescription>
                                                    Submit your information and we&apos;ll keep you in mind for future opportunities.
                                                </DialogDescription>
                                            </DialogHeader>

                                            <Form {...generalForm}>
                                                <form onSubmit={generalForm.handleSubmit(onSubmitGeneralInquiry)} className="space-y-4 py-4">
                                                    <FormField
                                                        control={generalForm.control}
                                                        name="name"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Full Name</FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="John Doe" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <FormField
                                                        control={generalForm.control}
                                                        name="email"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Email</FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="johndoe@example.com" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <FormField
                                                        control={generalForm.control}
                                                        name="phone"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Phone Number</FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="+254 700 000000" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={generalForm.control}
                                                        name="message"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Message</FormLabel>
                                                                <FormControl>
                                                                    <Textarea
                                                                        placeholder="Tell us about your skills, experience, and what type of role you're interested in..."
                                                                        className="min-h-[150px]"
                                                                        {...field}
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    {submitResult && (
                                                        <div className={`p-3 rounded-md ${submitResult.success ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                                                            <p>{submitResult.message}</p>
                                                        </div>
                                                    )}

                                                    <DialogFooter>
                                                        <Button
                                                            type="submit"
                                                            className="bg-gradient-primary w-full hover-scale"
                                                            disabled={isSubmitting}
                                                        >
                                                            {isSubmitting ? "Submitting..." : "Submit"}
                                                        </Button>
                                                    </DialogFooter>
                                                </form>
                                            </Form>
                                        </DialogContent>
                                    </Dialog>

                                    {submitResult && (
                                        <div className={`mt-4 p-4 rounded-md ${submitResult.success ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                                            <p>{submitResult.message}</p>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Careers
