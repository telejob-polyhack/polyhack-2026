import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Sponsors', path: '/sponsors' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <span className="text-xl md:text-2xl font-bold tracking-tight">Poly<span className="font-extrabold">HACK</span> 2026</span>
          <img src="/polyhack_logo.png" alt="PolyHACK Logo" className="hidden sm:block h-6 opacity-80" />
        </Link>
        <div className="flex space-x-6">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm md:text-base hover:text-gray-300 transition ${
                location.pathname === link.path ? 'underline underline-offset-4' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
