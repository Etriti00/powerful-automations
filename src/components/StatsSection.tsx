"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Zap, Clock } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
  color: string;
}

const stats: StatItem[] = [
  {
    icon: Users,
    value: 117,
    label: "Happy Clients",
    color: "text-blue-500",
  },
  {
    icon: Zap,
    value: 500,
    label: "Automations Built",
    suffix: "+",
    color: "text-green-500",
  },
  {
    icon: Clock,
    value: 10000,
    label: "Hours Saved",
    suffix: "+",
    color: "text-orange-500",
  },
];

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationId = requestAnimationFrame(updateCount);
      }
    };

    animationId = requestAnimationFrame(updateCount);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [end, duration]);

  return <span>{count}</span>;
}

export function StatsSection() {
  return (
    <section className="apple-section relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="section-headline text-3xl sm:text-4xl lg:text-5xl mb-6">
            Trusted by Businesses Worldwide
          </h2>
          <p className="body-large text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our automation solutions have helped companies save thousands of hours
            and streamline their operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group px-4 sm:px-0"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-2xl glass-card mb-6 sm:mb-8"
              >
                <stat.icon className={`w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 ${stat.color}`} />
              </motion.div>
              
              <div className="space-y-2 sm:space-y-3">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                  <CountUp end={stat.value} />
                  {stat.suffix && (
                    <span className="text-muted-foreground">{stat.suffix}</span>
                  )}
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 text-center px-4 sm:px-0"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm sm:text-base text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
              <span className="font-medium">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
              <span className="font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-purple-500 rounded-full"></div>
              <span className="font-medium">Voice AI Integration</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}