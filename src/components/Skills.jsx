import { Cpu, Boxes, GitBranch, Database, Sparkles, Shield } from 'lucide-react'

const SkillTag = ({ children }) => (
  <span className="text-sm px-3 py-1 rounded-full bg-accent/40">{children}</span>
)

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Sparkles className="w-5 h-5"/> Skills</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-5 rounded-2xl bg-muted/60 border border-accent/40">
          <h3 className="font-semibold mb-3 flex items-center gap-2"><Cpu className="w-4 h-4"/> Machine Learning</h3>
          <div className="flex flex-wrap gap-2">
            <SkillTag>PyTorch 2.x</SkillTag>
            <SkillTag>TensorFlow</SkillTag>
            <SkillTag>MobileNetV2 / ResNet18</SkillTag>
            <SkillTag>MediaPipe</SkillTag>
            <SkillTag>LSTM / Sequence</SkillTag>
            <SkillTag>Class weighting</SkillTag>
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-muted/60 border border-accent/40">
          <h3 className="font-semibold mb-3 flex items-center gap-2"><Boxes className="w-4 h-4"/> Systems & GPU</h3>
          <div className="flex flex-wrap gap-2">
            <SkillTag>CUDA 11.2 / 12.6</SkillTag>
            <SkillTag>cuDNN</SkillTag>
            <SkillTag>NVIDIA drivers</SkillTag>
            <SkillTag>Optimization</SkillTag>
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-muted/60 border border-accent/40">
          <h3 className="font-semibold mb-3 flex items-center gap-2"><GitBranch className="w-4 h-4"/> Software</h3>
          <div className="flex flex-wrap gap-2">
            <SkillTag>Machine Learning</SkillTag>
            <SkillTag>OpenCV</SkillTag>
            <SkillTag>CI/CD (user)</SkillTag>
            <SkillTag>Networking theory</SkillTag>
            <SkillTag>Java OOP</SkillTag>
            <SkillTag>Security & RE (CTF)</SkillTag>
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-muted/60 border border-accent/40 sm:col-span-2 lg:col-span-3">
          <h3 className="font-semibold mb-3 flex items-center gap-2"><Database className="w-4 h-4"/> Interests</h3>
          <div className="flex flex-wrap gap-2">
            <SkillTag>Computer Vision</SkillTag>
            <SkillTag>Probabilistic Models</SkillTag>
            <SkillTag>Diffusion / Markov Chains</SkillTag>
            <SkillTag>Bio-inspired Computing</SkillTag>
            <SkillTag>Genetic Algorithms</SkillTag>
            <SkillTag>Perceptrons & Boltzmann</SkillTag>
          </div>
        </div>
      </div>
    </section>
  )
}
