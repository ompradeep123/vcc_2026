"use client"

import { motion } from "framer-motion"

export default function RegisterCTA() {
  return (
    <section id="register" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-primary/5 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6 sm:space-y-8"
        >
          <div>
            <p className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 sm:mb-4">Registration</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-foreground mb-4 sm:mb-6 leading-tight">
              Ready to Join Us?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Secure your spot at VCC 2026 and be part of the cybersecurity revolution
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-primary/50 text-primary-foreground rounded-full font-bold text-sm sm:text-lg cursor-not-allowed transition-colors shadow-lg shadow-primary/30"
            >
              Registration Closed
            </motion.button>
            <p className="text-primary font-bold animate-pulse text-sm sm:text-base">See you next year!</p>
          </div>

          <p className="text-xs sm:text-sm text-foreground/60 underline decoration-primary/30">Registration is officially closed for the 2026 edition</p>
        </motion.div>
      </div>
    </section>
  )
}
