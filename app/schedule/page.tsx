"use client"

import Navigation from "@/components/navigation"
import Schedule from "@/components/schedule"
import Footer from "@/components/footer-premium"
import VideoBackground from "@/components/video-background"

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <VideoBackground />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-20"></div>
        <Schedule />
        <Footer />
      </div>
    </main>
  )
}
