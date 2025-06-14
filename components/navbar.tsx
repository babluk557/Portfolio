"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          <span className="text-primary">Bablu</span> Kumar
        </Link>

        <div className="flex items-center gap-4">
          <ModeToggle />

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="#home" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#education" className="hover:text-primary transition-colors">
              Education
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link href="#home" className="hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="#about" className="hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#skills" className="hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Skills
            </Link>
            <Link href="#experience" className="hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Experience
            </Link>
            <Link href="#projects" className="hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="#education" className="hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Education
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
