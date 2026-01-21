"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center py-12 sm:py-16 md:pt-20 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-4 sm:mb-6">
              <span className="inline-block px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                🚀 2026 Edition
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
              <span className="gradient-text">Vel Tech CyberCatalyst</span>
              <br />
              <span className="text-foreground">2026</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-foreground/70 mb-3 sm:mb-4 text-balance">
              An Academia-Industry Conclave | Unveiling the Future of Cyber Defence
            </p>

            <div className="flex flex-col gap-2 sm:gap-4 text-foreground/60 mb-6 sm:mb-8 text-balance text-sm sm:text-base">
              <span className="flex items-center gap-2">📅 February 12 & 13, 2026</span>
              <span className="flex items-center gap-2">📍 Vel Tech Rangarajan Dr. Sagunthala R&D Institute</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button onClick={() => window.open('https://apps.veltech.edu.in/registration/cybercatalyst/reg/', '_blank')} className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105 flex items-center justify-center gap-2 group text-sm sm:text-base">
                Register Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-primary/50 rounded-lg font-semibold text-primary hover:bg-primary/10 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                View Schedule <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>

          {/* Right Visual - Animated Shield */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-64 sm:h-80 md:h-96 hidden sm:block"
          >
            <div className="absolute inset-0 float">
              <svg viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                {/* Outer Shield */}
                <defs>
                  <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00d9ff" />
                    <stop offset="100%" stopColor="#ff6b3d" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <path
                  d="M 100 20 L 170 50 L 170 110 Q 100 170 100 170 Q 100 170 30 110 L 30 50 Z"
                  fill="none"
                  stroke="url(#shieldGrad)"
                  strokeWidth="2"
                  opacity="0.8"
                  filter="url(#glow)"
                />

                <path
                  d="M 100 20 L 170 50 L 170 110 Q 100 170 100 170 Q 100 170 30 110 L 30 50 Z"
                  fill="rgba(0, 217, 255, 0.1)"
                  stroke="url(#shieldGrad)"
                  strokeWidth="1"
                />

                {/* Lock Symbol */}
                <circle
                  cx="100"
                  cy="100"
                  r="30"
                  fill="none"
                  stroke="url(#shieldGrad)"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <rect
                  x="85"
                  y="90"
                  width="30"
                  height="35"
                  rx="3"
                  fill="none"
                  stroke="url(#shieldGrad)"
                  strokeWidth="2"
                />
                <circle cx="100" cy="85" r="8" fill="none" stroke="url(#shieldGrad)" strokeWidth="2" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
