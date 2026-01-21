"use client"

import { useEffect, useRef } from "react"

export default function VideoBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = containerRef.current?.querySelector("canvas") as HTMLCanvasElement
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
      life: number
      maxLife: number
      trail: Array<{ x: number; y: number; opacity: number }>
    }

    const particles: Particle[] = []
    const colors = ["#06b6d4", "#00d9ff", "#7c3aed", "#ec4899", "#06d6d6"]
    const particleCount = 150

    // Initialize enhanced particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 200 + 150,
        trail: [],
      })
    }

    interface Wave {
      y: number
      amplitude: number
      frequency: number
      phase: number
      speed: number
      opacity: number
      color: string
    }

    const waves: Wave[] = [
      {
        y: canvas.height * 0.2,
        amplitude: 30,
        frequency: 0.01,
        phase: 0,
        speed: 0.02,
        opacity: 0.15,
        color: "#06b6d4",
      },
      {
        y: canvas.height * 0.5,
        amplitude: 40,
        frequency: 0.008,
        phase: Math.PI / 2,
        speed: 0.015,
        opacity: 0.12,
        color: "#7c3aed",
      },
      {
        y: canvas.height * 0.8,
        amplitude: 35,
        frequency: 0.012,
        phase: Math.PI,
        speed: 0.018,
        opacity: 0.1,
        color: "#00d9ff",
      },
    ]

    interface Orb {
      x: number
      y: number
      radius: number
      vx: number
      vy: number
      color: string
      opacity: number
      targetX: number
      targetY: number
      morphPhase: number
    }

    // Orbs removed per user request
    const orbs: Orb[] = []

    let animationFrameId: number
    let time = 0

    const animate = () => {
      time++

      ctx.fillStyle = "rgba(5, 26, 54, 0.02)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      waves.forEach((wave) => {
        ctx.strokeStyle = `${wave.color}${Math.round(wave.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.lineWidth = 2
        ctx.beginPath()

        for (let x = 0; x < canvas.width; x += 5) {
          const y = wave.y + Math.sin(x * wave.frequency + wave.phase) * wave.amplitude
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()

        wave.phase += wave.speed
      })

      orbs.forEach((orb) => {
        // Gentle movement toward target
        orb.x += (orb.targetX - orb.x) * 0.002
        orb.y += (orb.targetY - orb.y) * 0.002

        // Random target changes every 300 frames
        if (time % 300 === 0) {
          orb.targetX = Math.random() * canvas.width
          orb.targetY = Math.random() * canvas.height
        }

        // Morphing radius
        const morphRadius = orb.radius + Math.sin(orb.morphPhase) * 30
        orb.morphPhase += 0.01

        // Draw glow layers
        for (let i = 3; i > 0; i--) {
          const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, morphRadius + i * 20)
          gradient.addColorStop(
            0,
            `${orb.color}${Math.round((orb.opacity / i) * 255)
              .toString(16)
              .padStart(2, "0")}`,
          )
          gradient.addColorStop(1, `${orb.color}00`)
          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(orb.x, orb.y, morphRadius + i * 20, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      particles.forEach((particle, index) => {
        // Add to trail
        particle.trail.push({
          x: particle.x,
          y: particle.y,
          opacity: particle.opacity * (particle.life / particle.maxLife),
        })

        // Keep trail length reasonable
        if (particle.trail.length > 20) {
          particle.trail.shift()
        }

        // Draw trail
        particle.trail.forEach((trail, trailIndex) => {
          const trailOpacity = (trailIndex / particle.trail.length) * 0.5
          ctx.fillStyle = `${particle.color}${Math.round(trailOpacity * 255)
            .toString(16)
            .padStart(2, "0")}`
          ctx.beginPath()
          ctx.arc(trail.x, trail.y, particle.size * 0.6, 0, Math.PI * 2)
          ctx.fill()
        })

        // Draw particle with glow
        const glowGradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3,
        )
        glowGradient.addColorStop(
          0,
          `${particle.color}${Math.round(particle.opacity * 255)
            .toString(16)
            .padStart(2, "0")}`,
        )
        glowGradient.addColorStop(1, `${particle.color}00`)
        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
        ctx.fill()

        // Draw solid particle core
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw connecting lines between nearby particles
        particles.forEach((other, otherIndex) => {
          if (index >= otherIndex) return
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 * (1 - distance / 200)})`
            ctx.lineWidth = 1.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        })

        particle.x += particle.vx
        particle.y += particle.vy
        particle.life += 1

        if (particle.life > particle.maxLife) {
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
          particle.life = 0
          particle.opacity = Math.random() * 0.6 + 0.3
          particle.trail = []
        }

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full z-0">
      <canvas className="w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/25 pointer-events-none" />
    </div>
  )
}
