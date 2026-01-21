"use client"

export default function ConclaveHighlights() {
  const highlights = [
    {
      date: "12th Feb 2026",
      time: "10:00 AM – 6:00 PM",
      title: "Leadership Conclave",
      description:
        "Cybersecurity in safeguarding critical sectors. Explore strategies, global trends, and the transformative role of leadership in securing tomorrow's digital landscape. Gain actionable insights from pioneers driving change.",
    },
    {
      date: "12th Feb 2026",
      time: "6:00 PM – 10:00 PM",
      title: "CISO Roundtable",
      description:
        "An exclusive gathering for CISOs to network, share best practices, and engage in discussions on critical infrastructure defense. Forge powerful connections to lead your organization's cyber defense strategy.",
    },
    {
      date: "12th Feb 2026",
      time: "10:00 AM – 5:00 PM",
      title: "Cyber Hackathon Finals",
      description:
        "The ultimate showdown of innovation and skills as the brightest minds compete to solve real-world cybersecurity challenges. Witness groundbreaking solutions from the next generation of defenders.",
    },
    {
      date: "13th Feb 2026",
      time: "10:00 AM – 5:00 PM",
      title: "Youth Conclave",
      description:
        "Empowering the future workforce with skills and insights into cybersecurity and AI. Learn about emerging career opportunities, industry expectations, and the critical role of AI in evolving cyber landscape.",
    },
  ]

  return (
    <section id="highlights" className="py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Conclave Highlights</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="border border-border rounded-lg p-6 hover:bg-card transition-colors">
              <div className="mb-4">
                <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-1">{highlight.date}</p>
                <p className="text-sm text-muted-foreground">{highlight.time}</p>
              </div>
              <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
