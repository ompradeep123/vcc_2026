"use client"

import Navigation from "@/components/navigation"
import Schedule from "@/components/schedule"
import Footer from "@/components/footer-premium"
import VideoBg from "@/components/video-bg"

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <VideoBg />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-20"></div>
        <Schedule />
        <Footer />
      </div>
    </main>
  )
}
