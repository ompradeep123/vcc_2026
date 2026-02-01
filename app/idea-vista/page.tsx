"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer-premium"
import { motion } from "framer-motion"
import { Lightbulb, Rocket, Users, Award, ChevronDown, Sparkles, Target, Zap } from "lucide-react"

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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6 flex justify-center">
              <Lightbulb className="w-16 h-16 text-purple-500 animate-bounce" />
            </div>
            <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6 text-balance">
              Idea <span className="text-purple-500">Vista</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8">
              The premier <span className="text-purple-500 font-bold">Poster Presentation</span> stage.
              Whether you're a student with a vision or an aspiring researcher, showcase your
              <span className="text-pink-500 font-semibold italic"> world-changing innovation</span> here.
              Open to all domains.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open('https://apps.veltech.edu.in/registration/cybercatalyst/reg/', '_blank')}
              className="px-8 py-4 bg-purple-500 text-white rounded-full font-semibold hover:bg-purple-600 transition-colors mb-12 shadow-lg shadow-purple-500/20"
            >
              Register for Poster Presentation
            </motion.button>

            {/* Enhanced Complex Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="flex flex-col items-center gap-4 mt-8"
            >
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-purple-500/60 mb-2">Discover Innovation</span>

              <div className="relative flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute w-20 h-20 bg-purple-500/20 rounded-full blur-xl"
                />
                <div className="w-8 h-12 border-2 border-foreground/30 rounded-full flex justify-center p-1.5 relative z-10">
                  <motion.div
                    animate={{ y: [0, 20], opacity: [1, 0], scale: [1, 0.8] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1.5 h-3 bg-purple-500 rounded-full"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center -space-y-2 mt-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.2, 1, 0.2], y: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                  >
                    <ChevronDown className={`w-6 h-6 ${i === 1 ? 'text-purple-500/80' : 'text-purple-500/40'}`} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-card rounded-2xl border border-purple-500/10 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mx-auto mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Inclusive Stage</h3>
              <p className="text-foreground/60 text-sm">Students, researchers, and solo innovators. Everyone is welcome to showcase their research and innovation.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 bg-card rounded-2xl border border-purple-500/10 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mx-auto mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">No Boundaries</h3>
              <p className="text-foreground/60 text-sm">Strictly no domain restrictions. Whether it's Tech, Bio, Fin, or Social — innovation has no limits.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 bg-card rounded-2xl border border-purple-500/10 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mx-auto mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Global Impact</h3>
              <p className="text-foreground/60 text-sm">Looking for projects that possess the potential to change the world and disrupt current industries.</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 font-serif">A Visionary Platform</h2>
              <p className="text-foreground/70 mb-8 leading-relaxed text-lg">
                Idea Vista is more than just an exhibition; it's an ecosystem for dreamers.
                We provide the stage for you to present posters that bridge the gap between
                current reality and a better future.
              </p>
              <ul className="space-y-4">
                {[
                  "Academic & Research Poster Presentation",
                  "Innovative Project Showcasing",
                  "Multidisciplinary Innovations",
                  "Societal Impact Solutions",
                  "Zero Domain Restriction Policy",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg group">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                      <Zap className="w-4 h-4" />
                    </div>
                    <span className="text-foreground/80">{item}</span>
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
              <div className="p-8 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl border border-purple-500/10 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-purple-500" />
                  <h3 className="text-2xl font-bold font-serif">Incentives</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Exceptional poster presentations will receive certificates, trophies, and potential
                  access to mentorship from industry leaders and academic experts.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-pink-500/5 to-rose-500/5 rounded-2xl border border-pink-500/10 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Rocket className="w-8 h-8 text-pink-500" />
                  <h3 className="text-2xl font-bold font-serif">Registration</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Open for all. Register as a solo presenter or a team. Showcase your research,
                  findings or prototype to our panel of experts on Day 1.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
