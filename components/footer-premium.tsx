"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-2xl font-bold mb-4">VCC 2026</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Vel Tech CyberCatalyst - Where Academia and Industry Converge
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href="#about" className="hover:text-background transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#highlights" className="hover:text-background transition-colors">
                  Highlights
                </a>
              </li>
              <li>
                <a href="#speakers" className="hover:text-background transition-colors">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-background transition-colors">
                  Schedule
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:vcc@vit.ac.in" className="hover:text-background transition-colors">
                  vcc@veltech.edu.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 8008572389</span>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 hover:bg-background/20 rounded-lg transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 hover:bg-background/20 rounded-lg transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="text-center text-sm text-background/70">
            <p>&copy; 2026 Vel Tech CyberCatalyst. All Rights Reserved.</p>
            <p className="mt-2">Designed with precision. Built for excellence.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
