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
          <p className="text-foreground/70 text-sm sm:text-base">School of Computing, Vel Tech University , Avadi ,Chennai.</p>
        </motion.div>

        
      </div>
    </section>
  )
}
