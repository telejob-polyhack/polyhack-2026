import React from 'react'

const Slot = ({ tier, size }) => (
  <div className="sponsor-box" style={{ width: size, height: size }} aria-label={tier + ' sponsor placeholder'}>
    {/* empty grey square */}
  </div>
)

export default function Sponsors() {
  return (
    <section className="pt-24 pb-24 px-6 min-h-screen max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">Sponsors</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Platinum</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
          {Array.from({ length: 3 }).map((_, i) => <Slot key={'p'+i} tier="platinum" size={160} />)}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Gold</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center">
          {Array.from({ length: 5 }).map((_, i) => <Slot key={'g'+i} tier="gold" size={120} />)}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center">Silver</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-6 place-items-center">
          {Array.from({ length: 8 }).map((_, i) => <Slot key={'s'+i} tier="silver" size={90} />)}
        </div>
      </div>
    </section>
  )
}
