"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer-premium"
import { motion } from "framer-motion"
import { Lightbulb, Rocket, Users, Award } from "lucide-react"

export default function IdeaVista() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-20 bg-gradient-to-br from-purple-500/10 via-background to-pink-500/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        
      </section>

      {/* Program Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">What We're Looking For</h2>
              <ul className="space-y-4">
                {[
                  "AI/ML-powered Security Solutions",
                  "Zero-Trust Architecture Innovations",
                  "Quantum-Safe Cryptography",
                  "Threat Intelligence Platforms",
                  "DevSecOps Tools",
                  "Privacy-Preserving Technologies",
                ].map((idea, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg">
                    <Rocket className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span>{idea}</span>
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
              <div className="p-6 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-lg border border-border">
                <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                  <Award className="w-6 h-6 text-purple-500" />
          
                <p className="text-foreground/70">For top 5 ideas selected</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-pink-500/5 to-rose-500/5 rounded-lg border border-border">
                <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                  <Users className="w-6 h-6 text-pink-500" />
                  Mentorship
                </h3>
                <p className="text-foreground/70">Access to industry leaders and venture capitalists</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-8 rounded-lg border border-border"
          >
            <h3 className="text-2xl font-semibold mb-4">Program Timeline</h3>
            <div className="space-y-4">
              {[
                { date: "Jan 15", event: "Call for Submissions Opens" },
                { date: "Feb 5", event: "Submission Deadline" },
                { date: "Feb 10", event: "Shortlisting Announcement" },
                { date: "Feb 12-13", event: "Pitch Presentation at VCC 2026" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="text-purple-500 font-semibold whitespace-nowrap">{item.date}</span>
                  <span className="text-foreground/70">{item.event}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
