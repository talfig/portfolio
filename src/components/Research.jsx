import { FlaskConical } from 'lucide-react'

export default function Research() {
  return (
    <section id="research" className="py-16">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><FlaskConical className="w-5 h-5"/> Research Interests</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-5 rounded-2xl bg-muted/60 border border-accent/40">
          <h3 className="font-semibold mb-2">Probabilistic ML</h3>
          <p className="text-foreground/80">Markov chains, diffusion models, and generative modeling theory; efficient inference and uncertainty calibration.</p>
        </div>
        <div className="p-5 rounded-2xl bg-muted/60 border border-accent/40">
          <h3 className="font-semibold mb-2">Bio‑inspired Computing</h3>
          <p className="text-foreground/80">Genetic storage and error-correcting ideas (e.g., Hamming codes) informing robust learning systems and representations.</p>
        </div>
      </div>
    </section>
  )
}
