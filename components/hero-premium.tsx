"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroPremium() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 bg-transparent relative overflow-hidden text-sidebar-border">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-15"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="-mt-10 mb-0 flex justify-center"
          >
            <img
              src={`/vCC_logo.png?t=${new Date().getTime()}`}
              alt="VCC Logo"
              className="w-auto h-auto max-w-2xl drop-shadow-2xl"
            />
          </motion.div>

          <p className="text-primary text-base font-bold tracking-widest uppercase mb-2 -mt-32">
            Academia-Industry Conclave
          </p>

          <h1 className="font-serif text-6xl md:text-8xl font-black text-foreground leading-tight mb-8 text-balance drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}>
            Vel Tech <span className="text-primary">CyberCatalyst</span> 2026
          </h1>

          <p className="text-2xl text-foreground max-w-2xl mx-auto mb-8 leading-relaxed font-semibold mt-50" style={{ textShadow: '0 1px 6px rgba(0, 0, 0, 0.8)' }}>
            Unveiling the Future of Cyber Defence. Two days of cutting-edge insights, industry leaders, and innovation
            shaping tomorrow's cybersecurity landscape.
          </p>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 text-foreground" style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.8)' }}>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif">📅</span>
              <span className="text-base font-bold">February 12 & 13, 2026</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif">📍</span>
              <span className="text-base font-bold">Vel Tech Chennai</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open('https://apps.veltech.edu.in/registration/cybercatalyst/reg/', '_blank')}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Register Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/5 transition-colors"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
