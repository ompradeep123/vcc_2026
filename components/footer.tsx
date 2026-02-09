"use client"

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h4 className="font-semibold mb-4">About VCC 2026</h4>
            <p className="text-sm text-muted-foreground">
              An academia-industry conclave dedicated to advancing cybersecurity excellence through knowledge sharing
              and innovation.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#highlights" className="text-muted-foreground hover:text-foreground transition-colors">
                  Highlights
                </a>
              </li>
              <li>
                <a href="#register" className="text-muted-foreground hover:text-foreground transition-colors">
                  Registration Closed
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground">
              Email:{" "}
              <a href="mailto:vcc@vit.ac.in" className="text-foreground hover:text-primary transition-colors">
                vcc@veltech.edu.in
              </a>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Vel Tech CyberCatalyst. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
