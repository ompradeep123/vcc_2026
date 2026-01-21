"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"

export default function Navigation() {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Why Attend", href: "/why-attend" },
    { label: "Conclave Schedule", href: "/schedule" },
    //{ label: "Speakers", href: "/speakers" },
    { label: "FlagHunt 7.0", href: "/flaghunt" },
    { label: "Idea Vista", href: "/idea-vista" },
    { label: "Registration", href: "/register" },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "https://twitter.com", label: "Linkdin" },
    { icon: Instagram, href: "https://instagram.com/vtu_cse.cs", label: "Instagram" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isSticky ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
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
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/70 hover:text-primary transition-colors text-xs sm:text-sm font-medium tracking-wide"
              >
                {item.label}
              </Link>
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
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-foreground/70 hover:text-primary text-xs sm:text-sm font-medium py-2 px-2 rounded hover:bg-primary/5 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
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
