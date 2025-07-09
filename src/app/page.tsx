"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { StatsSection } from "@/components/StatsSection";
import { Phone, Wrench, Rocket, ArrowRight, Check, Calendar, Mic, Target, Star, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/2 to-background relative">
      {/* Unified Background Layer - Single layer for entire page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating gradient blobs */}
        <div className="floating-gradient floating-gradient-1"></div>
        <div className="floating-gradient floating-gradient-2"></div>
        <div className="floating-gradient floating-gradient-3"></div>
        
        {/* Additional animated elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-blue-400/15 to-orange-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 80, -40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-br from-green-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, -25, 0],
            y: [0, -25, 50, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
        />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-headline text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6"
            >
              AI-Powered Business Automation.
              <br />
              <span className="text-primary">Transform Your Operations.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="body-large text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              We build intelligent business automation solutions that streamline workflows, 
              automate repetitive tasks, and integrate AI-powered voice agents to save time, 
              reduce costs, and increase revenue for your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="premium-button bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />


      {/* Automation Examples Section */}
      <section id="services" className="apple-section relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-headline text-3xl sm:text-4xl mb-4">
              Business Process Automation Solutions
            </h2>
            <p className="body-large text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how our custom automation solutions can transform your business operations. 
              From intelligent workflow automation to AI-powered business process optimization, 
              we deliver measurable results that save time and increase productivity.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {[
              {
                title: "Automated Appointment Scheduling",
                description: "Transform your booking process with intelligent calendar management that handles appointments, sends reminders, and manages rescheduling automatically.",
                icon: Calendar,
                services: [
                  "24/7 online booking system",
                  "Automated SMS/email reminders",
                  "Calendar synchronization"
                ]
              },
              {
                title: "AI Voice Automation Agents",
                description: "Deploy intelligent voice AI that handles customer calls, bookings, and support inquiries with natural conversation capabilities.",
                icon: Mic,
                services: [
                  "Inbound call handling",
                  "Appointment booking via phone",
                  "Customer service automation"
                ]
              },
              {
                title: "Lead Generation Automation",
                description: "Capture, qualify, and nurture leads automatically with intelligent systems that increase conversion rates and sales velocity.",
                icon: Target,
                services: [
                  "Web form automation",
                  "Lead scoring and qualification",
                  "CRM integration and sync"
                ]
              },
              {
                title: "Review Management Automation",
                description: "Boost your online reputation with automated review collection, response management, and reputation monitoring across all platforms.",
                icon: Star,
                services: [
                  "Automated review requests",
                  "Multi-platform monitoring",
                  "Review response automation"
                ]
              },
              {
                title: "Intelligent Email Automation",
                description: "Create personalized email marketing campaigns and automated responses that engage customers and drive conversions.",
                icon: Mail,
                services: [
                  "Email marketing campaigns",
                  "Customer journey automation",
                  "Personalized messaging"
                ]
              },
              {
                title: "Smart Business Chatbots",
                description: "Deploy AI-powered chatbots that provide instant customer support, qualify leads, and handle routine inquiries 24/7.",
                icon: MessageSquare,
                services: [
                  "Website chat integration",
                  "Lead qualification automation",
                  "FAQ and support automation"
                ]
              }
            ].map((automation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="premium-card rounded-2xl p-6 sm:p-8 h-full"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 glass-card rounded-2xl flex items-center justify-center mb-6">
                  <automation.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
                  {automation.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {automation.description}
                </p>
                <div className="space-y-3">
                  {automation.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section className="apple-section relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-headline text-3xl sm:text-4xl mb-4">
              Industries We Automate
            </h2>
            <p className="body-large text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in automating business processes for service-based industries. 
              Our automation solutions help businesses reduce manual work, improve customer experience, 
              and increase operational efficiency across various sectors.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {[
                {
                  category: "Healthcare & Wellness",
                  icon: "🏥",
                  examples: ["Dental clinics", "Chiropractors", "Physiotherapists", "Massage therapists"]
                },
                {
                  category: "Personal Services",
                  icon: "✂️",
                  examples: ["Hair salons", "Barbershops", "Nail salons", "Tattoo shops"]
                },
                {
                  category: "Food & Beverage",
                  icon: "🍽️",
                  examples: ["Restaurants", "Cafés", "Catering services", "Ghost kitchens"]
                },
                {
                  category: "Fitness & Coaching",
                  icon: "🧘",
                  examples: ["Yoga studios", "Personal trainers", "Life coaches", "Pilates studios"]
                },
                {
                  category: "Home Services",
                  icon: "🏠",
                  examples: ["Cleaning companies", "Electricians", "Landscaping", "Pest control"]
                },
                {
                  category: "Professional Services",
                  icon: "🛠",
                  examples: ["Auto repair", "Law offices", "Wedding planners", "Tutoring centers"]
                }
              ].map((clientType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 mb-6 lg:mb-8 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                    <span className="text-2xl lg:text-3xl">{clientType.icon}</span>
                  </div>
                  
                  {/* Category Title */}
                  <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-4 lg:mb-6">
                    {clientType.category}
                  </h3>
                  
                  {/* Examples List */}
                  <div className="space-y-2 lg:space-y-3">
                    {clientType.examples.map((example, i) => (
                      <div key={i} className="text-sm lg:text-base text-muted-foreground">
                        {example}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section id="about" className="apple-section relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-headline text-3xl sm:text-4xl mb-4">
              How It Works
            </h2>
            <p className="body-large text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures you get the automation you need 
              with minimal disruption to your current operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Discovery Call",
                description: "We understand your needs and current workflow challenges to design the perfect solution.",
                step: "01"
              },
              {
                icon: Wrench,
                title: "Build & Test",
                description: "Our experts design and thoroughly test your custom automation before deployment.",
                step: "02"
              },
              {
                icon: Rocket,
                title: "Deploy & Support",
                description: "Launch your automation with comprehensive training and ongoing support.",
                step: "03"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative">
                  <div className="text-6xl font-bold text-primary/10 mb-6">
                    {item.step}
                  </div>
                  <div className="w-18 h-18 sm:w-20 sm:h-20 glass-card rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-primary/10 transition-colors duration-300">
                    <item.icon className="w-9 h-9 sm:w-10 sm:h-10 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="apple-section relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="section-headline text-3xl sm:text-4xl mb-6">
              Ready to Automate Your Business Operations?
            </h2>
            <p className="body-large text-lg text-muted-foreground mb-8">
              Join 117+ businesses that have transformed their operations with our intelligent automation solutions. 
              Save time, reduce costs, and increase revenue with custom business process automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="premium-button bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                >
                  Start Your Automation Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative bg-background/80 backdrop-blur-md border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 Power Automations. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}