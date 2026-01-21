"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Floating blob variants with smooth animations
  const blobVariants = {
    animate: {
      x: [0, 100, -100, 50, -50, 0],
      y: [0, -150, 100, -80, 120, 0],
      scale: [1, 1.2, 0.9, 1.1, 0.95, 1],
      rotate: [0, 180, 360, 540, 720, 360],
      transition: {
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut" as const,
      },
    },
  }

  const blobVariants2 = {
    animate: {
      x: [0, -120, 80, -100, 60, 0],
      y: [0, 130, -100, 150, -80, 0],
      scale: [1, 0.9, 1.15, 1, 1.05, 1],
      rotate: [0, -180, -360, -540, -720, -360],
      transition: {
        duration: 25,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut" as const,
        delay: 2,
      },
    },
  }

  const blobVariants3 = {
    animate: {
      x: [0, 60, -140, 90, -70, 0],
      y: [0, -100, 140, -120, 90, 0],
      scale: [1, 1.1, 0.85, 1.15, 0.95, 1],
      rotate: [0, 90, 270, -90, 180, 0],
      transition: {
        duration: 30,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut" as const,
        delay: 4,
      },
    },
  }

  // Particle animation
  const particleVariants = {
    animate: (i: number) => ({
      y: [0, -300, 0],
      x: [0, Math.random() * 100 - 50, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        delay: i * 0.3,
        ease: "easeInOut" as const,
      },
    }),
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 217, 255, 0.2) 0%, transparent 50%), linear-gradient(135deg, #051a36 0%, #0f2944 25%, #1e4976 50%, #0d1f35 75%, #051a36 100%)",
            "radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(0, 217, 255, 0.2) 0%, transparent 50%), linear-gradient(135deg, #051a36 0%, #0f2944 25%, #1e4976 50%, #0d1f35 75%, #051a36 100%)",
            "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 50% 20%, rgba(0, 217, 255, 0.2) 0%, transparent 50%), linear-gradient(135deg, #051a36 0%, #0f2944 25%, #1e4976 50%, #0d1f35 75%, #051a36 100%)",
            "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 217, 255, 0.2) 0%, transparent 50%), linear-gradient(135deg, #051a36 0%, #0f2944 25%, #1e4976 50%, #0d1f35 75%, #051a36 100%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Animated floating blobs - Cyan */}
      <motion.div
        variants={blobVariants}
        animate="animate"
        className="absolute top-10 left-20 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Animated floating blobs - Blue */}
      <motion.div
        variants={blobVariants2}
        animate="animate"
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 217, 255, 0.25) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Animated floating blobs - Purple */}
      <motion.div
        variants={blobVariants3}
        animate="animate"
        className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)",
          filter: "blur(45px)",
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={particleVariants}
          animate="animate"
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: "100%",
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            background:
              i % 3 === 0
                ? "rgba(6, 182, 212, 0.6)"
                : i % 3 === 1
                  ? "rgba(0, 217, 255, 0.5)"
                  : "rgba(168, 85, 247, 0.4)",
            boxShadow:
              i % 3 === 0
                ? "0 0 10px rgba(6, 182, 212, 0.8)"
                : i % 3 === 1
                  ? "0 0 10px rgba(0, 217, 255, 0.8)"
                  : "0 0 10px rgba(168, 85, 247, 0.8)",
          }}
        />
      ))}

      {/* Slow rotating gradient orb */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(6, 182, 212, 0.15), rgba(0, 217, 255, 0.1), rgba(168, 85, 247, 0.12), rgba(6, 182, 212, 0.15))",
          filter: "blur(60px)",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}
