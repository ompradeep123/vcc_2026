"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Speakers() {
  const speakers = [
    {
      name: "Dr. Sarah Chen",
      title: "Chief Security Officer",
      company: "Global Tech Solutions",
      specialty: "Cloud Security",
      //image: "https://via.placeholder.com/400x400?text=Dr.+Sarah+Chen",
    },
    {
      name: "Prof. Rajesh Kumar",
      title: "Cybersecurity Research Lead",
      company: "Elite University",
      specialty: "Threat Intelligence",
      //image: "https://via.placeholder.com/400x400?text=Prof.+Rajesh+Kumar",
    },
    {
      name: "Alex Thompson",
      title: "Ethical Hacking Expert",
      company: "SecureNet Labs",
      specialty: "Penetration Testing",
      //image: "https://via.placeholder.com/400x400?text=Alex+Thompson",
    },
    {
      name: "Dr. Sarah Chen",
      title: "Chief Security Officer",
      company: "Global Tech Solutions",
      specialty: "Cloud Security",
      //image: "https://via.placeholder.com/400x400?text=Dr.+Sarah+Chen",
    },
    {
      name: "Prof. Rajesh Kumar",
      title: "Cybersecurity Research Lead",
      company: "Elite University",
      specialty: "Threat Intelligence",
      //image: "https://via.placeholder.com/400x400?text=Prof.+Rajesh+Kumar",
    },
    {
      name: "Alex Thompson",
      title: "Ethical Hacking Expert",
      company: "SecureNet Labs",
      specialty: "Penetration Testing",
      //image: "https://via.placeholder.com/400x400?text=Alex+Thompson",
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

        <div className="space-y-12">
          {/* First Row - 4 speakers */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-8 text-center">Conclaves inspiring Panel members</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {speakers.slice(0, 4).map((speaker, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="group p-8 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                    
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

          {/* Second Row - 2 speakers */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-8 text-center">Insightful cyber experts</h3>
            <div className="flex justify-center gap-8">
              {speakers.slice(4, 6).map((speaker, idx) => (
                <motion.div
                  key={idx + 4}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="group p-8 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 w-full md:w-80"
                >
                  <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                    
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
        </div>
      </div>
    </section>
  )
}
