import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Developer • Researcher • ML Enthusiast
      </motion.h1>
      <motion.p
        className="mt-6 text-lg text-foreground/80 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I'm Josh, an 18-year-old developer and researcher in Israel (GPA 99). I build computer vision and ML systems, from real-time ASL recognition with MobileNetV2/ResNet + MediaPipe to multimodal search over large MEGA datasets. I enjoy CUDA, PyTorch, CTF-style reverse engineering, and clean, production-grade UIs.
      </motion.p>
      <motion.div
        className="mt-10 flex flex-wrap gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <a href="#projects" className="px-4 py-2 rounded-xl bg-primary text-background hover:shadow-glow transition">
          See Projects
        </a>
        <a href="#contact" className="px-4 py-2 rounded-xl bg-accent/50 hover:bg-accent transition">
          Contact Me
        </a>
      </motion.div>
    </section>
  )
}
