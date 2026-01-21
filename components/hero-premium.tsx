"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroPremium() {
  return (
    <section className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:pt-20 md:pb-20 bg-transparent relative overflow-hidden text-sidebar-border">
      {/* Decorative elements */}
      <div className="absolute top-10 right-5 sm:top-20 sm:right-10 w-40 h-40 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl opacity-15"></div>
      <div className="absolute -bottom-10 -left-5 sm:bottom-20 sm:left-10 w-48 h-48 sm:w-96 sm:h-96 bg-secondary/5 rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="-mt-6 sm:-mt-10 mb-0 flex justify-center"
          >
            <img
              src="/vCC_logo.png"
              alt="VCC Logo"
              className="w-auto h-auto max-w-xs sm:max-w-md md:max-w-2xl drop-shadow-2xl"
            />
          </motion.div>

          <p className="text-primary text-xs sm:text-sm md:text-base font-bold tracking-widest uppercase mb-2 -mt-4 sm:-mt-8 md:-mt-32">
            Academia-Industry Conclave
          </p>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-foreground leading-tight mb-4 sm:mb-8 text-balance drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}>
            Vel Tech <span className="text-primary">CyberCatalyst</span> 2026
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed font-semibold" style={{ textShadow: '0 1px 6px rgba(0, 0, 0, 0.8)' }}>
            Unveiling the Future of Cyber Defence. Two days of cutting-edge insights, industry leaders, and innovation
            shaping tomorrow's cybersecurity landscape.
          </p>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 sm:mb-12 text-foreground" style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.8)' }}>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-serif">📅</span>
              <span className="text-sm sm:text-base font-bold">February 12 & 13, 2026</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border"></div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-serif">📍</span>
              <span className="text-sm sm:text-base font-bold">Vel Tech Chennai</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open('https://apps.veltech.edu.in/registration/cybercatalyst/reg/', '_blank')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base"
            >
              Register Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/5 transition-colors text-sm sm:text-base"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
