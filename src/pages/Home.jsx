import React, { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/banner.png')" }}
      aria-label="PolyHACK 2026 Background"
    >
      {/* Intentionally empty – full-screen, non-scroll landing */}
    </div>
  )
}
