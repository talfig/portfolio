import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const g = glowRef.current
    const move = (e) => {
      const x = e.clientX
      const y = e.clientY
      g.style.transform = `translate(${x - 150}px, ${y - 150}px)`
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed w-[300px] h-[300px] rounded-full -z-0"
      style={{
        background: 'radial-gradient(circle, rgba(124,92,255,0.35) 0%, rgba(124,92,255,0.0) 60%)',
        filter: 'blur(20px)'
      }}
      aria-hidden
    />
  )
}
