"use client"

export default function Header() {
  return (
    <header className="border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">VCC 2026</span>
          </h1>
          <p className="text-muted-foreground text-lg">Vel Tech CyberCatalyst</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-primary font-semibold">📅</span>
            <span>February 12 & 13, 2026</span>
          </div>
          <div className="w-px h-6 bg-border hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <span className="text-accent font-semibold">📍</span>
            <span>VIT Chennai, India</span>
          </div>
        </div>
      </div>
    </header>
  )
}
