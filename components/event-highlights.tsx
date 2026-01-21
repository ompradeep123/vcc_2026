"use client"

import { motion } from "framer-motion"
import { Flag, Users, Lightbulb, Zap, BookOpen, Gamepad2 } from "lucide-react"

const events = [
  {
    icon: Flag,
    title: "FlagHunt 7.0",
    description: "7-hour CTF Challenge",
    color: "from-primary to-cyan-400",
  },
  {
    icon: Users,
    title: "Panel Discussion",
    description: "AI vs Cybersecurity: Threats, Defence and Ethics",
    color: "from-secondary to-orange-400",
  },
  {
    icon: Lightbulb,
    title: "Idea Vista",
    description: "Idea Pitching & Innovation Presentation",
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: Zap,
    title: "Vibeathon",
    description: "Project Expo & Building using VIBE Coding",
    color: "from-yellow-400 to-orange-400",
  },
  {
    icon: BookOpen,
    title: "Workshops",
    description: "Alert to Evidence: Real-World Incident Response & Forensics",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Gamepad2,
    title: "Tech Games",
    description: "Data Detectives, Logic Links, Escape Rooms & More",
    color: "from-pink-400 to-rose-400",
  },
]

export default function EventHighlights() {
  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Event Highlights</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore the diverse range of cybersecurity challenges, presentations, and networking opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, idx) => {
            const Icon = event.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group glass-effect p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${event.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-foreground/70">{event.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
