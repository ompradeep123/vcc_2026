"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function HeroUnique() {
  return (
    <section className="min-h-screen flex items-center relative pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(171, 224, 230, 0.1) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255, 71, 87, 0.08) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="text-sm font-mono text-primary tracking-widest uppercase">February 12 & 13, 2026</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="block"
              >
                Unveiling the
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
              >
                Future of Cyber Defence
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-foreground/70 max-w-lg leading-relaxed"
            >
              Join industry leaders and academic experts at an exclusive conclave where innovation meets expertise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <button className="group px-8 py-3 bg-foreground text-background font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2">
                Register Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3 border border-foreground/30 text-foreground font-semibold rounded-lg hover:border-primary hover:text-primary transition-all">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative w-full h-96">
              {/* Concentric circles with icons */}
              <motion.div
                className="absolute inset-0 border border-primary/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 border border-primary/10 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              {/* Center hexagon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">VCC</div>
                  <div className="text-xs font-mono text-foreground/50 tracking-widest">2026</div>
                </div>
              </div>

              {/* Floating elements around circle */}
              {["Security", "Innovation", "Defence", "Academy"].map((text, i) => (
                <motion.div
                  key={text}
                  className="absolute w-16 h-16 rounded-lg border border-foreground/20 flex items-center justify-center text-xs font-semibold text-center px-2"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                  }}
                  style={{
                    top: `${Math.sin((i / 4) * Math.PI * 2) * 140 + 140}px`,
                    left: `${Math.cos((i / 4) * Math.PI * 2) * 140 + 140}px`,
                  }}
                >
                  {text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}
