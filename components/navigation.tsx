"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Twitter, Instagram, Youtube, Linkedin, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navigation() {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isEventsOpen, setIsEventsOpen] = useState(false)
  const [isMobileEventsOpen, setIsMobileEventsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Conclave Panel", href: "/speakers" },
    { label: "FlagHunt 7.0", href: "/flaghunt" },
    { label: "Conclave Schedule", href: "/schedule" },
    { label: "Registration Closed", href: "/register" },
  ]

  const eventItems = [
    { label: "Idea Vista", href: "/idea-vista" },
    { label: "Vibeathon", href: "/vibeathon" },
    { label: "Workshops", href: "/workshops" },
    { label: "Tech Games", href: "/tech-games" },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "https://twitter.com", label: "Linkdin" },
    { icon: Instagram, href: "https://instagram.com/vtu_cse.cs", label: "Instagram" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isSticky ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="font-serif text-lg sm:text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
            VCC 2026
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 md:gap-8">
            {menuItems.map((item, idx) => (
              <div key={item.href} className="flex items-center">
                {/* Insert Events dropdown before Registration (which is usually the last item) 
                    or after FlagHunt. Current order: Home, Schedule, Panel, FlagHunt, Registration.
                    Let's put it after FlagHunt.
                */}
                <Link
                  href={item.href}
                  className="text-foreground/70 hover:text-primary transition-colors text-xs sm:text-sm font-medium tracking-wide"
                >
                  {item.label}
                </Link>

                {/* Insert Events Dropdown after FlagHunt (which is index 2) */}
                {idx === 2 && (
                  <div
                    className="relative ml-6 md:ml-8 group"
                    onMouseEnter={() => setIsEventsOpen(true)}
                    onMouseLeave={() => setIsEventsOpen(false)}
                  >
                    <button
                      className="flex items-center gap-1 text-foreground/70 group-hover:text-primary transition-colors text-xs sm:text-sm font-medium tracking-wide"
                    >
                      Events <ChevronDown size={14} className={`transition-transform duration-300 ${isEventsOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isEventsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-card/95 backdrop-blur-md border border-primary/20 rounded-xl shadow-xl shadow-primary/10 overflow-hidden z-50"
                        >
                          <div className="py-2">
                            {eventItems.map((event) => (
                              <Link
                                key={event.href}
                                href={event.href}
                                className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
                              >
                                {event.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Social Links Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-foreground p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col gap-2 pt-4">
              {menuItems.map((item, idx) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-foreground/70 hover:text-primary text-xs sm:text-sm font-medium py-2 px-2 rounded hover:bg-primary/5 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>

                  {/* Mobile Events Dropdown after FlagHunt (index 2) */}
                  {idx === 2 && (
                    <div className="px-2 py-1">
                      <button
                        onClick={() => setIsMobileEventsOpen(!isMobileEventsOpen)}
                        className="flex items-center justify-between w-full text-foreground/70 hover:text-primary text-xs sm:text-sm font-medium py-2 transition-colors"
                      >
                        Events <ChevronDown size={16} className={`transition-transform duration-300 ${isMobileEventsOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {isMobileEventsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden bg-primary/5 rounded-lg ml-2 mt-1"
                          >
                            {eventItems.map((event) => (
                              <Link
                                key={event.href}
                                href={event.href}
                                className="block px-4 py-2.5 text-xs sm:text-sm text-foreground/60 hover:text-primary transition-colors"
                                onClick={() => {
                                  setIsMobileMenuOpen(false)
                                  setIsMobileEventsOpen(false)
                                }}
                              >
                                {event.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
              {/* Mobile Social Links */}
              <div className="flex gap-4 pt-4 border-t border-border/50 mt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors"
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
