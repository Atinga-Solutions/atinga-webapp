// src/components/header.tsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import Image from "next/image"
import { AtingaLogo } from "../../public/assets/icons/Icons"
import { Menu } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/pages/about-us" },
    {
        name: "Services",
        href: "/pages/services",
    },
    { name: "projects", href: "/pages/projects" },
    { name: "Contact", href: "/pages/contact-page" },
    { name: "careers", href: "/pages/careers" },

]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()
    const [mounted, setMounted] = useState(false)

    // Handle scroll effect for header
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        setMounted(true) // Avoid hydration mismatch

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    // Check if a link is active
    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === href
        }
        return pathname?.startsWith(href)
    }
    if (!mounted) {
        return null // Avoid hydration mismatch
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-background/95 backdrop-blur-md shadow-md py-2"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 lg:px-0.5">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <div className="relative overflow-hidden">
                            <Image
                                src={AtingaLogo}
                                alt="Atinga Solutions"
                                width={150}
                                height={100}
                                className="h-12 md:h-28 rounded-full w-auto object-contain transition-transform duration-300 group-hover:scale-200"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-3">
                        {navigationLinks.map((link) => (
                            (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive(link.href)
                                        ? "bg-primary text-primary-foreground"
                                        : "hover:bg-secondary/80 hover:text-secondary-foreground hover:scale-105"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </nav>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-4">
                        <ModeToggle />


                        {/* Contact Button - Desktop */}
                        <Button
                            variant="default"
                            className="hidden md:inline-flex bg-gradient-to-r from-primary to-blue-600 text-primary-foreground hover:bg-primary/90 hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            Get a Quote
                        </Button>

                        {/* Mobile Menu Button */}
                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="lg:hidden text-foreground hover:bg-secondary/80 transition-transform duration-300 hover:scale-105"
                                    aria-label="Open menu"
                                >
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[85%] sm:w-[350px] pt-10 animate-in slide-in-from-right">
                                <SheetHeader className="mb-6">
                                    <SheetTitle className="text-2xl font-bold">
                                        <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                                            Atinga Solutions
                                        </span>
                                    </SheetTitle>
                                </SheetHeader>
                                <nav className="flex flex-col space-y-4">
                                    {navigationLinks.map((link) => ((
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={`px-2 py-2 rounded-md text-base font-medium transition-all duration-300 ${isActive(link.href)
                                                ? "bg-primary text-primary-foreground"
                                                : "hover:bg-secondary/80 hover:text-secondary-foreground hover:translate-x-1"
                                                }`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    )
                                    ))}

                                    {/* Mobile Contact Button */}
                                    <Link href='/pages/get-quoatation'>
                                        <Button
                                            variant="default"
                                            className="w-full mt-4 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground hover:bg-primary/90 hover:shadow-lg transition-all duration-300"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Get a Quote
                                        </Button>
                                    </Link>

                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}