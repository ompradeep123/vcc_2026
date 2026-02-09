"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer-premium"
import { motion } from "framer-motion"
import { Flag, Target, Trophy, Users, BookOpen, ShieldAlert, Cpu, Terminal, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function FlagHunt() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-20 bg-gradient-to-br from-red-500/10 via-background to-orange-500/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6 flex justify-center">
              <Flag className="w-16 h-16 text-red-500 animate-bounce" />
            </div>
            <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6 text-balance">
              FlagHunt <span className="text-red-500">7.0</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8">
              An intense cybersecurity Capture The Flag competition featuring real-world scenarios, advanced challenges,
              and substantial prizes.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-6 flex flex-col items-center gap-1"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
              <motion.p
                animate={{
                  textShadow: ["0 0 0px rgba(239, 68, 68, 0)", "0 0 15px rgba(239, 68, 68, 0.4)", "0 0 0px rgba(239, 68, 68, 0)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-foreground/60"
              >
                Powered By <span className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">DigiAlert</span>
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-2"
              >
                <Image
                  src="/logo/digialert.png"
                  alt="DigiAlert Logo"
                  width={150}
                  height={50}
                  className="h-auto w-auto max-h-12 object-contain brightness-110 contrast-125"
                />
              </motion.div>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-red-500/50 to-transparent mt-1"></div>
            </motion.div>

            <div className="flex flex-col items-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                disabled
                className="px-8 py-4 bg-red-500/50 text-white rounded-full font-semibold cursor-not-allowed transition-colors shadow-lg shadow-red-500/25"
              >
                Registration Closed
              </motion.button>
              <p className="text-red-500 font-bold animate-pulse text-sm sm:text-base">See you next year!</p>
            </div>

            {/* Enhanced Complex Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="flex flex-col items-center gap-4 mt-8"
            >
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-500/60 mb-2">Discover More</span>

              <div className="relative flex items-center justify-center">
                {/* Outer Glow Rings */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute w-20 h-20 bg-red-500/20 rounded-full blur-xl"
                />

                {/* Animated Mouse Body */}
                <div className="w-8 h-12 border-2 border-foreground/30 rounded-full flex justify-center p-1.5 relative z-10">
                  <motion.div
                    animate={{
                      y: [0, 20],
                      opacity: [1, 0],
                      scale: [1, 0.8]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-1.5 h-3 bg-red-500 rounded-full"
                  />
                </div>
              </div>

              {/* Cascading Chevrons */}
              <div className="flex flex-col items-center -space-y-2 mt-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: [0.2, 1, 0.2],
                      y: [0, 4, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  >
                    <ChevronDown className={`w-6 h-6 ${i === 1 ? 'text-red-500/80' : 'text-red-500/40'}`} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Competition Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Challenge Categories</h2>
              <ul className="space-y-4">
                {[
                  "Web Application Security",
                  "Cryptography & Forensics",
                  "Reverse Engineering",
                  "Pwning & Exploitation",
                  "Network Security",
                ].map((category, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg">
                    <Target className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>{category}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="p-6 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-lg border border-border">
                <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-red-500" />
                  Prizes
                </h3>
                <ul className="space-y-3 mt-4">
                  {[
                    "Exciting Cash Prizes",
                    "Achievement Certificates",
                    "Special Winners Shields",
                    "Exclusive Internship Opportunities",
                  ].map((prize, idx) => (
                    <li key={idx} className="flex items-center gap-3 bg-red-500/10 p-4 rounded-xl border border-red-500/20 text-foreground font-bold text-base transition-all hover:bg-red-500/20">
                      <Trophy className="w-5 h-5 text-red-500" />
                      <span>{prize}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 rounded-lg border border-border">
                <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                  <Users className="w-6 h-6 text-orange-500" />
                  Team Format
                </h3>
                <p className="text-foreground/70">Teams of 1-2 members from same or different institutions</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto bg-card/30 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-primary/20 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              {/* Left Column: Competition Instructions */}
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20 shadow-sm">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-serif tracking-tight text-foreground">Competition Guidelines</h3>
                </div>

                <div className="space-y-6 flex-1">
                  <div className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 shrink-0 flex items-center justify-center border border-red-500/20 group-hover:bg-red-500/20 transition-all duration-300">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1.5 text-foreground/90">Flag Submission Format</h4>
                      <p className="text-foreground/60 text-sm leading-relaxed">
                        Submit flags in the standard format: <code className="bg-red-500/10 px-2.5 py-0.5 rounded text-red-400 font-mono font-bold border border-red-500/10 text-xs">VCC&#123;flag_text&#125;</code>.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 shrink-0 flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-500/20 transition-all duration-300">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1.5 text-foreground/90">Zero Tolerance Policy</h4>
                      <p className="text-foreground/60 text-sm leading-relaxed">
                        Attacking the scoring portal or infrastructure results in <span className="text-orange-500 font-bold">immediate disqualification</span>.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 shrink-0 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-all duration-300">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1.5 text-foreground/90">Resources & Hardware</h4>
                      <p className="text-foreground/60 text-sm leading-relaxed">
                        Teams must carry their own laptops with necessary tools pre-installed for the event.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Quick Rules */}
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 border border-accent/20 shadow-sm">
                    <Flag className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-serif tracking-tight text-foreground">Quick Rules</h3>
                </div>

                <div className="bg-foreground/5 rounded-2xl p-6 md:p-8 border border-foreground/10 flex-1">
                  <ul className="space-y-4">
                    {[
                      "Strictly no flag sharing between teams.",
                      "Judge's final decision is binding and absolute.",
                      "Teams must consist of 1 to 2 members only.",
                      "Categorized challenges with dynamic point scaling.",
                      "Tie-breaker: First team to reach the score wins.",
                      "Unfair means will lead to direct blacklisting."
                    ].map((rule, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 p-3 rounded-xl bg-background/40 border border-foreground/5 transition-all duration-300 hover:border-primary/20">
                        <div className="mt-1.5 w-2 h-2 rounded-[2px] bg-primary/60 shrink-0" />
                        <span className="text-sm text-foreground/80 font-medium leading-normal">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
