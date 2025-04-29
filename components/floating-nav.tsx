"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Home, User, Briefcase, GraduationCap, Award, Mail, Menu, X } from "lucide-react"

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling down a bit
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Determine active section
      const sections = ["home", "about", "skills", "education", "projects", "certificates", "contact"]

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(section === "home" ? "home" : section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "home", icon: Home, label: "Home" },
    { name: "about", icon: User, label: "About" },
    { name: "skills", icon: Award, label: "Skills" },
    { name: "education", icon: GraduationCap, label: "Education" },
    { name: "projects", icon: Briefcase, label: "Projects" },
    { name: "contact", icon: Mail, label: "Contact" },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <div
        className={cn(
          "fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block transition-all duration-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10",
        )}
      >
        <nav className="bg-gray-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-gray-800 shadow-lg">
          <ul className="flex space-x-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={`#${item.name}`}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
                    activeSection === item.name
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "text-gray-400 hover:text-yellow-400 hover:bg-gray-800",
                  )}
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Toggle */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={cn(
          "fixed top-6 right-6 z-50 md:hidden bg-gray-900/80 backdrop-blur-md p-3 rounded-full border border-gray-800 shadow-lg transition-all duration-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10",
        )}
      >
        {isMobileMenuOpen ? (
          <X className="text-yellow-400" size={24} />
        ) : (
          <Menu className="text-yellow-400" size={24} />
        )}
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-md transition-all duration-500 flex items-center justify-center",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      >
        <nav className="w-full max-w-sm">
          <ul className="flex flex-col space-y-4 p-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={`#${item.name}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300",
                    activeSection === item.name
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "text-gray-300 hover:text-yellow-400 hover:bg-gray-800/50",
                  )}
                >
                  <item.icon size={20} />
                  <span className="text-lg">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
