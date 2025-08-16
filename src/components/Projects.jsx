import { Code2, Camera, HardDrive, Search, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'

const Card = ({ title, icon: Icon, children, tags=[] }) => (
  <motion.div
    className="p-5 rounded-2xl bg-muted/60 border border-accent/40 hover:border-primary/60 transition"
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center gap-2 mb-2">
      <Icon className="w-5 h-5 text-primary" />
      <h3 className="font-semibold">{title}</h3>
    </div>
    <p className="text-foreground/80">{children}</p>
    <div className="mt-3 flex flex-wrap gap-2">
      {tags.map((t) => <span key={t} className="text-xs px-2 py-1 rounded-full bg-accent/40">{t}</span>)}
    </div>
  </motion.div>
)

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Code2 className="w-5 h-5"/> Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Real-time ASL Recognition" icon={Camera} tags={['MobileNetV2', 'ResNet18', 'MediaPipe', 'OpenCV', 'LSTM']}>
          Engineered system to translate live camera feeds into ASL letters (static signs), using keypoint patterns, channel attention experiments, and class weights to improve confusion pairs.
        </Card>
        <Card title="MegaSearch‑AI" icon={Search} tags={['Multimodal', 'CLIP', 'OCR', 'K-Means', 'Embeddings']}>
          A semantic search engine over large MEGA files (PDFs & images up to 20GB), extracting text via OCR and aligning visual/text features into a common space for clustering and retrieval.
        </Card>
        <Card title="Reverse Engineering & Security" icon={HardDrive} tags={['C/C++', 'ROP', 'ASLR', 'Exploit Mitigations']}>
          CTF-style training: black-box reversing, vtable hijacking practice, safe handling code, and defense writeups for vulnerable C snippets while focusing on timing and clean explanations.
        </Card>
        <Card title="Research & Coursework" icon={Cpu} tags={['Probability', 'Computational Biology', 'ML']}>
          Loved computational biology: probabilistic models for biological data, neural methods for genomics/proteins, and theory-driven exploration of Markov chains relevant to diffusion models.
        </Card>
      </div>
    </section>
  )
}
