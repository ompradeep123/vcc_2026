"use client"

import { motion } from "framer-motion"

export default function RegisterCTA() {
  return (
    <section id="register" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div>
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Registration</p>
            <h2 className="text-5xl md:text-6xl font-bold font-serif text-foreground mb-6 leading-tight">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Secure your spot at VCC 2026 and be part of the cybersecurity revolution
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
            >
              Register Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-primary text-primary rounded-full font-bold text-lg hover:bg-primary/5 transition-colors"
            >
              Contact Us
            </motion.button>
          </div>

          <p className="text-sm text-foreground/60">Early bird registrations open now</p>
        </motion.div>
      </div>
    </section>
  )
}
