import { useEffect } from 'react'
import { motion } from 'framer-motion'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Research from './components/Research'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background from './components/Background'
import CursorGlow from './components/CursorGlow'
import MouseTrail from './components/MouseTrail'
import Phone from './components/Phone'

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('cursor-none')
    return () => document.documentElement.classList.remove('cursor-none')
  }, [])

  const handleMouseEnterPhone = () => {
    document.documentElement.classList.remove('cursor-none')
  }

  const handleMouseLeavePhone = () => {
    document.documentElement.classList.add('cursor-none')
  }

  return (
    <div className="relative min-h-screen hide-cursor selection:bg-primary selection:text-primary-foreground">
      {/* Background and Cursor Effects */}
      <Background />
      <CursorGlow />
      <MouseTrail />

      <div className="relative z-10">
        {/* Navigation */}
        <NavBar />

        {/* Hero + Phone side-by-side */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 mt-12">
          {/* Left: Hero */}
          <div className="flex-1">
            <Hero />
          </div>

          {/* Right: Phone */}
          <div
            className="flex justify-center lg:justify-end lg:sticky lg:top-20 mt-8 lg:mt-0"
            onMouseEnter={handleMouseEnterPhone}
            onMouseLeave={handleMouseLeavePhone}
          >
            <div className="w-full max-w-xs lg:max-w-sm">
              <Phone />
            </div>
          </div>
        </main>

        {/* Sections from Skills onward */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-12 mt-16">
          {/* Centered sections */}
          <div className="flex justify-center w-full">
            <Skills />
          </div>
          <div className="flex justify-center w-full">
            <Projects />
          </div>
          <div className="flex justify-center w-full">
            <Experience />
          </div>
          <div className="flex justify-center w-full">
            <Research />
          </div>

          {/* Contact aligned left container, but text centered */}
          <div className="w-full lg:pl-0 flex justify-start">
            <div className="w-full text-center">
              <Contact />
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>

      {/* Noise Overlay Animation */}
      <motion.div
        className="pointer-events-none fixed inset-0 bg-noise mix-blend-soft-light opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.6 }}
      />
    </div>
  )
}
