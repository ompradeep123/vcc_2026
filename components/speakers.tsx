"use client"

import { motion } from "framer-motion"

export default function Speakers() {
  const speakers = [
    {
      name: "Dr. Sarah Chen",
      title: "Chief Security Officer",
      company: "Global Tech Solutions",
      specialty: "Cloud Security",
    },
    {
      name: "Prof. Rajesh Kumar",
      title: "Cybersecurity Research Lead",
      company: "Elite University",
      specialty: "Threat Intelligence",
    },
    {
      name: "Alex Thompson",
      title: "Ethical Hacking Expert",
      company: "SecureNet Labs",
      specialty: "Penetration Testing",
    },
  ]

  return (
    <section id="speakers" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Featured Speakers</p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">Industry Leaders & Experts</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Learn from pioneers shaping the future of cybersecurity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {speakers.map((speaker, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group p-8 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-primary-foreground mb-6">
                {speaker.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-serif">{speaker.name}</h3>
              <p className="text-sm text-primary font-semibold mb-2">{speaker.title}</p>
              <p className="text-sm text-foreground/70 mb-4">{speaker.company}</p>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-xs text-primary font-medium">
                {speaker.specialty}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
