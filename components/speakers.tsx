"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Network, Zap, TrendingUp, MessageSquare, ShieldCheck, Users } from "lucide-react"

export default function Speakers() {
  const speakers = [
    {
      name: "Ms. Dija S",
      title: "Scientist F, CDAC-Trivandrum",
      company: "Chief Guest & Panelist",
      image: "/speakers/dija.png",
    },
    {
      name: "Mr. Ramanathan Kannabiran",
      title: "Director-ManageEngine, ZOHO Corporation, Chennai",
      company: "Panelist",
      image: "/speakers/ramanathan.png",
    },
    {
      name: "Mr. Vinod Senthil",
      title: "Managing Director, DigiALERT, Chennai",
      company: "Panel-Moderator",
      image: "/speakers/vinod.png",
    },
    {
      name: "Dr. Prabhakar Ramakrishnan",
      title: "CISO & AVP, TNQTech, Chennai",
      company: "Panelist",
      image: "/speakers/prabhakar.png",
    },
  ]

  const benefits = [
    {
      icon: Network,
      title: "Strategic Networking",
      description: "Connect with industry pioneers, C-suite executives, and fellow cybersecurity enthusiasts to expand your professional circle.",
      color: "from-blue-600 to-cyan-500",
    },
    {
      icon: Zap,
      title: "AI & Security Fusion",
      description: "Understand the dual-edged nature of AI in both threat generation and automated defense mechanisms.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: TrendingUp,
      title: "Industry Trends",
      description: "Stay ahead of the curve by learning about the latest developments in threat intelligence and ethical hacking.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: MessageSquare,
      title: "Expert Panels",
      description: "Witness high-level debates on the ethics of AI and the future of human-led vs machine-led security.",
      color: "from-purple-600 to-pink-500",
    },
    {
      icon: ShieldCheck,
      title: "Defensive Mastery",
      description: "Gain actionable insights into building robust, AI-resistant security architectures for modern enterprises.",
      color: "from-red-500 to-rose-600",
    },
    {
      icon: Users,
      title: "Community Growth",
      description: "Be part of a vibrant ecosystem dedicated to securing the digital future through collaborative innovation.",
      color: "from-primary to-blue-500",
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
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-10">Industry Conclave and Panel Discussion</h2>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#D4AF37] mb-6">AI vs Cybersecurity : Threats , Defence and Ethics</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-serif text-foreground max-w-2xl mx-auto">

          </h3>
        </motion.div>

        <div className="space-y-24">
          {/* First Row - 4 speakers */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-8 text-center uppercase tracking-wider">Conclaves inspiring Panel members</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {speakers.map((speaker, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="group p-8 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border-4 border-primary/20">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-full"
                      unoptimized={speaker.image.startsWith('/speakers/')}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 font-serif min-h-[2.5rem] flex items-center justify-center">{speaker.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-2 min-h-[2.25rem] flex items-center justify-center text-center">{speaker.title}</p>
                  <p className="text-sm text-foreground/70 mb-4 min-h-[2rem] flex items-center justify-center text-center">{speaker.company}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">Benefits of Conclave</h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group glass-effect p-8 rounded-xl border border-primary/10 hover:border-[#D4AF37]/50 transition-all hover:shadow-xl hover:shadow-[#D4AF37]/5 bg-card/50"
                  >
                    <div
                      className={`w-14 h-14 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-serif text-foreground group-hover:text-[#D4AF37] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed font-sans">{benefit.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
