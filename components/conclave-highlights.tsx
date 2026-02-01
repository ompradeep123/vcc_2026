"use client"

import { motion } from "framer-motion"
import { Users, Lightbulb, Flag, Cpu, Sparkles, Binary, ShieldAlert, Trophy, GraduationCap, Gamepad2 } from "lucide-react"
import Link from "next/link"

export default function ConclaveHighlights() {
  const highlightSegments = [
    {
      title: "Visionary Industry Conclave",
      subtitle: "AI vs Cybersecurity: The Ethical Frontier",
      icon: Users,
      description: "A flagship panel discussion featuring global industry pioneers. Delve into the complex intersection of AI advancement, ethical defense strategies, and the evolving threat landscape.",
      tag: "Day 1 - Main Stage",
      accent: "blue",
      href: "/speakers"
    },
    {
      title: "Poster Presentation: Idea Vista",
      subtitle: "Showcasing Breakthroughs",
      icon: Lightbulb,
      description: "Witness ground-breaking research and innovation through poster presentations. A domain-agnostic platform where inter-disciplinary ideas challenge the status quo.",
      tag: "Day 1 - Track 1",
      accent: "purple",
      href: "/idea-vista"
    },
    {
      title: "The Flagship CTF Showdown",
      subtitle: "FlagHunt 7.0 powered by DigiAlert",
      icon: Flag,
      description: "Seven hours of intense, high-stakes Capture The Flag action. Elite defenders compete through real-world scenarios to claim the ultimate championship throne.",
      tag: "Day 2 - 7-Hour Marathon",
      accent: "red",
      href: "/flaghunt"
    },
    {
      title: "AI-Augmented Vibeathon",
      subtitle: "Next-Gen Problem Solving",
      icon: Cpu,
      description: "A specialized hackathon focusing on VIBE Coding. Participants leverage AI-augmented workflows to build solutions for real-life problem statements.",
      tag: "Day 2 - Technical Hub",
      accent: "emerald",
      href: "/vibathon"
    },
    {
      title: "Advanced Skill Workshops",
      subtitle: "Expert-Led Technical Mastery",
      icon: GraduationCap,
      description: "Deep-dive sessions on Digital Forensics and Bug Bounty Hunting. Gain practical, industry-standard knowledge from seasoned security researchers.",
      tag: "Day 1 & 2 Sessions",
      accent: "cyan",
      href: "/workshops"
    },
    {
      title: "Tech Games & Quizzes",
      subtitle: "Interactive Strategic Arenas",
      icon: Gamepad2,
      description: "Challenge your logic and speed through Data Detectives, Escape Rooms, and technical quizzes. A perfect mix of competition and learning.",
      tag: "Interactive Zones",
      accent: "amber",
      href: "/tech-games"
    }
  ]

  return (
    <section id="conclave-moments" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.4em]">Signature Moments</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-serif leading-tight">
              Event <span className="text-primary italic">Highlights</span>
            </h2>
          </div>
          <p className="text-foreground/50 text-base max-w-sm mb-2">
            Explore the specialized arenas and flagship experiences awaiting you at VCC 2026.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlightSegments.map((item, idx) => {
            const Icon = item.icon
            const accents: Record<string, string> = {
              blue: "border-blue-500/20 bg-blue-500/5 hover:border-blue-500/40 text-blue-500",
              purple: "border-purple-500/20 bg-purple-500/5 hover:border-purple-500/40 text-purple-500",
              red: "border-red-500/20 bg-red-500/5 hover:border-red-500/40 text-red-500",
              emerald: "border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40 text-emerald-500",
              cyan: "border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/40 text-cyan-500",
              amber: "border-amber-500/20 bg-amber-500/5 hover:border-amber-500/40 text-amber-500",
            }

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 md:p-8 bg-card/30 backdrop-blur-xl border border-primary/10 rounded-[2rem] hover:bg-card/50 transition-all duration-500 shadow-xl flex flex-col h-full"
              >
                <div className="flex flex-col gap-6 h-full">
                  <div className="flex justify-between items-start">
                    <div className={`p-4 rounded-2xl bg-background/50 border border-primary/10 group-hover:scale-110 transition-transform duration-500 ${accents[item.accent].split(' ')[2]}`}>
                      <Icon size={32} />
                    </div>
                    <span className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${accents[item.accent]}`}>
                      {item.tag}
                    </span>
                  </div>

                  <div className="space-y-4 flex-1">
                    <div>
                      <h3 className="text-xl font-bold font-serif group-hover:text-primary transition-colors duration-300 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-foreground/80 font-medium text-xs italic mt-1">{item.subtitle}</p>
                    </div>

                    <p className="text-foreground/60 text-xs leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-primary/5">
                    <Link
                      href={item.href}
                      className="text-[10px] font-bold uppercase tracking-widest text-primary hover:text-primary/70 transition-colors flex items-center gap-2 group/btn"
                    >
                      Learn More
                      <span className="group-hover/btn:translate-x-1 transition-transform text-lg">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Floating Background Elements */}
        <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-30 select-none text-center">
          {[
            { icon: Binary, text: "Advanced Cryptography" },
            { icon: ShieldAlert, text: "Incident Response" },
            { icon: Trophy, text: "Elite Competition" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <item.icon size={16} className="text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-foreground/40">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
