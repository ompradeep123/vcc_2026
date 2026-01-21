"use client"

import { useEffect, useRef } from "react"

export default function TechBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = containerRef.current?.querySelector("canvas") as HTMLCanvasElement
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationFrameId: number
    let time = 0

    // Particle system for organic movement
    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
      age: number
      lifespan: number
    }

    const particles: Particle[] = []
    const colors = ["#06b6d4", "#00d9ff", "#06d6d6"]

    // Initialize particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        age: 0,
        lifespan: Math.random() * 300 + 200,
      })
    }

    // Hexagon grid pattern
    const drawHexagonGrid = () => {
      const hexSize = 80
      const offsetX = (time * 0.05) % (hexSize * Math.sqrt(3))
      const offsetY = (time * 0.02) % hexSize

      ctx.strokeStyle = "rgba(6, 182, 212, 0.06)"
      ctx.lineWidth = 1

      for (let y = -hexSize; y < canvas.height + hexSize; y += hexSize * 1.5) {
        for (let x = -hexSize * Math.sqrt(3); x < canvas.width + hexSize * Math.sqrt(3); x += hexSize * Math.sqrt(3)) {
          const adjustedX = x + offsetX
          const adjustedY = y + offsetY + (x % (hexSize * Math.sqrt(3) * 2)) * 0.1

          drawHexagon(adjustedX, adjustedY, hexSize)
        }
      }
    }

    const drawHexagon = (x: number, y: number, size: number) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3
        const px = x + size * Math.cos(angle)
        const py = y + size * Math.sin(angle)
        if (i === 0) {
          ctx.moveTo(px, py)
        } else {
          ctx.lineTo(px, py)
        }
      }
      ctx.closePath()
      ctx.stroke()
    }

    // Quantum orbital system
    const drawOrbitalSystem = () => {
      const centerX = canvas.width * 0.5
      const centerY = canvas.height * 0.5
      const orbitCount = 4

      for (let orbit = 0; orbit < orbitCount; orbit++) {
        const radius = 150 + orbit * 80 + Math.sin(time * 0.003 + orbit) * 20

        ctx.strokeStyle = `rgba(6, 182, 212, ${0.08 - orbit * 0.015})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.stroke()

        // Orbiting particles
        const particleCount = 3 + orbit
        for (let i = 0; i < particleCount; i++) {
          const angle = (time * 0.001 * (orbit + 1)) + (i / particleCount) * Math.PI * 2
          const px = centerX + Math.cos(angle) * radius
          const py = centerY + Math.sin(angle) * radius

          const pulse = Math.sin(time * 0.01 + orbit + i) * 0.5 + 0.5
          ctx.fillStyle = `rgba(0, 217, 255, ${pulse * 0.4})`
          ctx.beginPath()
          ctx.arc(px, py, 2 + pulse, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Central core
      const corePulse = Math.sin(time * 0.01) * 0.5 + 0.5
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 30)
      gradient.addColorStop(0, `rgba(6, 182, 212, ${corePulse * 0.8})`)
      gradient.addColorStop(1, `rgba(6, 182, 212, 0)`)
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, 30, 0, Math.PI * 2)
      ctx.fill()
    }

    // Flowing data streams
    const drawDataStreams = () => {
      const streamCount = 4
      for (let stream = 0; stream < streamCount; stream++) {
        const startY = (canvas.height / streamCount) * stream
        const offsetX = (time * (0.3 + stream * 0.1)) % canvas.width

        ctx.strokeStyle = `rgba(0, 217, 255, ${0.12 + stream * 0.02})`
        ctx.lineWidth = 1.5
        ctx.beginPath()

        for (let x = -canvas.width + offsetX; x < canvas.width * 2; x += 40) {
          const wave = Math.sin((x + time * 0.5) * 0.01 + stream) * 30
          if (x === -canvas.width + offsetX) {
            ctx.moveTo(x, startY + wave)
          } else {
            ctx.lineTo(x, startY + wave)
          }
        }
        ctx.stroke()

        // Data packets
        for (let packet = 0; packet < 5; packet++) {
          const packetX = offsetX + packet * 100
          const packetY = startY + Math.sin(packetX * 0.01 + stream) * 30

          if (packetX > -20 && packetX < canvas.width + 20) {
            ctx.fillStyle = `rgba(6, 182, 212, ${0.6 + Math.sin(time * 0.02 + packet) * 0.2})`
            ctx.fillRect(packetX - 8, packetY - 8, 16, 16)

            ctx.strokeStyle = "rgba(0, 217, 255, 0.8)"
            ctx.lineWidth = 1
            ctx.strokeRect(packetX - 8, packetY - 8, 16, 16)
          }
        }
      }
    }

    // Particle effects
    const updateAndDrawParticles = () => {
      particles.forEach((particle, index) => {
        // Physics
        particle.vx += (Math.random() - 0.5) * 0.05
        particle.vy += (Math.random() - 0.5) * 0.05
        particle.vx *= 0.98
        particle.vy *= 0.98

        particle.x += particle.vx
        particle.y += particle.vy
        particle.age++

        // Fade out
        const life = 1 - particle.age / particle.lifespan
        particle.opacity = Math.max(0, life * (Math.random() * 0.4 + 0.1))

        // Wrapping
        if (particle.x < -20) particle.x = canvas.width + 20
        if (particle.x > canvas.width + 20) particle.x = -20
        if (particle.y < -20) particle.y = canvas.height + 20
        if (particle.y > canvas.height + 20) particle.y = -20

        // Respawn if dead
        if (particle.age > particle.lifespan) {
          particles[index] = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.4 + 0.1,
            color: colors[Math.floor(Math.random() * colors.length)],
            age: 0,
            lifespan: Math.random() * 300 + 200,
          }
        }

        // Draw with glow
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 2)
        gradient.addColorStop(0, `${particle.color}${Math.round(particle.opacity * 255).toString(16).padStart(2, "0")}`)
        gradient.addColorStop(1, `${particle.color}00`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    // Radial energy waves
    const drawEnergyWaves = () => {
      const waves = 3
      for (let i = 0; i < waves; i++) {
        const waveTime = (time + i * 100) % 400
        const radius = (waveTime / 400) * 600
        const alpha = Math.max(0, 1 - waveTime / 400)

        ctx.strokeStyle = `rgba(6, 182, 212, ${alpha * 0.2})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(canvas.width * 0.5, canvas.height * 0.5, radius, 0, Math.PI * 2)
        ctx.stroke()
      }
    }

    const animate = () => {
      time++

      // Clear canvas with fade effect
      ctx.fillStyle = "rgba(5, 26, 54, 0.98)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw all effects
      drawHexagonGrid()
      drawDataStreams()
      drawOrbitalSystem()
      drawEnergyWaves()
      updateAndDrawParticles()

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      <canvas className="w-full h-full" />
    </div>
  )
}
