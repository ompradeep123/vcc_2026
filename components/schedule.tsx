"use client"

import { motion } from "framer-motion"
import { Award, Clock, Info, PhoneCall } from "lucide-react"

interface TrackInfo {
  track?: string
  event: string
  description: string
}

interface ScheduleSlot {
  time: string
  type: "full" | "split"
  event?: string
  description?: string
  tracks?: TrackInfo[]
}

export default function Schedule() {
  const day1Events = {
    title: "DAY-1",
    date: "12.02.2026",
    headerColor: "bg-gradient-to-r from-emerald-600/40 to-emerald-800/40 backdrop-blur-md", // Professional emerald gradient
    slots: [
      {
        time: "9.00 am - 10.00 am",
        type: "full",
        event: "Inauguration",
        description: "Official Opening Ceremony",
      },
      {
        time: "10.30 am - 12.00 pm",
        type: "full",
        event: "AI vs Cybersecurity: Threats, Defence and Ethics",
        description: "(Industry Conclave - Panel Discussion)",
      },
      {
        time: "1.00 pm - 3.30 pm",
        type: "split",
        tracks: [
          {
            track: "Track-1",
            event: "Idea Vista",
            description: "(Poster Presentation: Showcasing Tech Innovations)",
          },
          {
            track: "Track-2",
            event: "Alert to Evidence: Forensics & Incident Response",
            description: "(Workshop)",
          },
        ],
      },
      {
        time: "3.30 pm - 4.30 pm",
        type: "split",
        tracks: [
          {
            event: "Data Detectives",
            description: "(Tech Game: Forensics)",
          },
          {
            event: "Logic Links",
            description: "(Tech Game: Hunt using QR)",
          },
        ],
      },
    ] as ScheduleSlot[],
  }

  const day2Events = {
    title: "DAY-2",
    date: "13.02.2026",
    headerColor: "bg-gradient-to-r from-blue-600/40 to-blue-800/40 backdrop-blur-md", // Professional blue gradient
    ctf: {
      time: "9.00 am - 4.00 pm",
      track: "Track-1",
      event: "FlagHunt 7.o",
      description: "(7 hours CTF Challenge)",
    },
    slots: [
      {
        time: "9.00 am - 12.00 pm",
        type: "split",
        tracks: [
          {
            track: "Track-2",
            event: "Vibeathon",
            description: "(Hackathon on VIBE Coding)",
          },
          {
            track: "Track-3",
            event: "Bug Bounty Blitz",
            description: "(Workshop)",
          },
        ],
      },
      {
        time: "1.00 pm - 2.30 pm",
        type: "split",
        tracks: [
          {
            event: "Cyber Sentinels",
            description: "(Tech Quiz)",
          },
          {
            event: "Escape Rooms",
            description: "(Tech Game)",
          },
        ],
      },
      {
        time: "2.30 pm - 4.00 pm",
        type: "split",
        tracks: [
          {
            event: "Log Hunters",
            description: "(Decode Logs and Detect it)",
          },
          {
            event: "Aware Geeks",
            description: "(Tech Game: Cyber Awareness)",
          },
        ],
      },
    ] as ScheduleSlot[],
  }

  return (
    <section id="schedule" className="py-16 px-4 sm:px-6 lg:px-8 relative bg-background">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">Event Schedule</p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">Timeline of Innovation</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Day 1 Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className={`rounded-t-xl ${day1Events.headerColor} p-4 text-white text-center border-b border-white/20 shadow-lg`}>
              <h3 className="text-xl font-bold tracking-tight">{day1Events.title} ({day1Events.date})</h3>
            </div>

            <div className="flex-1 bg-card/30 backdrop-blur-sm border-x border-b border-foreground/10 rounded-b-xl overflow-hidden divide-y divide-foreground/10">
              {day1Events.slots.map((slot, idx) => (
                <div key={idx} className={`flex min-h-[130px] ${idx === 0 ? "bg-emerald-500/10 border-l-4 border-l-emerald-500/50" : ""}`}>
                  <div className={`w-32 sm:w-44 p-4 flex flex-col items-center justify-center text-center border-r border-foreground/10 shrink-0 ${idx === 0 ? "bg-emerald-500/15" : "bg-foreground/5"}`}>
                    <Clock size={18} className={`${idx === 0 ? "text-emerald-500" : "text-primary"} mb-1.5`} />
                    <div className={`text-sm sm:text-base font-bold uppercase leading-tight ${idx === 0 ? "text-emerald-500" : "text-foreground/70"}`}>
                      {slot.time.split(' - ').map((t, i) => (
                        <div key={i}>{t}</div>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1">
                    {slot.type === "full" ? (
                      <div className="p-6 h-full flex flex-col justify-center text-center">
                        <h4 className={`text-xl font-bold mb-2 font-serif ${idx === 0 ? "text-emerald-500" : "text-foreground"}`}>{slot.event}</h4>
                        <p className={`text-sm ${idx === 0 ? "text-emerald-500/70" : "text-foreground/50"}`}>{slot.description}</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 h-full">
                        {slot.tracks?.map((track, tIdx) => (
                          <div key={tIdx} className={`p-5 flex flex-col justify-center text-center ${tIdx === 0 ? "border-r border-foreground/10" : ""} hover:bg-primary/5 transition-colors`}>
                            {track.track && <span className="text-sm font-bold text-primary uppercase mb-2">{track.track}</span>}
                            <h4 className="text-base font-bold text-foreground mb-1">{track.event}</h4>
                            <p className="text-sm text-foreground/40 leading-tight">{track.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Day 2 Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className={`rounded-t-xl ${day2Events.headerColor} p-4 text-white text-center border-b border-white/20 shadow-lg`}>
              <h3 className="text-xl font-bold tracking-tight">{day2Events.title} ({day2Events.date})</h3>
            </div>

            <div className="flex-1 bg-card/30 backdrop-blur-sm border-x border-b border-foreground/10 rounded-b-xl overflow-hidden divide-y divide-foreground/10">
              {/* FlagHunt Special Slot */}
              <div className="flex bg-blue-600/10 min-h-[150px] border-l-4 border-l-blue-600/50">
                <div className="w-32 sm:w-44 p-4 bg-blue-600/10 flex flex-col items-center justify-center text-center border-r border-foreground/10 shrink-0">
                  <Clock size={18} className="text-blue-500 mb-1.5" />
                  <div className="text-sm sm:text-base font-bold text-blue-500 uppercase leading-tight">
                    {day2Events.ctf.time.split(' - ').map((t, i) => (
                      <div key={i}>{t}</div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 p-6 relative">
                  <div className="text-center">
                    <span className="text-[10px] font-bold text-blue-500 uppercase mb-1 block">{day2Events.ctf.track}</span>
                    <h4 className="text-2xl font-bold text-blue-400 mb-1.5 font-serif">{day2Events.ctf.event}</h4>
                    <div className="text-sm text-blue-400/60 leading-relaxed max-w-md mx-auto">
                      <p className="mb-3">{day2Events.ctf.description}</p>
                      <ul className="grid grid-cols-2 gap-2 text-left bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
                        <li className="flex items-center gap-2 text-blue-300 font-bold text-xs uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          Cash Prizes
                        </li>
                        <li className="flex items-center gap-2 text-blue-300 font-bold text-xs uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          Certificates
                        </li>
                        <li className="flex items-center gap-2 text-blue-300 font-bold text-xs uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          Shields
                        </li>
                        <li className="flex items-center gap-2 text-blue-300 font-bold text-xs uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          Internships
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 opacity-20 text-blue-500">
                    <Award size={48} />
                  </div>
                </div>
              </div>

              {day2Events.slots.map((slot, idx) => (
                <div key={idx} className="flex min-h-[130px]">
                  <div className="w-32 sm:w-44 p-4 bg-foreground/5 flex flex-col items-center justify-center text-center border-r border-foreground/10 shrink-0">
                    <Clock size={18} className="text-primary mb-1.5" />
                    <div className="text-sm sm:text-base font-bold text-foreground/70 uppercase leading-tight">
                      {slot.time.split(' - ').map((t, i) => (
                        <div key={i}>{t}</div>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="grid grid-cols-2 h-full">
                      {slot.tracks?.map((track, tIdx) => (
                        <div key={tIdx} className={`p-5 flex flex-col justify-center text-center ${tIdx === 0 ? "border-r border-foreground/10" : ""} hover:bg-primary/5 transition-colors`}>
                          {track.track && <span className="text-sm font-bold text-primary uppercase mb-2">{track.track}</span>}
                          <h4 className="text-base font-bold text-foreground mb-1">{track.event}</h4>
                          <p className="text-sm text-foreground/40 leading-tight">{track.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Registration Section (Restored Previous Design) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto rounded-2xl p-8 border border-primary/20 bg-gradient-to-br from-card/80 to-background backdrop-blur-md shadow-xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Award size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-serif text-foreground">Registration Fee</h3>
              <p className="text-foreground/50 text-xs">Join the Elite Cybersecurity Gathering</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between p-3 rounded-lg bg-foreground/5 border border-foreground/5 group hover:border-primary/30 transition-all">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-foreground/80 font-bold text-base">One Day Participation</span>
              </div>
              <span className="text-xl font-bold text-primary">Rs.200 <span className="text-xs text-foreground/40 font-normal">/ Team</span></span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-foreground/5 border border-foreground/5 group hover:border-primary/30 transition-all">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-foreground/80 font-bold text-base">Two Days Participation</span>
              </div>
              <span className="text-xl font-bold text-accent">Rs.350 <span className="text-xs text-foreground/40 font-normal">/ Team</span></span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 flex gap-3 items-center group hover:bg-primary/15 transition-all">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                <PhoneCall size={16} />
              </div>
              <p className="text-sm md:text-base text-foreground font-semibold tracking-wide">
                For Accommodation Queries please contact : <span className="text-primary font-bold ml-1">+91 8008572389</span>
              </p>
            </div>

            <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 flex gap-3 items-start">
              <Info className="text-primary mt-0.5 shrink-0" size={14} />
              <p className="text-[11px] text-foreground/70 leading-relaxed italic">
                <strong>Note:</strong> Participants can join all events on their registered day(s).
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
