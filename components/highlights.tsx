"use client"

import { motion } from "framer-motion"
import { Flag, Users, Lightbulb, Zap, BookOpen, Gamepad2 } from "lucide-react"

const events = [
  {
    icon: Users,
    title: "Panel Discussion",
    description: "AI vs Cybersecurity: Threats, Defence and Ethics",
  },
  {
    icon: Flag,
    title: "FlagHunt 7.0",
    description: "7-hour CTF Challenge",
  },
  {
    icon: Lightbulb,
    title: "Idea Vista",
    description: "Idea Pitching & Innovation Presentation",
  },
  {
    icon: Zap,
    title: "Vibeathon",
    description: "Project Expo & Building using VIBE Coding",
  },
  {
    icon: BookOpen,
    title: "Workshops",
    description: "Alert to Evidence: Real-World Incident Response & Forensics",
  },
  {
    icon: Gamepad2,
    title: "Tech Games",
    description: "Data Detectives, Logic Links, Escape Rooms & More",
  },
]

export default function Highlights() {
  return (
    <section id="highlights" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 sm:mb-4">Event Highlights</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground mb-4 sm:mb-6">
            Diverse Range of Activities
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore cybersecurity challenges, presentations, and networking opportunities designed for all skill levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {events.map((event, idx) => {
            const Icon = event.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-serif">{event.title}</h3>
                <p className="text-foreground/70">{event.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
