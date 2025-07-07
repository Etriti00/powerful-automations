"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { Zap, Brain, Phone, Wrench, Rocket } from "lucide-react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Custom Cursor */}
      <div
        className="custom-cursor"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 glass-card mx-4 mt-4 px-6 py-4 border-white/20"
      >
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AutomateFlow
          </div>
          <ContactForm>
            <Button variant="outline" className="glass-card border-white/20 text-white hover:bg-white/10">
              Contact Us
            </Button>
          </ContactForm>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Liquid Glass Animation Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
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
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
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

        <div className="relative z-10 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
          >
            Automate Your Workflow.
            <br />
            Elevate Your Business.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            We build custom automations, from simple task management to intelligent AI-powered solutions using n8n.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ContactForm>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-6 text-lg"
              >
                Get a Free Estimation
              </Button>
            </ContactForm>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="transition-transform duration-300"
            >
              <Card className="glass-card border-white/20 text-white h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Zap className="w-8 h-8 text-blue-400" />
                    <CardTitle className="text-2xl">Simple Automations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80 text-lg">
                    Connect your apps, streamline repetitive tasks, and save hundreds of hours. Perfect for startups and small businesses.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="transition-transform duration-300"
            >
              <Card className="glass-card border-white/20 text-white h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Brain className="w-8 h-8 text-purple-400" />
                    <CardTitle className="text-2xl">Smart AI Automations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80 text-lg">
                    Leverage the power of AI to analyze data, make intelligent decisions, and handle complex, multi-step workflows. Ideal for scaling businesses.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12"
          >
            How It Works
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Discovery Call",
                description: "We understand your needs and current workflow challenges",
                step: "01"
              },
              {
                icon: Wrench,
                title: "We Build & Test",
                description: "Our experts design and thoroughly test your custom automation",
                step: "02"
              },
              {
                icon: Rocket,
                title: "Deploy & Support",
                description: "Launch your automation with ongoing support and optimization",
                step: "03"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <Card className="glass-card border-white/20 text-white h-full">
                  <CardHeader className="pb-4">
                    <div className="text-6xl font-bold text-blue-400/30 mb-2">
                      {item.step}
                    </div>
                    <div className="flex justify-center mb-4">
                      <item.icon className="w-12 h-12 text-blue-400" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/80">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <ContactForm>
              <Button variant="outline" className="glass-card border-white/20 text-white hover:bg-white/10">
                Contact Us
              </Button>
            </ContactForm>
          </div>
          <p className="text-white/60">
            © 2024 AutomateFlow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}