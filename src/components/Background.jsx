import { useEffect, useRef } from 'react'

// Animated gradient + subtle grid background rendered on canvas
export default function Background() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const c = canvasRef.current
    const ctx = c.getContext('2d')
    let raf
    let t = 0

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    const resize = () => {
      c.width = innerWidth * DPR
      c.height = innerHeight * DPR
      c.style.width = innerWidth + 'px'
      c.style.height = innerHeight + 'px'
    }
    resize()
    addEventListener('resize', resize)

    const draw = () => {
      t += 0.003
      const w = c.width, h = c.height

      // Smooth animated gradient
      const g = ctx.createLinearGradient(0, 0, w, h)
      const a = 0.5 + Math.sin(t) * 0.5
      const b = 0.5 + Math.cos(t * 1.3) * 0.5
      g.addColorStop(0, `rgba(124,92,255,${0.15 + a*0.15})`)
      g.addColorStop(1, `rgba(29,42,68,${0.25 + b*0.15})`)

      ctx.fillStyle = '#0b1220'
      ctx.fillRect(0, 0, w, h)
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      // Seamless faint grid
      const step = 40 * DPR
      ctx.globalAlpha = 0.06
      ctx.strokeStyle = '#ffffff'
      ctx.lineWidth = 1
      for (let x=0; x<w; x+=step) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke()
      }
      for (let y=0; y<h; y+=step) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke()
      }
      ctx.globalAlpha = 1

      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" aria-hidden />
}
