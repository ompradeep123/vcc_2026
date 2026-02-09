"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function RegistrationCTA() {
  const tiers = [
    {
      name: "Student Pass",
      price: "₹499",
      description: "Perfect for students exploring cybersecurity",
      features: ["2-day access", "Workshops & sessions", "Networking events"],
      highlight: false,
    },
    {
      name: "Professional Pass",
      price: "₹1,299",
      description: "Ideal for working professionals",
      features: ["2-day access", "All workshops", "VIP networking lunch", "Certificate"],
      highlight: true,
    },
    {
      name: "Corporate Pass",
      price: "₹3,999",
      description: "For teams and organizations",
      features: ["5 attendees", "Premium seating", "Sponsorship opportunities", "Branding space"],
      highlight: false,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Registration Closed</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            The registration for VCC 2026 has reached its capacity and is now closed. Thank you for your interest.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {tier.highlight && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg opacity-50 group-hover:opacity-100 transition-opacity blur" />
              )}

              <div
                className={`relative rounded-lg p-8 ${tier.highlight ? "bg-background border-primary/50" : "bg-card/50 border-foreground/10"
                  } border transition-all duration-300 hover:border-primary/50`}
              >
                {tier.highlight && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                  >
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-background text-xs font-bold">
                      RECOMMENDED
                    </span>
                  </motion.div>
                )}

                <div className={`space-y-6 ${tier.highlight ? "pt-4" : ""}`}>
                  {/* Tier info */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                    <p className="text-sm text-foreground/60">{tier.description}</p>
                  </div>

                  {/* Price */}
                  <div>
                    <span className="text-5xl font-bold text-primary">{tier.price}</span>
                    <span className="text-sm text-foreground/60 ml-2">per pass</span>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                        <Check size={18} className="text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="flex flex-col items-center gap-2 w-full">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 cursor-not-allowed ${tier.highlight
                        ? "bg-foreground/50 text-background"
                        : "border border-foreground/30 text-foreground/50"
                        }`}
                    >
                      Closed
                    </motion.button>
                    <p className="text-primary font-bold animate-pulse text-[10px]">See you next year!</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-sm text-foreground/60 mt-12"
        >
          Early bird pricing valid until January 15, 2026. Prices include 18% GST.
        </motion.p>
      </div>
    </section>
  )
}
