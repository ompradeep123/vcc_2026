"use client"

import Navigation from "@/components/navigation"
import Speakers from "@/components/speakers"
import Footer from "@/components/footer-premium"
import VideoBg from "@/components/video-bg"

export default function SpeakersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <VideoBg />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-20"></div>
        <Speakers />
        <Footer />
      </div>
    </main>
  )
}
