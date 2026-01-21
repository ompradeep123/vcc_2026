"use client"

import Navigation from "@/components/navigation"
import HeroPremium from "@/components/hero-premium"
import Highlights from "@/components/highlights"
import Partners from "@/components/partners-premium"
import Footer from "@/components/footer-premium"
import VideoBg from "@/components/video-bg"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <VideoBg />
      <div className="relative z-10">
        <Navigation />
        <HeroPremium />
        <Highlights />
        <Partners />
        <Footer />
      </div>
    </main>
  )
}
