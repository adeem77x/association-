"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"  // ✅ ajout important

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname() // ✅ récupère la page active

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos" },
    { href: "/programs", label: "Programmes" },
    { href: "/members", label: "Membres" },
    { href: "/partners", label: "Partenaires" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/aleoa-logo.jpg" alt="ALEOA Logo" width={50} height={50} className="object-contain" />
            <span className="text-2xl font-bold tracking-tight text-black">ALEOA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-10">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-all duration-300 relative group ${
                    isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:block">
            <Button
              asChild
              size="sm"
              className="bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-lg"
            >
              <Link href="/join">Rejoignez-nous</Link>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-black hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 space-y-6 border-t border-gray-200">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-base font-semibold transition-colors ${
                    isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
            <Button asChild className="w-full bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg">
              <Link href="/join">Rejoignez-nous</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
