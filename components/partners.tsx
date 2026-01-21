"use client"

export default function Partners() {
  return (
    <section className="border-b border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Organized By */}
        <div className="mb-16">
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-semibold">Organized By</h3>
          <div className="flex flex-wrap gap-8 items-center">
            <div className="w-32 h-16 bg-card rounded flex items-center justify-center text-xs text-muted-foreground font-mono">
              Vel Tech Chennai
            </div>
            <div className="w-32 h-16 bg-card rounded flex items-center justify-center text-xs text-muted-foreground font-mono">
              Industry Partner
            </div>
          </div>
        </div>

        {/* Premium Partners */}
        <div className="mb-16">
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-semibold">
            Premium Partners
          </h3>
          <div className="flex flex-wrap gap-8 items-center">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-40 h-16 bg-card rounded flex items-center justify-center text-xs text-muted-foreground font-mono"
              >
                Partner {i}
              </div>
            ))}
          </div>
        </div>

        {/* Silver Partners */}
        <div>
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-semibold">
            Silver Partners
          </h3>
          <div className="flex flex-wrap gap-6 items-center">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-32 h-12 bg-card rounded flex items-center justify-center text-xs text-muted-foreground font-mono"
              >
                Partner {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
