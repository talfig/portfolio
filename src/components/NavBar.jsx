import { Github, Mail, FileText } from 'lucide-react'

export default function NavBar() {
  return (
    <header className="sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-background/80 z-50 border-b border-accent/40">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a href="#" className="font-semibold tracking-tight text-lg">Tal Figenblat</a>
        <div className="flex items-center gap-3">
          <a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-accent/40 hover:bg-accent/70 transition shadow-glow"
             href="#projects" aria-label="Projects">Projects</a>
          <a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-accent/40 hover:bg-accent/70 transition"
             href="#skills" aria-label="Skills">Skills</a>
          <a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary hover:shadow-glow transition"
             href="#contact" aria-label="Contact"><Mail className="w-4 h-4"/>Contact</a>
          <a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-muted hover:bg-accent/60 transition"
             href="#resume" aria-label="Resume"><FileText className="w-4 h-4"/>Resume</a>
          <a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-muted hover:bg-accent/60 transition"
             href="https://github.com" target="_blank" rel="noreferrer"><Github className="w-4 h-4"/>GitHub</a>
        </div>
      </nav>
    </header>
  )
}
