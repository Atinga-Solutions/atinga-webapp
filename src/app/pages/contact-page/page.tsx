"use client";

import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Mail, 
  PhoneCall, 
  Clock, 
  HelpCircle,
  CheckCircle
} from 'lucide-react';
import { sendGeneralInquiry } from '@/utils/careers-email-config';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(20, { message: "Message must be at least 20 characters." }),
});

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{success: boolean, message: string} | null>(null);
  const [activeTab, setActiveTab] = useState("general");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setSubmitResult(null);
    
    try {
      const result = await sendGeneralInquiry({
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
        subject: values.subject
      });
      
      if (result.success) {
        setSubmitResult({
          success: true,
          message: "Your message has been sent successfully! We'll be in touch soon."
        });
        form.reset();
      } else {
        setSubmitResult({
          success: false,
          message: "There was a problem sending your message. Please try again."
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

  return (
    <div className="relative min-h-screen">

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 md:py-28">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
              Whether you have a question about our services, need technical support, or want to discuss a potential project,
              our team is ready to help you find the right solution.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in">
              <Card className="bg-card/60 backdrop-blur-sm hover-scale transition-all hover:border-primary/50">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <PhoneCall className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-4">Our support team is available Mon-Fri, 8am-6pm EAT</p>
                  <a href="tel:+254700000000" className="text-primary hover:underline">+254 115671073</a>
                </CardContent>
              </Card>
              
              <Card className="bg-card/60 backdrop-blur-sm hover-scale transition-all hover:border-primary/50">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-4">Send us an email and we&apos;ll respond within 24 hours</p>
                  <a href="mailto:info@atinga.co.ke" className="text-primary hover:underline">info@atingasolutions.com</a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Map and Contact Form Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Map Card */}
              <div className="animate-fade-in">
                <div className="bg-card rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
                  <div className="p-6 border-b">
                    <h3 className="text-2xl font-semibold mb-2">Our Location</h3>
                    <p className="text-muted-foreground">Visit our headquarters in Nairobi, Kenya</p>
                  </div>
                  
                  <div className="flex-grow relative min-h-[300px] lg:min-h-[500px]">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510689.0284648374!2d36.62623313010158!3d-0.31496907305399285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18284729f9465441%3A0xf835476d1295cfd6!2sNyeri%20County!5e0!3m2!1sen!2ske!4v1745747775806!5m2!1sen!2ske" 
                      className="absolute inset-0 w-full h-full"
                      style={{border:0}}
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                  </div>
                  
                  <div className="p-6 bg-card border-t">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Headquarters</h4>
                        <p className="text-muted-foreground">Atinga Solutions Towers<br />1234 Technology Avenue<br />Nairobi, Kenya</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 mt-4">
                      <Clock className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Business Hours</h4>
                        <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 1:00 PM<br />Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form Card */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-card rounded-lg overflow-hidden shadow-lg h-full">
                  <div className="p-6 border-b">
                    <h3 className="text-2xl font-semibold mb-2">Send us a message</h3>
                    <p className="text-muted-foreground">Fill out the form below and we&apos;ll get back to you as soon as possible</p>
                  </div>
                  
                  <div className="p-6">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                      <TabsList className="grid grid-cols-3 mb-6">
                        <TabsTrigger value="general">General</TabsTrigger>
                        <TabsTrigger value="support">Support</TabsTrigger>
                        <TabsTrigger value="sales">Sales</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="general" className="mt-0">
                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Name</FormLabel>
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
                                      <Input placeholder="john@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                name="subject"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Subject</FormLabel>
                                    <FormControl>
                                      <Input placeholder="General Inquiry" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            
                            <FormField
                              control={form.control}
                              name="message"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Message</FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      placeholder="How can we help you?" 
                                      className="min-h-[120px]"
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            {submitResult && (
                              <div className={`p-4 rounded-md ${submitResult.success ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                                {submitResult.success && <CheckCircle className="h-5 w-5 inline-block mr-2" />}
                                <p className="inline-block">{submitResult.message}</p>
                              </div>
                            )}
                            
                            <Button 
                              type="submit" 
                              className="w-full bg-primary hover:bg-primary/90 hover-scale"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? (
                                <span className="flex items-center">
                                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                  Sending...
                                </span>
                              ) : (
                                "Send Message"
                              )}
                            </Button>
                          </form>
                        </Form>
                      </TabsContent>
                      
                      <TabsContent value="support" className="mt-0">
                        <div className="p-6 bg-muted/50 rounded-md border border-border mb-4">
                          <h4 className="text-lg font-medium mb-2">Technical Support</h4>
                          <p className="text-muted-foreground mb-4">
                            For existing clients who need technical assistance with our products or services.
                          </p>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-primary" />
                              <a href="mailto:atingasolutins@gmail.com" className="text-primary hover:underline">atingasolutions@gmail.com  </a>
                            </div>
                            <div className="flex items-center gap-2">
                              <PhoneCall className="h-4 w-4 text-primary" />
                              <a href="tel:+254711111111" className="text-primary hover:underline">+254 115671073</a>
                            </div>
                          </div>
                        </div>
                        
                        <Button className="w-full bg-primary hover:bg-primary/90 hover-scale" onClick={() => setActiveTab("general")}>
                          Continue to Support Form
                        </Button>
                      </TabsContent>
                      
                      <TabsContent value="sales" className="mt-0">
                        <div className="p-6 bg-muted/50 rounded-md border border-border mb-4">
                          <h4 className="text-lg font-medium mb-2">Sales Inquiries</h4>
                          <p className="text-muted-foreground mb-4">
                            For questions about our services, pricing, and how we can help your business.
                          </p>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-primary" />
                              <a href="mailto:sales@atinga.co.ke" className="text-primary hover:underline">atingasolutions@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-2">
                              <PhoneCall className="h-4 w-4 text-primary" />
                              <a href="tel:+254722222222" className="text-primary hover:underline">+254115671073</a>
                            </div>
                          </div>
                        </div>
                        
                        <Button className="w-full bg-primary hover:bg-primary/90 hover-scale" onClick={() => setActiveTab("general")}>
                          Continue to Sales Form
                        </Button>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        {/* FAQ Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Find answers to common questions about our services and support.
              </p>
            </div>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg mb-2">What are your business hours?</h3>
                      <p className="text-muted-foreground">
                        Our regular business hours are Monday to Friday from 8:00 AM to 6:00 PM East Africa Time (EAT). 
                        We also have limited availability on Saturdays from 9:00 AM to 1:00 PM.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg mb-2">How quickly can I expect a response?</h3>
                      <p className="text-muted-foreground">
                        For general inquiries, we typically respond within 24 business hours. For urgent technical support issues, 
                        our team aims to respond within 4 hours during business hours.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg mb-2">Do you offer services internationally?</h3>
                      <p className="text-muted-foreground">
                        Yes, while our physical offices are located in East Africa, we serve clients globally. Our cloud-based 
                        solutions and remote capabilities allow us to work with businesses anywhere in the world.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg mb-2">How do I schedule a consultation?</h3>
                      <p className="text-muted-foreground">
                        You can schedule a consultation by filling out our contact form, emailing us at info@atinga.co.ke, 
                        or calling our main office. Our team will arrange a time that works for you to discuss your needs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Connect with Us */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Follow us on social media to stay updated with our latest news, events, and tech insights.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="bg-card p-4 rounded-full hover-scale transition-all" aria-label="LinkedIn">
                <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a href="#" className="bg-card p-4 rounded-full hover-scale transition-all" aria-label="Twitter">
                <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              
              <a href="#" className="bg-card p-4 rounded-full hover-scale transition-all" aria-label="GitHub">
                <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
              
              <a href="#" className="bg-card p-4 rounded-full hover-scale transition-all" aria-label="Instagram">
                <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                </svg>
              </a>
              
              <a href="#" className="bg-card p-4 rounded-full hover-scale transition-all" aria-label="YouTube">
                <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-blue-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our technology solutions can help you achieve your business goals.
              Schedule a consultation with our team today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 hover-scale">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-scale">
                View Our Services
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContactPage;
