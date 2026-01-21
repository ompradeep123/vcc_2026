"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, MapPin } from "lucide-react"

const scheduleData = {
  day1: [
    { time: "09:00 - 10:00", event: "Inauguration", venue: "Main Hall" },
    { time: "10:30 - 12:00", event: "Panel Discussion: AI vs Cybersecurity", venue: "Auditorium" },
    { time: "13:00 - 15:00", event: "Idea Vista & Workshop: Forensics", venue: "Lab A & B" },
    { time: "15:00 - 16:30", event: "Data Detectives & Logic Links", venue: "Lab C & D" },
  ],
  day2: [
    { time: "09:00 - 16:00", event: "FlagHunt 7.0 (CTF Challenge)", venue: "Hacking Lab" },
    { time: "09:00 - 12:00", event: "Vibeathon - Project Expo", venue: "Exhibition Hall" },
    { time: "13:00 - 14:00", event: "Cyber Sentinels Quiz & Escape Rooms", venue: "Hall A & B" },
    { time: "14:15 - 15:15", event: "Log Hunters & Aware Geeks", venue: "Lab E" },
  ],
}

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(1)

  return (
    <section id="schedule" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Event Schedule</p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">Two Days of Excellence</h2>
          <p className="text-lg text-foreground/70">February 12 & 13, 2026</p>
        </motion.div>

        {/* Day Tabs */}
        <div className="flex gap-4 mb-12 justify-center">
          {[
            { day: 1, label: "Day 1 - Feb 12" },
            { day: 2, label: "Day 2 - Feb 13" },
          ].map((item) => (
            <motion.button
              key={item.day}
              onClick={() => setActiveDay(item.day)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeDay === item.day
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-card border border-border text-foreground hover:border-primary/50"
              }`}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Schedule Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {scheduleData[activeDay === 1 ? "day1" : "day2"].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <div className="flex items-center gap-3 min-w-fit">
                    <Clock size={20} className="text-primary" />
                    <span className="font-semibold text-primary font-mono text-sm">{item.time}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground font-serif">{item.event}</h3>
                    <div className="flex items-center gap-2 mt-2 text-foreground/70 text-sm">
                      <MapPin size={16} />
                      {item.venue}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
