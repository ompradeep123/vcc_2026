"use client"

import Navigation from "@/components/navigation"
import About from "@/components/about"
import Footer from "@/components/footer-premium"
import VideoBackground from "@/components/video-background"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <VideoBackground />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-20"></div>
        <About />
        <Footer />
      </div>
    </main>
  )
}
