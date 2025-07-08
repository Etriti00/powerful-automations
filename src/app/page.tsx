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
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-full blur-3xl"
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -50, 50, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 30, 0],
              y: [0, 30, -30, 0],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-foreground"
            >
              AI-Powered Business Automation.
              <br />
              <span className="text-primary">Transform Your Operations.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
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
                  className="apple-button bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
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
      <section className="apple-section bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Business Process Automation Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
                className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <automation.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                  {automation.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {automation.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section className="apple-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Industries We Automate
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in automating business processes for service-based industries. 
              Our automation solutions help businesses reduce manual work, improve customer experience, 
              and increase operational efficiency across various sectors.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="text-lg sm:text-2xl">{clientType.icon}</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">
                  {clientType.category}
                </h3>
                <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                  {clientType.examples.map((example, i) => (
                    <li key={i}>{example}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="apple-section bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Business Automation Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Workflow Automation</CardTitle>
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
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">AI Business Process Automation</CardTitle>
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
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Enterprise Automation Solutions</CardTitle>
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
      <section id="about" className="apple-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                  <div className="text-6xl font-bold text-primary/10 mb-4">
                    {item.step}
                  </div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="apple-section bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Automate Your Business Operations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join 117+ businesses that have transformed their operations with our intelligent automation solutions. 
              Save time, reduce costs, and increase revenue with custom business process automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="apple-button bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
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
      <footer className="py-12 border-t border-border/50 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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