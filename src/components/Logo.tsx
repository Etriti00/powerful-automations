"use client";

import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  showText?: boolean;
}

export function Logo({ size = "md", className = "", showText = true }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-lg",
    lg: "w-12 h-12 text-xl"
  };

  return (
    <motion.div
      className={`flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className={`${sizeClasses[size]} relative`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#007AFF" />
              <stop offset="100%" stopColor="#5856D6" />
            </linearGradient>
          </defs>
          
          {/* Main gear/cog */}
          <g transform="translate(20,20)">
            {/* Gear teeth */}
            <path
              d="M -12 -2 L -14 -2 L -14 -4 L -12 -4 L -10 -6 L -6 -10 L -4 -12 L -4 -14 L -2 -14 L -2 -12 L 0 -10 L 2 -12 L 2 -14 L 4 -14 L 4 -12 L 6 -10 L 10 -6 L 12 -4 L 14 -4 L 14 -2 L 12 -2 L 10 0 L 12 2 L 14 2 L 14 4 L 12 4 L 10 6 L 6 10 L 4 12 L 4 14 L 2 14 L 2 12 L 0 10 L -2 12 L -2 14 L -4 14 L -4 12 L -6 10 L -10 6 L -12 4 L -14 4 L -14 2 L -12 2 L -10 0 Z"
              fill="url(#logoGradient)"
              opacity="0.1"
            />
            
            {/* Main gear body */}
            <circle cx="0" cy="0" r="8" fill="url(#logoGradient)" opacity="0.2" />
            <circle cx="0" cy="0" r="6" stroke="url(#logoGradient)" strokeWidth="1.5" fill="none" />
            
            {/* Center hole */}
            <circle cx="0" cy="0" r="2" fill="white" />
            <circle cx="0" cy="0" r="2" stroke="url(#logoGradient)" strokeWidth="1" fill="none" />
          </g>
          
          {/* Small gear top-right */}
          <g transform="translate(30,10)">
            <path
              d="M -4 -1 L -5 -1 L -5 -2 L -4 -2 L -3 -3 L -1 -3 L 0 -4 L 0 -5 L 1 -5 L 1 -4 L 3 -1 L 4 -1 L 5 -1 L 5 0 L 4 0 L 3 1 L 1 4 L 1 5 L 0 5 L 0 4 L -1 3 L -3 3 L -4 2 L -5 2 L -5 1 L -4 1 L -3 0 Z"
              fill="url(#logoGradient)"
              opacity="0.15"
            />
            <circle cx="0" cy="0" r="3" stroke="url(#logoGradient)" strokeWidth="1" fill="none" />
            <circle cx="0" cy="0" r="1" fill="url(#logoGradient)" />
          </g>
          
          {/* Process flow arrows */}
          <g>
            {/* Workflow arrow 1 */}
            <path
              d="M 6 20 L 14 20"
              stroke="url(#logoGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              markerEnd="url(#arrowhead)"
            />
            
            {/* Workflow arrow 2 */}
            <path
              d="M 26 20 L 34 20"
              stroke="url(#logoGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              markerEnd="url(#arrowhead)"
            />
            
            {/* Connecting line */}
            <path
              d="M 20 12 L 20 8"
              stroke="url(#logoGradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
          
          {/* Process nodes */}
          <circle cx="4" cy="20" r="2" fill="url(#logoGradient)" opacity="0.7" />
          <circle cx="36" cy="20" r="2" fill="url(#logoGradient)" opacity="0.7" />
          
          <defs>
            <marker
              id="arrowhead"
              markerWidth="8"
              markerHeight="6"
              refX="7"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <polygon
                points="0 0, 8 3, 0 6"
                fill="url(#logoGradient)"
              />
            </marker>
          </defs>
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <motion.span
            className={`font-bold bg-gradient-to-r from-[#007AFF] to-[#5856D6] bg-clip-text text-transparent ${
              size === "sm" ? "text-sm" : size === "md" ? "text-lg" : "text-xl"
            }`}
            style={{ 
              fontFamily: 'Figtree, sans-serif',
              fontWeight: 800,
              letterSpacing: '-0.02em'
            }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Power Automations
          </motion.span>
        </div>
      )}
    </motion.div>
  );
}