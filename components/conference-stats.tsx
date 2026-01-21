"use client"

import { motion } from "framer-motion"

export default function ConferenceStats() {
  const stats = [
    { value: "500+", label: "Expected Attendees", description: "Industry & Academia" },
    { value: "40+", label: "Expert Speakers", description: "Global Leaders" },
    { value: "25+", label: "Sessions & Workshops", description: "Diverse Topics" },
    { value: "2", label: "Days of Excellence", description: "Feb 12 & 13" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">By The Numbers</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Premium card with minimal design */}
              <div className="relative p-8 rounded-lg bg-card/50 border border-foreground/10 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 space-y-3">
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-primary"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground">{stat.label}</h3>
                  <p className="text-sm text-foreground/60">{stat.description}</p>
                </div>

                {/* Top border accent */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
