'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold text-[#014D40] hover:text-teal-700 transition-colors tracking-tight">
            ACG Auditores
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#014D40] hover:text-teal-700 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <ul className="hidden lg:flex items-center space-x-8">
            {["Inicio", "Servicios", "Quienes Somos", "Contacto"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-[#014D40]/90 hover:text-teal-700 transition-colors font-medium tracking-wide"
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <button className="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 text-white px-6 py-2.5 rounded-full font-bold transition-all hover:shadow-lg hover:scale-105 tracking-wide">
                Contáctanos
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-[400px] opacity-100 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col space-y-4 py-4 px-4">
            {["Inicio", "Servicios", "Quienes Somos", "Contacto"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-[#014D40]/90 hover:text-teal-700 transition-colors block py-2 font-medium tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <button
                className="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 text-white px-6 py-2.5 rounded-full font-bold transition-all hover:shadow-lg hover:scale-105 w-full tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                Contáctanos
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

