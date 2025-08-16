import { Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
        <Mail className="w-5 h-5 text-primary animate-pulse"/> Contact
      </h2>
      <div className="rounded-2xl bg-muted/60 border border-accent/40 p-6">
        <p className="text-white text-base">
          Based in Israel · Open to research collaborations, internships, and ML/CV projects.
        </p>

        {/* Buttons & info centered */}
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:hello@example.com"
            className="px-4 py-2 rounded-xl bg-primary text-background font-medium hover:shadow-glow transition"
          >
            Email Me
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-xl bg-accent/50 text-white font-medium hover:bg-accent transition"
          >
            Download CV
          </a>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-accent/40 text-white text-xs font-medium">
            <MapPin className="w-4 h-4"/> Asia/Jerusalem (UTC+3)
          </span>
        </div>
      </div>
    </section>
  )
}
