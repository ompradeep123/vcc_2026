"use client"

import { motion } from "framer-motion"
import { Clock, MapPin, ArrowRight } from "lucide-react"

export default function SessionTimeline() {
  const sessions = [
    {
      time: "09:00 AM",
      title: "Opening Keynote: The Future of Cyber Defense",
      speaker: "Dr. Sarah Chen",
      location: "Main Auditorium",
      day: "Day 1",
    },
    {
      time: "10:30 AM",
      title: "Advanced Threat Intelligence & Analysis",
      speaker: "Prof. Rajesh Kumar",
      location: "Hall A",
      day: "Day 1",
    },
    {
      time: "01:00 PM",
      title: "Hands-on: Penetration Testing Workshop",
      speaker: "Alex Thompson",
      location: "Lab Room 1",
      day: "Day 1",
    },
    {
      time: "03:30 PM",
      title: "Industry Panel: Cybersecurity Trends 2026",
      speaker: "Multiple Speakers",
      location: "Main Auditorium",
      day: "Day 1",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Conference Schedule</h2>
          <p className="text-foreground/70">
            Carefully curated sessions designed to maximize learning and networking opportunities.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-4">
          {sessions.map((session, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-6 rounded-lg border border-foreground/10 bg-card/30 hover:bg-card/60 hover:border-primary/30 transition-all duration-300">
                {/* Timeline connector line */}
                {index < sessions.length - 1 && (
                  <div className="absolute -bottom-4 left-6 w-0.5 h-4 bg-gradient-to-b from-primary/50 to-transparent" />
                )}

                <div className="flex gap-6">
                  {/* Time badge */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xs font-semibold text-primary uppercase">{session.day}</div>
                        <div className="font-mono text-sm font-bold text-foreground mt-1">{session.time}</div>
                      </div>
                    </div>
                  </div>

                  {/* Session content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {session.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-3">by {session.speaker}</p>

                    <div className="flex flex-col sm:flex-row gap-4 text-xs text-foreground/60">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-primary" />
                        {session.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-primary" />
                        {session.time}
                      </div>
                    </div>
                  </div>

                  {/* Action arrow */}
                  <div className="flex-shrink-0 flex items-center">
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load more button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 border border-foreground/30 text-foreground font-semibold rounded-lg hover:border-primary hover:text-primary transition-all">
            View Complete Schedule
          </button>
        </motion.div>
      </div>
    </section>
  )
}
