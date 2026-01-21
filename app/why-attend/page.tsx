"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer-premium"
import { motion } from "framer-motion"
import { Award, Network, Briefcase, Zap, Users, Globe } from "lucide-react"

export default function WhyAttend() {
  const benefits = [
    {
      icon: Network,
      title: "Industry Networking",
      description:
        "Connect with leading cybersecurity professionals, CISOs, and innovators from top global organizations.",
    },
    {
      icon: Award,
      title: "Expert Insights",
      description: "Learn from industry veterans and research leaders about emerging threats and defense strategies.",
    },
    {
      icon: Zap,
      title: "Latest Technologies",
      description: "Discover cutting-edge cybersecurity tools, frameworks, and methodologies shaping the industry.",
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description: "Explore exciting job prospects and partnership opportunities with leading cybersecurity firms.",
    },
    {
      icon: Users,
      title: "Hands-on Workshops",
      description: "Participate in practical sessions on penetration testing, incident response, and threat analysis.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Understand international cybersecurity regulations, compliance requirements, and best practices.",
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6 text-balance">
              Why Attend <span className="text-primary">VCC 2026?</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Join over 1000+ cybersecurity professionals for two days of immersive learning, networking, and innovation
              that will transform your career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-8 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 border border-border hover:border-primary/50 transition-all group"
                >
                  <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
         
        </div>
      </section>

      <Footer />
    </main>
  )
}
