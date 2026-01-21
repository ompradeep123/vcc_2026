"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const pricingTiers = [
  {
    title: "One Day Pass",
    subtitle: "External",
    price: "₹300",
    currency: "Per Team",
    description: "Max 2 Members",
    features: [
      "Access to all events on selected day",
      "Lunch & refreshments",
      "Networking opportunities",
      "Certificate of participation",
    ],
    highlighted: false,
  },
  {
    title: "Two Days Pass",
    subtitle: "External",
    price: "₹500",
    currency: "Per Team",
    description: "Max 2 Members",
    features: [
      "Access to all events for both days",
      "Lunch & refreshments",
      "Networking opportunities",
      "Certificate of completion",
      "Exclusive post-event materials",
    ],
    highlighted: true,
  },
  {
    title: "One Day Pass",
    subtitle: "Vel Tech Students",
    price: "₹100",
    currency: "Per Team",
    description: "Max 2 Members",
    features: [
      "Access to all events on selected day",
      "Lunch & refreshments",
      "Networking opportunities",
      "Certificate of participation",
    ],
    highlighted: false,
  },
  {
    title: "Two Days Pass",
    subtitle: "Vel Tech Students",
    price: "₹200",
    currency: "Per Team",
    description: "Max 2 Members",
    features: [
      "Access to all events for both days",
      "Lunch & refreshments",
      "Networking opportunities",
      "Certificate of completion",
      "Exclusive post-event materials",
    ],
    highlighted: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Registration & Pricing</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Flexible pricing for students and external participants
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-xl transition-all ${
                tier.highlighted
                  ? "glass-effect border-2 border-primary shadow-lg shadow-primary/30 scale-105"
                  : "glass-effect border border-primary/20 hover:border-primary/50"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                </div>
              )}

              <div className="p-6 sm:p-8">
                <p className="text-sm text-primary font-semibold uppercase mb-2">{tier.subtitle}</p>
                <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
                <p className="text-foreground/60 text-sm mb-6">{tier.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-foreground/60 ml-2 text-sm">{tier.currency}</span>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all mb-6 ${
                    tier.highlighted
                      ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg hover:shadow-primary/50"
                      : "border border-primary/50 text-primary hover:bg-primary/10"
                  }`}
                >
                  Register Now
                </button>

                <div className="space-y-3">
                  {tier.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <Check size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-lg bg-muted/30 border border-primary/20 text-center"
        >
          <p className="text-foreground/80">
            <span className="font-semibold">Note:</span> Day Pass holders can participate in all events on that
            particular day.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
