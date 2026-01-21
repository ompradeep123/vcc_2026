"use client"

import { motion } from "framer-motion"

export default function Partners() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Organized By</h3>
          <p className="text-foreground/70 text-sm sm:text-base">School of Computing, Vel Tech Chennai</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Premium Partners</h4>
            <p className="text-foreground/60 text-sm">DegiAlert</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Silver Partners</h4>
            <p className="text-foreground/60 text-sm">Supporting cybersecurity excellence</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Interested in Sponsoring?</h4>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              Get in Touch →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
