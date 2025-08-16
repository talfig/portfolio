import { useEffect } from 'react'

export default function MouseTrail() {
  useEffect(() => {
    const dots = Array.from({ length: 16 }, () => {
      const el = document.createElement('div')
      el.className = 'pointer-events-none fixed w-2 h-2 rounded-full bg-primary opacity-0'
      document.body.appendChild(el)
      return { el, x: 0, y: 0 }
    })
    let i = 0
    const onMove = (e) => {
      const d = dots[i % dots.length]
      d.x = e.clientX; d.y = e.clientY
      d.el.style.left = d.x + 'px'
      d.el.style.top = d.y + 'px'
      d.el.animate([
        { transform: 'translate(-50%,-50%) scale(1)', opacity: 0.9 },
        { transform: 'translate(-50%,-50%) scale(0.2)', opacity: 0 }
      ], { duration: 700, easing: 'ease-out' })
      i++
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      dots.forEach(d => d.el.remove())
    }
  }, [])

  return null
}
