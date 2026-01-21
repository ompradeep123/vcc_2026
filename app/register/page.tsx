"use client"

import Navigation from "@/components/navigation"
import RegisterCTA from "@/components/register-cta"
import Footer from "@/components/footer-premium"
import VideoBackground from "@/components/video-background"

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <VideoBackground />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-20"></div>
        <RegisterCTA />
        <Footer />
      </div>
    </main>
  )
}
