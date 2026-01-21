"use client"

export default function Mission() {
  return (
    <section className="border-b border-border py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Building Expertise for a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Secure Digital World
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Vel Tech CyberCatalyst is a premier collaboration between academia and industry leaders, forging
            innovative solutions to the most pressing challenges in cybersecurity today. Powered by cutting-edge
            expertise and visionary insights from industry pioneers driving transformation in cybersecurity and
            technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a
              href="#highlights"
              className="px-8 py-3 bg-primary text-primary-foreground rounded font-semibold hover:opacity-90 transition text-center"
            >
              Conclave Registration
            </a>
            <a
              href="#highlights"
              className="px-8 py-3 border border-border text-foreground rounded font-semibold hover:bg-card transition text-center"
            >
              Hackathon Registration
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
