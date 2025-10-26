"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import FadeInSection from "./FadeInSection"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-700 via-blue-800 to-blue-900 text-white">
      <FadeInSection>
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* ---- GRID SECTIONS ---- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* --- LOGO + DESCRIPTION --- */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/aleoa-logo.jpg"
                alt="Logo ALEOA"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <h3 className="text-2xl font-bold">ALEOA</h3>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Association des Leaders de l'Excellence  promouvoir le leadership,
              l'innovation et l'engagement communautaire à travers le monde.
            </p>
          </div>

          {/* --- NAVIGATION --- */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/about", label: "À propos" },
                { href: "/programs", label: "Programmes" },
                { href: "/members", label: "Membres" },
                { href: "/blog", label: "Blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative inline-block text-white/80 hover:text-white transition-all duration-300 group"
                  >
                    {link.label}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- ENGAGEMENT --- */}
          <div>
            <h4 className="font-semibold text-lg mb-4">S'engager</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/join", label: "Rejoignez-nous" },
                { href: "/donate", label: "Faire un don" },
                { href: "/partners", label: "Partenaires" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative inline-block text-white/80 hover:text-white transition-all duration-300 group"
                  >
                    {link.label}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- NEWSLETTER --- */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Restez connecté</h4>
            <p className="text-sm text-white/80 mb-4">
              Recevez les dernières mises à jour sur nos programmes et événements.
            </p>
            <form className="flex gap-2 mb-4">
              <Input
                type="email"
                required
                placeholder="Votre email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30"
              />
              <Button
                type="submit"
                variant="secondary"
                size="sm"
                className="bg-white text-blue-800 font-bold hover:bg-blue-100 transition"
              >
                S'abonner
              </Button>
            </form>

            {/* --- SOCIAL ICONS --- */}
           <div className="flex gap-4 mt-4">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
      <FaFacebookF />
    </div>
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <div className="w-10 h-10 flex items-center justify-center bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors">
      <FaInstagram />
    </div>
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <div className="w-10 h-10 flex items-center justify-center bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors">
      <FaLinkedinIn />
    </div>
  </a>
  <a href="https://x.com/tonprofil" target="_blank" rel="noopener noreferrer">
    <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
      X
    </div>
  </a>
</div>

          </div>
        </div>

        {/* ---- COPYRIGHT ---- */}
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} Association des Leaders de l'Excellence. Tous droits réservés.</p>
        </div>
      </div>
      </FadeInSection>
    </footer>
  )
}
