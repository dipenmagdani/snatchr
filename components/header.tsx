"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { FaYoutube, FaMusic } from "react-icons/fa"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])
  
  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-200 ${
      scrolled 
        ? "bg-background/80 backdrop-blur-md border-b" 
        : "bg-transparent"
    }`}>
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="flex items-center gap-1.5">
              <FaYoutube className="h-5 w-5 text-red-500" />
              <FaMusic className="h-4 w-4 text-green-500" />
            </div>
            <span className="hidden sm:inline-block">Media Downloader</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-1">
            <Button variant="ghost" asChild>
              <Link href="/#features">Features</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/#faq">FAQ</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/#contact">Contact</Link>
            </Button>
          </nav>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  )
}