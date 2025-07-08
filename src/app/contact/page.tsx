"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          companyName: formData.company,
          serviceOfInterest: formData.service,
          projectDetails: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.',
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Something went wrong. Please try again.',
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/2 to-background pt-16 relative">
        {/* Unified Background Layer - Single layer for entire page */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Floating gradient blobs */}
          <div className="floating-gradient floating-gradient-1"></div>
          <div className="floating-gradient floating-gradient-2"></div>
          <div className="floating-gradient floating-gradient-3"></div>
          
          {/* Additional animated elements */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl"
            animate={{
              x: [0, 80, -40, 0],
              y: [0, -40, 80, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-400/15 to-orange-400/15 rounded-full blur-3xl"
            animate={{
              x: [0, -60, 30, 0],
              y: [0, 60, -30, 0],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
            }}
          />
        </div>

        {/* Hero Section */}
        <section className="pt-6 sm:pt-8 pb-12 sm:pb-16 relative apple-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="hero-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
                Let&apos;s Build Something
                <span className="text-primary"> Amazing</span>
              </h1>
              <p className="body-large text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 px-4">
                Ready to transform your business with custom automation? 
                We&apos;re here to help you streamline your workflow and boost productivity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-8 sm:py-12 lg:py-16 relative apple-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="premium-card shadow-xl border-0 h-full">
                  <CardHeader className="px-4 sm:px-6">
                    <CardTitle className="text-xl sm:text-2xl font-bold">Get Your Free Consultation</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Tell us about your project and we&apos;ll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6">
                    {/* Status Message */}
                    {submitStatus.type && (
                      <div className={`p-4 rounded-lg mb-6 ${
                        submitStatus.type === 'success' 
                          ? 'bg-green-50 border border-green-200 text-green-800' 
                          : 'bg-red-50 border border-red-200 text-red-800'
                      }`}>
                        <p className="text-sm font-medium">{submitStatus.message}</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name*</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email*</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            placeholder="john@company.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleChange("company", e.target.value)}
                            placeholder="Your Company"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="service">Service Needed*</Label>
                          <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="simple-automation">Simple Automation</SelectItem>
                              <SelectItem value="ai-automation">AI-Powered Automation</SelectItem>
                              <SelectItem value="custom-integration">Custom Integration</SelectItem>
                              <SelectItem value="consulting">Consulting Only</SelectItem>
                              <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="budget">Budget Range</Label>
                          <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-1k">Under $1,000</SelectItem>
                              <SelectItem value="under-2k">Under $2,000</SelectItem>
                              <SelectItem value="2k-5k">$2,000 - $5,000</SelectItem>
                              <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                              <SelectItem value="over-15k">$15,000+</SelectItem>
                              <SelectItem value="not-sure">Not Sure</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Project Description*</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          placeholder="Tell us about your current workflow challenges and what you'd like to automate..."
                          rows={4}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="premium-button w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                        size="lg"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-full"
              >
                <Card className="premium-card shadow-xl border-0 h-full">
                  <CardHeader className="px-4 sm:px-6">
                    <CardTitle className="text-xl sm:text-2xl font-bold">Get in Touch</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Ready to automate your business processes? We&apos;re here to help you 
                      every step of the way.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6">

                    <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 glass-card rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-base sm:text-lg">Email</h4>
                      <p className="text-muted-foreground text-base sm:text-lg break-all">info@powerautomations.net</p>
                      <p className="text-sm sm:text-base text-muted-foreground mt-2">We&apos;ll respond within 24 hours</p>
                    </div>
                  </div>


                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 glass-card rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-base sm:text-lg">Location</h4>
                      <p className="text-muted-foreground text-base sm:text-lg">Woodstock, Vermont</p>
                      <p className="text-sm sm:text-base text-muted-foreground mt-2">Remote-first company</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 glass-card rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-base sm:text-lg">Response Time</h4>
                      <p className="text-muted-foreground text-base sm:text-lg">&lt; 24 hours</p>
                      <p className="text-sm sm:text-base text-muted-foreground mt-2">Usually within 2 hours</p>
                    </div>
                  </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* FAQ Section - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 lg:mt-16"
            >
              <Card className="premium-card shadow-xl border-0">
                <CardHeader className="px-6 sm:px-8 text-center">
                  <CardTitle className="section-headline text-xl sm:text-2xl">Quick Questions?</CardTitle>
                  <CardDescription className="body-large text-sm sm:text-base">
                    Get instant answers to common questions about our automation services.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 sm:px-8">
                  <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    <div className="space-y-4">
                      <h5 className="font-semibold text-foreground text-lg sm:text-xl">How long does a typical project take?</h5>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">Most automations are completed within 2-4 weeks, depending on complexity and scope.</p>
                    </div>
                    <div className="space-y-4">
                      <h5 className="font-semibold text-foreground text-lg sm:text-xl">Do you offer ongoing support?</h5>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">Yes, we provide 30 days of free support and flexible maintenance options for long-term success.</p>
                    </div>
                    <div className="space-y-4">
                      <h5 className="font-semibold text-foreground text-lg sm:text-xl">What types of automations do you build?</h5>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">We create custom automations for appointment scheduling, lead capture, review collection, and voice AI assistants.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}