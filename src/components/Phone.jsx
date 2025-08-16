import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const frames = {
  Terminal: [
    "(gdb) run ./portfolio",
    "Starting program...",
    "Breakpoint hit at main()",
    "Exploring portfolio..."
  ],
  Disasm: [
    "(gdb) disassemble /m main",
    "=> 0x0804923e <+0>: Developer & ML Researcher",
    "   0x08049242 <+4>: GPA: 97",
    "   0x08049245 <+7>: Skills: PyTorch, CUDA, OpenCV, CTF/RE",
    "   0x08049248 <+10>: Projects: ASL Recognition, Assembler, MegaSearch-AI",
    "   0x0804924c <+14>: Languages: Python, C, C++, Java, JavaScript"
  ],
  Registers: [
    "(gdb) i r",
    "eax            0xFF  // Enthusiasm Level",
    "ebx            0xFF  // Curiosity Level",
    "ecx            0x61  // GPA mapped to hex (97)",
    "edx            0x2   // Years of research"
  ],
  Memory: [
    "(gdb) x/4wx $esp",
    "0xbffff1e0:  'Research', 'ML', 'Computer Vision', 'AI'",
    "0xbffff1f0:  'PyTorch', 'CUDA', 'OpenCV', 'CTF/RE'"
  ]
};

export default function Phone() {
  const [tab, setTab] = useState("Terminal");

  const tabs = Object.keys(frames);
  const currentLines = frames[tab];

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-[320px] h-[640px] rounded-[36px] border border-accent/60 bg-gradient-to-b from-[#0e1426] to-[#090f1d] shadow-2xl relative overflow-hidden"
      aria-label="Interactive debugger phone"
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-2 w-40 h-6 bg-black/60 rounded-full" />
      {/* Side buttons hint */}
      <div className="absolute right-0 top-24 w-0.5 h-24 bg-accent/60" />
      {/* Screen */}
      <div className="absolute inset-0 p-4 pt-10 flex flex-col">
        <div className="flex items-center justify-between mb-2 text-xs text-foreground/60">
          <span>gdb@portfolio</span>
          <span>{tab}</span>
        </div>

        {/* Terminal / view window */}
        <div className="flex-1 rounded-2xl bg-black/60 border border-accent/40 overflow-hidden shadow-glow">
          <div className="flex items-center gap-2 px-3 py-2 border-b border-accent/40">
            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
            <span className="ml-2 text-xs text-foreground/60">/dev/pts/0 — gdb</span>
          </div>
          <div className="font-mono text-[12px] leading-relaxed p-3 h-full overflow-auto">
            <AnimatePresence mode="wait">
              <motion.pre
                key={tab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="whitespace-pre-wrap text-foreground/90"
              >
                {currentLines.join("\n")}
              </motion.pre>
            </AnimatePresence>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-3 flex justify-center gap-2 text-[11px]">
          {tabs.map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-2 py-1 rounded-full text-xs ${
                tab === t ? "bg-accent/40" : "bg-accent/20 hover:bg-accent/40"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
