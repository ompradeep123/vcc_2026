"use client"

import { useEffect, useRef } from "react"

export default function VideoBg() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Auto-play with error handling
    video.play().catch((err) => {
      console.log("Video autoplay prevented:", err)
    })
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: "brightness(0.6) contrast(1.1)",
        }}
      >
        <source src="/cyber-bg1.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better text readability and darker tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background/60 pointer-events-none" />

      {/* Animated accent gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-cyan-900/10 pointer-events-none opacity-50" />
    </div>
  )
}
