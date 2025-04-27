/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, 
  Heart, 
  Target, 
  Award, 
  TrendingUp, 
  CheckCircle, 
  Calendar, 
  ArrowRight,
  Lightbulb,
  Handshake,
  Rocket,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AboutUs = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[400px] w-[400px] bg-primary/10 blur-[120px] animate-pulse"
          style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] bg-blue-500/10 blur-[100px] animate-pulse"
          style={{ animationDuration: '12s' }} />
      </div> */}

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 md:pt-24 md:pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  We&apos;re <span className="text-gradient">Atinga Solutions</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Pioneering digital infrastructure solutions across Africa, building technology that empowers businesses and communities.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Innovation</span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Excellence</span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Integrity</span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Impact</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-primary hover:bg-primary/90 hover-scale">
                    Meet Our Team
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-scale">
                    Our Services
                  </Button>
                </div>
              </div>

              <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                    alt="Atinga Solutions Team"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-card p-4 rounded-lg border border-border shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-primary">6+</span>
                    <span className="text-sm text-muted-foreground">Years of<br />Experience</span>
                  </div>
                </div>
                <div className="absolute -top-5 -right-5 bg-card p-4 rounded-lg border border-border shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-primary">50+</span>
                    <span className="text-sm text-muted-foreground">Projects<br />Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The journey that brought us here and the vision that drives us forward.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-fade-in">
                <p className="text-lg mb-6">
                  Atinga Solutions was founded in 2013 with a clear mission: to bridge the digital infrastructure gap across Africa and empower businesses through innovative technology solutions.
                </p>
                <p className="text-lg mb-6">
                  What began as a small team of passionate engineers has grown into a leading technology company with offices in multiple countries, serving clients across East Africa and beyond.
                </p>
                <p className="text-lg">
                  Our name, Atinga means foundation in Swahili, reflecting our commitment to building strong technological foundations that support sustainable growth and digital transformation for our clients.
                </p>
              </div>

              <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                {/* Timeline */}
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
                  {/* Timeline Item 1 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white border-4 border-background z-10">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-4 rounded-lg border border-border shadow-sm">
                      <div className="mb-1 font-semibold">2013</div>
                      <div className="text-muted-foreground">Founded with a vision to transform Africa&apos;s digital infrastructure.</div>
                    </div>
                  </div>

                  {/* Timeline Item 2 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white border-4 border-background z-10">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-4 rounded-lg border border-border shadow-sm">
                      <div className="mb-1 font-semibold">2016</div>
                      <div className="text-muted-foreground">Expanded operations to Uganda and Tanzania, establishing regional presence.</div>
                    </div>
                  </div>

                  {/* Timeline Item 3 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white border-4 border-background z-10">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-4 rounded-lg border border-border shadow-sm">
                      <div className="mb-1 font-semibold">2019</div>
                      <div className="text-muted-foreground">Launched cloud solutions division, focusing on infrastructure modernization.</div>
                    </div>
                  </div>

                  {/* Timeline Item 4 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white border-4 border-background z-10">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-4 rounded-lg border border-border shadow-sm">
                      <div className="mb-1 font-semibold">2022</div>
                      <div className="text-muted-foreground">Completed 100+ major infrastructure projects across East Africa.</div>
                    </div>
                  </div>

                  {/* Timeline Item 5 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white border-4 border-background z-10">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-4 rounded-lg border border-border shadow-sm">
                      <div className="mb-1 font-semibold">2024</div>
                      <div className="text-muted-foreground">Pioneering AI-driven infrastructure solutions for emerging markets.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our <span className="text-gradient">Purpose</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                What drives us and shapes our approach to everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission */}
              <Card className="bg-card/60 backdrop-blur-sm hover-scale transition-all hover:border-primary/50">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To build robust digital infrastructure that empowers African businesses to innovate, scale, and compete globally, driving economic growth and sustainable development across the continent.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="bg-card/60 backdrop-blur-sm hover-scale transition-all hover:border-primary/50">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    A digitally transformed Africa where businesses of all sizes have access to world-class technology infrastructure, enabling innovation and prosperity across the continent.
                  </p>
                </CardContent>
              </Card>

              {/* Values */}
              <Card className="bg-card/60 backdrop-blur-sm hover-scale transition-all hover:border-primary/50">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                  <p className="text-muted-foreground">
                    Excellence, integrity, innovation, and commitment to sustainable impact guide our work. We believe in building relationships based on trust and delivering solutions that create lasting value.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
   
        {/* Our Impact Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our <span className="text-gradient">Impact</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We measure our success by the positive change we create across Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Impact Stats */}
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-8 text-center border border-border hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div className="text-4xl font-bold mb-2">12</div>
                <p className="text-muted-foreground">Countries Served</p>
              </div>

              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-8 text-center border border-border hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>

              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-8 text-center border border-border hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <div className="text-4xl font-bold mb-2">50</div>
                <p className="text-muted-foreground">Clients Served</p>
              </div>

              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-8 text-center border border-border hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-4xl font-bold mb-2">50</div>
                <p className="text-muted-foreground">Team Members</p>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Success Story 1 */}
              <div className="bg-card rounded-xl overflow-hidden shadow-sm hover-scale">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2"
                    alt="Success Story"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Transforming Healthcare Infrastructure</h3>
                  <p className="text-muted-foreground mb-4">
                    We helped a major East African healthcare provider modernize their IT infrastructure, 
                    enabling telemedicine services that now reach over 1 million patients in remote areas.
                  </p>
                  {/* <Link href="/case-studies/healthcare" className="text-primary hover:underline flex items-center">
                    Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link> */}
                </div>
              </div>

              {/* Success Story 2 */}
              <div className="bg-card rounded-xl overflow-hidden shadow-sm hover-scale">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74"
                    alt="Success Story"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Scaling Financial Inclusion</h3>
                  <p className="text-muted-foreground mb-4">
                    Our cloud infrastructure solutions helped a fintech startup scale from serving 50,000 to 2 million 
                    customers across 5 countries, while maintaining 99.99% uptime.
                  </p>
                  {/* <Link href="/case-studies/fintech" className="text-primary hover:underline flex items-center">
                    Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our <span className="text-gradient">Approach</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                How we deliver exceptional results for every client, every time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
              {/* Approach Step 1 */}
              <div className="bg-card border border-border rounded-xl p-6 relative">
                <div className="text-6xl font-bold text-primary/10 absolute top-3 right-4">1</div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Understand</h3>
                <p className="text-muted-foreground">
                  We begin by deeply understanding your business, challenges, and goals to develop tailored solutions.
                </p>
              </div>

              {/* Approach Step 2 */}
              <div className="bg-card border border-border rounded-xl p-6 relative">
                <div className="text-6xl font-bold text-primary/10 absolute top-3 right-4">2</div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Design</h3>
                <p className="text-muted-foreground">
                  Our expert team designs scalable, future-proof solutions aligned with your specific requirements.
                </p>
              </div>

              {/* Approach Step 3 */}
              <div className="bg-card border border-border rounded-xl p-6 relative">
                <div className="text-6xl font-bold text-primary/10 absolute top-3 right-4">3</div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Implement</h3>
                <p className="text-muted-foreground">
                  We deploy solutions with minimal disruption, ensuring seamless integration with existing systems.
                </p>
              </div>

              {/* Approach Step 4 */}
              <div className="bg-card border border-border rounded-xl p-6 relative">
                <div className="text-6xl font-bold text-primary/10 absolute top-3 right-4">4</div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Optimize</h3>
                <p className="text-muted-foreground">
                  We continuously monitor, support, and optimize to ensure lasting performance and value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Responsibility Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative animate-fade-in">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
                    alt="Community Impact"
                    width={600}
                    height={400}
                    className="w-full object-cover"
                    unoptimized
                  />
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-3xl font-bold mb-6">Social Responsibility</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  At Atinga Solutions, our commitment extends beyond business. We&apos;re dedicated to creating positive social impact through technology and community engagement.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">Digital Skills Training</h3>
                      <p className="text-muted-foreground">We&apos;ve trained over 5,000 young people in digital skills across East Africa.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">Environmental Sustainability</h3>
                      <p className="text-muted-foreground">Our operations are carbon-neutral, with all data centers running on renewable energy.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">Community Tech Hubs</h3>
                      <p className="text-muted-foreground">We&apos;ve established 12 community tech hubs in underserved areas.</p>
                    </div>
                  </div>
                </div>

                {/* <div className="mt-8">
                  <Button className="bg-primary hover:bg-primary/90 hover-scale">
                    Learn About Our CSR Initiatives
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our <span className="text-gradient">Clients Say</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The feedback that drives our continuous improvement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card className="hover-scale bg-gradient-to-br from-card to-card/70">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                <p className="flex-grow italic text-muted-foreground mb-6">
                    &quot;Working with Atinga Solutions was a game-changer for our business. They delivered a robust infrastructure that increased our system reliability by 99.9% and accelerated our digital transformation journey.&quot;
                </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <span className="font-semibold text-primary">MM</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Michael Mutua</h4>
                      <p className="text-sm text-muted-foreground">CTO, EastBank Financial</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card className="hover-scale bg-gradient-to-br from-card to-card/70">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="flex-grow italic text-muted-foreground mb-6">
                    &quot;The cloud migration handled by Atinga Solutions was seamless. Our systems now scale automatically with demand, and we&apos;ve seen a significant improvement in reliability.&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <span className="font-semibold text-primary">JN</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Janet Nyambura</h4>
                      <p className="text-sm text-muted-foreground">Operations Director, SafariMed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 3 */}
              <Card className="hover-scale bg-gradient-to-br from-card to-card/70">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="flex-grow italic text-muted-foreground mb-6">
                    &quot;As a startup, we needed scalable tech infrastructure without breaking the bank. Atinga provided exactly what we needed, with expert guidance that helped us avoid costly mistakes.&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <span className="font-semibold text-primary">DO</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Daniel Okello</h4>
                      <p className="text-sm text-muted-foreground">Founder, AgriTech Solutions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              {/* <Button variant="outline" className="hover-scale">
                View More Testimonials <ArrowRight className="ml-2 h-4 w-4" />
              </Button> */}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our <span className="text-gradient">Partners</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Working with industry leaders to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {/* Partner logos
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                  <div className="h-12 bg-primary/20 w-full rounded-md flex items-center justify-center">
                    <span className="text-primary font-semibold">Partner {i + 1}</span>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-blue-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Digital Foundation?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our infrastructure solutions can support your business growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href='/pages/contact-page'>
              <Button size="lg" className="bg-primary hover:bg-primary/90 hover-scale">
                Contact Us
              </Button>
              </Link>
          
              <Link href='/pages/services'>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-scale">
                Explore Our Services
              </Button>
              </Link> 

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutUs