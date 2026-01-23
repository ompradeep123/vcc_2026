"use client"

import Navigation from "@/components/navigation"
import RegisterCTA from "@/components/register-cta"
import Footer from "@/components/footer-premium"
import VideoBg from "@/components/video-bg"
import { motion } from "framer-motion"
import { Clock, PhoneCall, Award, Info, Calendar } from "lucide-react"

export default function RegisterPage() {
  const day1Slots = [
    { time: "9:00 AM - 10:00 AM", event: "Inauguration", desc: "Official Ceremony" },
    { time: "10:30 AM - 12:00 PM", event: "AI vs Cybersecurity", desc: "Panel Discussion" },
    { time: "1:00 PM - 3:30 PM", event: "Idea Vista / Workshop", desc: "Track 1 & 2" },
    { time: "3:30 PM - 4:30 PM", event: "Tech Games", desc: "Forensics & Hunt" },
  ]

  const day2Slots = [
    { time: "9:00 AM - 4:00 PM", event: "FlagHunt 7.0", desc: "7 Hour CTF" },
    { time: "9:00 AM - 12:00 PM", event: "Vibeathon / Workshop", desc: "Hackathon & Blitz" },
    { time: "1:00 PM - 4:00 PM", event: "Tech Games & Quiz", desc: "Multiple Tracks" },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <VideoBg />
      <div className="relative z-10">
        <Navigation />

        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            <RegisterCTA />

            {/* Conclave Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {[
                { title: "Day 1 Timeline", slots: day1Slots, color: "emerald" },
                { title: "Day 2 Timeline", slots: day2Slots, color: "blue" },
              ].map((day, idx) => (
                <div key={idx} className="bg-card/40 backdrop-blur-xl rounded-3xl border border-primary/20 overflow-hidden shadow-2xl">
                  <div className={`p-6 bg-${day.color}-500/10 border-b border-primary/10 flex items-center gap-3`}>
                    <Calendar className={`text-${day.color}-500 w-6 h-6`} />
                    <h3 className="text-2xl font-bold font-serif">{day.title}</h3>
                  </div>
                  <div className="p-6 space-y-6">
                    {day.slots.map((slot, sIdx) => (
                      <div key={sIdx} className="flex gap-4 group">
                        <div className="flex flex-col items-center">
                          <div className={`w-3 h-3 rounded-full bg-${day.color}-500/40 group-hover:bg-${day.color}-500 transition-colors shadow-[0_0_10px_rgba(16,185,129,0.3)]`}></div>
                          {sIdx !== day.slots.length - 1 && <div className="w-px h-full bg-primary/10 mt-1"></div>}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Clock className="w-3.5 h-3.5 text-foreground/40" />
                            <span className="text-xs font-bold text-primary tracking-wider uppercase">{slot.time}</span>
                          </div>
                          <h4 className="font-bold text-lg text-foreground/90">{slot.event}</h4>
                          <p className="text-sm text-foreground/50">{slot.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Accommodation & Fees Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto bg-card/40 backdrop-blur-xl p-10 rounded-3xl border border-primary/20 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full -mr-32 -mt-32"></div>

              <div className="grid md:grid-cols-2 gap-12 relative z-10">
                <div className="space-y-8 flex flex-col">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-inner">
                      <Award className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold font-serif tracking-tight">Event Access</h3>
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="p-5 rounded-2xl bg-foreground/5 border border-foreground/5 flex justify-between items-center group hover:bg-primary/5 hover:border-primary/20 transition-all cursor-default">
                      <span className="font-bold text-foreground/80">One Day Pass</span>
                      <span className="text-xl font-bold text-primary">Rs. 200</span>
                    </div>
                    <div className="p-5 rounded-2xl bg-foreground/5 border border-foreground/5 flex justify-between items-center group hover:bg-accent/5 hover:border-accent/20 transition-all cursor-default">
                      <span className="font-bold text-foreground/80">Full Access (2 Days)</span>
                      <span className="text-2xl font-bold text-accent">Rs. 350</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-8 flex flex-col">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-inner">
                      <PhoneCall className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold font-serif tracking-tight">Stay</h3>
                  </div>
                  <div className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10 flex-1 flex flex-col justify-center">
                    <p className="text-sm font-bold text-primary/70 uppercase tracking-widest mb-3">Hostel Accommodation</p>
                    <p className="text-xl font-bold text-foreground mb-4">
                      For Queries: <span className="text-primary">+91 8008572389</span>
                    </p>

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
