"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function SpeakerSpotlight() {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-y border-foreground/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Speakers</h2>
            <p className="text-foreground/70 max-w-xl">
              Industry Conclave and Panel Discussion
            </p>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="px-6 py-3 border border-foreground/30 text-foreground font-semibold rounded-lg hover:border-primary hover:text-primary transition-all flex items-center gap-2 whitespace-nowrap"
          >
            View All Speakers
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        {/* Speakers Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* Speaker card */}
              <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-foreground/5 to-transparent border border-foreground/10 p-8 hover:border-primary/50 transition-all duration-300">
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Avatar placeholder */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-background">
                    {speaker.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{speaker.name}</h3>
                    <p className="text-sm text-primary font-semibold mb-3">{speaker.title}</p>
                    <p className="text-sm text-foreground/70 mb-2">{speaker.company}</p>
                    <div className="inline-block px-3 py-1 rounded-full bg-foreground/10 text-xs text-foreground/70 mt-2">
                      {speaker.specialty}
                    </div>
                  </div>
                </div>

                {/* Top border accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
