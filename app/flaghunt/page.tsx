"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer-premium"
import { motion } from "framer-motion"
import { Flag, Target, Trophy, Users } from "lucide-react"

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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open('https://apps.veltech.edu.in/registration/cybercatalyst/reg/', '_blank')}
              className="px-8 py-4 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors"
            >
              Register Team Now
            </motion.button>
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
                  "Cloud Security",
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
                <p className="text-foreground/70">Distributed among top performers</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 rounded-lg border border-border">
                <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                  <Users className="w-6 h-6 text-orange-500" />
                  Team Format
                </h3>
                <p className="text-foreground/70">Teams of 1-2 members from different institutions</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-red-500/10 to-orange-500/10 p-8 rounded-lg border border-border"
          >
            <h3 className="text-2xl font-semibold mb-4">About FlagHunt</h3>
            <p className="text-foreground/70 leading-relaxed mb-4">
              FlagHunt 7.0 is Vel Tech's premier cybersecurity competition, designed to challenge and inspire the next
              generation of ethical hackers and security professionals. Participants will face real-world scenarios,
              advanced exploitation techniques, and strategic problem-solving challenges.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              This year's edition features enhanced challenges, international participants, industry mentorship, and
              guaranteed internship opportunities for top performers at leading cybersecurity firms.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
