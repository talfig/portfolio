export default function Footer() {
  return (
    <footer className="mt-16 border-t border-accent/40 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-foreground/70">
        © {new Date().getFullYear()} talfig. Built with React + Tailwind + Framer Motion.
      </div>
    </footer>
  )
}
