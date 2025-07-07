"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  companyName: z.string().optional(),
  serviceOfInterest: z.string().min(1, "Please select a service"),
  projectDetails: z
    .string()
    .max(500, "Project details must be 500 characters or less")
    .optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  children: React.ReactNode;
}

export function ContactForm({ children }: ContactFormProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      companyName: "",
      serviceOfInterest: "",
      projectDetails: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.reset();
        setOpen(false);
        alert("Thank you! We'll get back to you soon.");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="glass-card border-white/20 text-white max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Get a Free Estimation
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="glass-card border-white/20 text-white placeholder:text-white/60"
                      placeholder="Your full name"
                    />
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
                  <FormLabel>Work Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      className="glass-card border-white/20 text-white placeholder:text-white/60"
                      placeholder="your@company.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="glass-card border-white/20 text-white placeholder:text-white/60"
                      placeholder="Your company name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="serviceOfInterest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service of Interest</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="glass-card border-white/20 text-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="glass-card border-white/20 text-white">
                      <SelectItem value="simple-automation">
                        Simple Automation
                      </SelectItem>
                      <SelectItem value="smart-ai-automation">
                        Smart AI Automation
                      </SelectItem>
                      <SelectItem value="not-sure">I&apos;m not sure</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tell us about your project</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="glass-card border-white/20 text-white placeholder:text-white/60 min-h-[100px] resize-none"
                      placeholder="Describe your automation needs..."
                      maxLength={500}
                    />
                  </FormControl>
                  <div className="text-sm text-white/60 text-right">
                    {field.value?.length || 0}/500
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}