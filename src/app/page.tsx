"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { StatsSection } from "@/components/StatsSection";
import { Zap, Brain, Phone, Wrench, Rocket, ArrowRight, Check, Calendar, Mic, Target, Star, Mail, MessageSquare } from "lucide-react";
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

      {/* Key Benefits Section - Inspired by xtract.framer.ai */}
      <section className="apple-section relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-headline text-3xl sm:text-4xl lg:text-5xl mb-6">
              Transform Your Business Operations
            </h2>
            <p className="body-large text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the power of intelligent automation across every aspect of your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {[
              {
                title: "Automate Repetitive Tasks",
                description: "Eliminate manual data entry, appointment scheduling, and follow-up emails. Our AI-powered automation handles your routine tasks 24/7, freeing your team to focus on what matters most.",
                icon: (
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <defs>
                      <linearGradient id="automate-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#007aff" />
                        <stop offset="100%" stopColor="#5856d6" />
                      </linearGradient>
                      <filter id="glass-blur">
                        <feGaussianBlur stdDeviation="2"/>
                      </filter>
                    </defs>
                    <circle cx="32" cy="32" r="28" fill="rgba(255,255,255,0.1)" stroke="url(#automate-gradient)" strokeWidth="2" filter="url(#glass-blur)"/>
                    <circle cx="32" cy="32" r="20" fill="none" stroke="url(#automate-gradient)" strokeWidth="2" opacity="0.8"/>
                    <path d="M32 12 L40 20 L36 24 L32 20 L28 24 L24 20 Z" fill="url(#automate-gradient)" opacity="0.9"/>
                    <path d="M52 32 L44 24 L40 28 L44 32 L40 36 L44 40 Z" fill="url(#automate-gradient)" opacity="0.9"/>
                    <path d="M32 52 L24 44 L28 40 L32 44 L36 40 L40 44 Z" fill="url(#automate-gradient)" opacity="0.9"/>
                    <path d="M12 32 L20 40 L24 36 L20 32 L24 28 L20 24 Z" fill="url(#automate-gradient)" opacity="0.9"/>
                    <circle cx="32" cy="32" r="6" fill="url(#automate-gradient)" opacity="0.7"/>
                  </svg>
                ),
                features: ["Automated appointment booking", "Smart email sequences", "Data synchronization", "Task prioritization"],
                gradient: "from-blue-500/20 to-purple-500/20"
              },
              {
                title: "Accelerate Sales Growth",
                description: "Convert more leads with intelligent sales automation. From lead capture to nurturing sequences, our systems help you close deals faster and increase revenue.",
                icon: (
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <defs>
                      <linearGradient id="growth-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#5856d6" />
                        <stop offset="100%" stopColor="#af52de" />
                      </linearGradient>
                      <filter id="glass-blur-2">
                        <feGaussianBlur stdDeviation="2"/>
                      </filter>
                    </defs>
                    <rect x="8" y="8" width="48" height="48" rx="8" fill="rgba(255,255,255,0.1)" stroke="url(#growth-gradient)" strokeWidth="2" filter="url(#glass-blur-2)"/>
                    <path d="M16 44 L24 36 L32 40 L40 28 L48 24" fill="none" stroke="url(#growth-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M42 24 L48 24 L48 30" fill="none" stroke="url(#growth-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="24" cy="36" r="3" fill="url(#growth-gradient)" opacity="0.8"/>
                    <circle cx="32" cy="40" r="3" fill="url(#growth-gradient)" opacity="0.8"/>
                    <circle cx="40" cy="28" r="3" fill="url(#growth-gradient)" opacity="0.8"/>
                    <rect x="14" y="42" width="4" height="6" fill="url(#growth-gradient)" opacity="0.6"/>
                    <rect x="22" y="38" width="4" height="10" fill="url(#growth-gradient)" opacity="0.6"/>
                    <rect x="30" y="34" width="4" height="14" fill="url(#growth-gradient)" opacity="0.6"/>
                  </svg>
                ),
                features: ["Lead qualification", "Follow-up automation", "Sales funnel optimization", "Revenue tracking"],
                gradient: "from-purple-500/20 to-pink-500/20"
              },
              {
                title: "Build Smarter Systems",
                description: "Create intelligent workflows that adapt and learn. Our AI-powered automation systems get smarter over time, continuously optimizing your business processes.",
                icon: (
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <defs>
                      <linearGradient id="brain-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#af52de" />
                        <stop offset="100%" stopColor="#ff2d92" />
                      </linearGradient>
                      <filter id="glass-blur-3">
                        <feGaussianBlur stdDeviation="2"/>
                      </filter>
                    </defs>
                    <ellipse cx="32" cy="32" rx="26" ry="24" fill="rgba(255,255,255,0.1)" stroke="url(#brain-gradient)" strokeWidth="2" filter="url(#glass-blur-3)"/>
                    <path d="M20 28 Q24 20 32 24 Q40 20 44 28 Q40 36 32 32 Q24 36 20 28" fill="url(#brain-gradient)" opacity="0.7"/>
                    <path d="M18 35 Q22 42 32 38 Q42 42 46 35" fill="none" stroke="url(#brain-gradient)" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="26" cy="26" r="2" fill="url(#brain-gradient)" opacity="0.9"/>
                    <circle cx="38" cy="26" r="2" fill="url(#brain-gradient)" opacity="0.9"/>
                    <circle cx="32" cy="30" r="2" fill="url(#brain-gradient)" opacity="0.9"/>
                    <path d="M26 26 L32 30 L38 26" stroke="url(#brain-gradient)" strokeWidth="1.5" opacity="0.6"/>
                    <path d="M20 40 Q25 45 32 42 Q39 45 44 40" stroke="url(#brain-gradient)" strokeWidth="2" fill="none" opacity="0.5"/>
                  </svg>
                ),
                features: ["AI decision making", "Predictive analytics", "Smart routing", "Performance optimization"],
                gradient: "from-pink-500/20 to-orange-500/20"
              },
              {
                title: "Delegate Daily Operations",
                description: "Hand off your daily operations to intelligent automation. From customer service to inventory management, let AI handle the routine so you can focus on growth.",
                icon: (
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <defs>
                      <linearGradient id="target-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ff2d92" />
                        <stop offset="100%" stopColor="#007aff" />
                      </linearGradient>
                      <filter id="glass-blur-4">
                        <feGaussianBlur stdDeviation="2"/>
                      </filter>
                    </defs>
                    <circle cx="32" cy="32" r="28" fill="rgba(255,255,255,0.1)" stroke="url(#target-gradient)" strokeWidth="2" filter="url(#glass-blur-4)"/>
                    <circle cx="32" cy="32" r="22" fill="none" stroke="url(#target-gradient)" strokeWidth="2" opacity="0.6"/>
                    <circle cx="32" cy="32" r="16" fill="none" stroke="url(#target-gradient)" strokeWidth="2" opacity="0.7"/>
                    <circle cx="32" cy="32" r="10" fill="none" stroke="url(#target-gradient)" strokeWidth="2" opacity="0.8"/>
                    <circle cx="32" cy="32" r="4" fill="url(#target-gradient)" opacity="0.9"/>
                    <path d="M32 4 L36 12 L32 16 L28 12 Z" fill="url(#target-gradient)" opacity="0.8"/>
                    <path d="M60 32 L52 28 L48 32 L52 36 Z" fill="url(#target-gradient)" opacity="0.8"/>
                    <path d="M32 60 L28 52 L32 48 L36 52 Z" fill="url(#target-gradient)" opacity="0.8"/>
                    <path d="M4 32 L12 36 L16 32 L12 28 Z" fill="url(#target-gradient)" opacity="0.8"/>
                  </svg>
                ),
                features: ["Customer service automation", "Inventory management", "Quality control", "Operational insights"],
                gradient: "from-orange-500/20 to-blue-500/20"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100 
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <div className={`premium-card h-full p-6 sm:p-8 lg:p-10 bg-gradient-to-br ${benefit.gradient} rounded-2xl`}>
                  <div className="flex flex-col sm:flex-row items-start gap-6 mb-6 sm:mb-8">
                    <motion.div
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                      className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 flex-shrink-0 glass-card rounded-2xl p-4 sm:p-5 mx-auto sm:mx-0"
                    >
                      {benefit.icon}
                    </motion.div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="section-headline text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="body-large text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-4">
                    {benefit.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (index * 0.15) + (featureIndex * 0.1) + 0.3
                        }}
                        viewport={{ once: true }}
                        className="flex items-start justify-start gap-4 text-base sm:text-lg"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2.5"
                        />
                        <span className="text-foreground/80 text-left leading-relaxed font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="premium-button bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                >
                  Transform Your Business Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Automation Examples Section */}
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
              Business Process Automation Solutions
            </h2>
            <p className="body-large text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how our custom automation solutions can transform your business operations. 
              From intelligent workflow automation to AI-powered business process optimization, 
              we deliver measurable results that save time and increase productivity.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
            {[
              {
                title: "Automated Appointment Scheduling",
                description: "Smart calendar integration with automated SMS/email reminders and follow-ups",
                icon: Calendar
              },
              {
                title: "AI Voice Automation Agents",
                description: "Intelligent voice AI that handles calls, bookings, and customer service 24/7",
                icon: Mic
              },
              {
                title: "Lead Generation Automation",
                description: "Automated lead capture, qualification, and CRM integration for higher conversion rates",
                icon: Target
              },
              {
                title: "Review Management Automation",
                description: "Automated review collection and reputation management across all platforms",
                icon: Star
              },
              {
                title: "Intelligent Email Automation",
                description: "AI-powered email marketing, responses, and customer communication workflows",
                icon: Mail
              },
              {
                title: "Smart Business Chatbots",
                description: "AI chatbots that qualify leads, book appointments, and provide instant customer support",
                icon: MessageSquare
              }
            ].map((automation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="premium-card rounded-2xl p-6 sm:p-8"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 glass-card rounded-2xl flex items-center justify-center mb-6">
                  <automation.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
                  {automation.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {automation.description}
                </p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
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
                className="text-center group premium-card p-6 sm:p-8 rounded-2xl"
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 glass-card rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <span className="text-2xl sm:text-3xl">{clientType.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
                  {clientType.category}
                </h3>
                <ul className="text-sm sm:text-base text-muted-foreground space-y-2 leading-relaxed">
                  {clientType.examples.map((example, i) => (
                    <li key={i} className="px-0">{example}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Business Automation Services
            </h2>
            <p className="body-large text-lg text-muted-foreground max-w-2xl mx-auto">
              From basic workflow automation to advanced AI-powered business process optimization, 
              we deliver custom automation solutions that transform how businesses operate, 
              saving time and increasing profitability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="premium-card h-full border-0">
                <CardHeader>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 glass-card rounded-2xl flex items-center justify-center mb-6">
                    <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">Workflow Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    Streamline business processes with automated workflows that connect your apps, 
                    eliminate manual tasks, and boost productivity for growing businesses.
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      App integrations
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Email automation
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Data synchronization
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="premium-card h-full border-0">
                <CardHeader>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 glass-card rounded-2xl flex items-center justify-center mb-6">
                    <Brain className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">AI Business Process Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    Harness artificial intelligence to automate complex business decisions, 
                    analyze data patterns, and optimize multi-step business processes for maximum efficiency.
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      AI data analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Smart decision making
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Predictive workflows
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group md:col-span-2 lg:col-span-1"
            >
              <Card className="premium-card h-full border-0">
                <CardHeader>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 glass-card rounded-2xl flex items-center justify-center mb-6">
                    <Wrench className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">Enterprise Automation Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    Custom enterprise-grade automation solutions built for your specific industry needs, 
                    integrating seamlessly with existing systems and scaling with your business growth.
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Custom API development
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Legacy system integration
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Enterprise solutions
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
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