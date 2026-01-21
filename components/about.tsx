"use client"

import { motion } from "framer-motion"

export default function About() {
  const stats = [
    { number: "50+", label: "Industry Experts" },
    { number: "500+", label: "Participants" },
    { number: "2", label: "Days of Learning" },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">About The Conclave</p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6 leading-tight">
              Bridging Academia and Industry
            </h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Vel Tech CyberCatalyst 2026 is a premier conclave organized by the School of Computing, Department of
              Cyber Security, and VelSecure Student's Cyber Club. This event bridges the critical gap between academic
              theory and industrial reality.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Whether you're a seasoned professional seeking the latest insights or a student eager to launch your
              cybersecurity career, VCC 2026 offers an unparalleled platform for learning, networking, and hands-on
              experience.
            </p>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <div className="text-4xl font-bold text-primary font-serif mb-2">{stat.number}</div>
                <p className="text-foreground/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
