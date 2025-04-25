/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/header.tsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import Image from "next/image"
import { AtingaLogo } from "../../public/assets/icons/Icons"


const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/pages/about-us" },
    {
        name: "Services",
        href: "/services",
        subLinks: [
            { name: "Web Development", href: "/services/web-development" },
            { name: "Mobile Applications", href: "/services/mobile-applications" },
            { name: "Fintech Solutions", href: "/services/fintech" },
            { name: "Machine Learning", href: "/services/machine-learning" },
            { name: "ERP Systems", href: "/services/erp" },
            { name: "POS Systems", href: "/services/pos" },
        ]
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()
    const { theme, setTheme } = useTheme()
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

    // Check if a sublink is active
    const isSubLinkActive = (href: string) => {
        return pathname === href
    }

    // Toggle theme
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    if (!mounted) {
        return null // Avoid hydration mismatch
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/95 backdrop-blur-md shadow-md py-2"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src={AtingaLogo}
                            alt="Atinga Solutions"
                            width={100}
                            height={50}
                            className="h-8 md:h-10 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navigationLinks.map((link) => (
                            link.subLinks ? (
                                <DropdownMenu key={link.name}>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant={isActive(link.href) ? "default" : "ghost"}
                                            className={`px-3 py-2 text-sm font-medium transition-colors ${isActive(link.href)
                                                ? "text-primary-foreground bg-primary"
                                                : "hover:bg-secondary/80 hover:text-secondary-foreground"
                                                }`}
                                        >
                                            {link.name}
                                            <ChevronDown className="ml-1 h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="center" className="w-48 p-1">
                                        {link.subLinks.map((subLink) => (
                                            <DropdownMenuItem key={subLink.name} asChild>
                                                <Link
                                                    href={subLink.href}
                                                    className={`w-full rounded-md px-3 py-2 text-sm font-medium transition-colors ${isSubLinkActive(subLink.href)
                                                        ? "bg-primary text-primary-foreground"
                                                        : "hover:bg-secondary/80 hover:text-secondary-foreground"
                                                        }`}
                                                >
                                                    {subLink.name}
                                                </Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.href)
                                        ? "bg-primary text-primary-foreground"
                                        : "hover:bg-secondary/80 hover:text-secondary-foreground"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </nav>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-2">
                        {/* Theme Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            className="text-foreground hover:bg-secondary/80 hover:text-secondary-foreground"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </Button>

                        {/* Contact Button - Desktop */}
                        <Button
                            variant="gradient"
                            className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                            Get a Quote
                        </Button>

                        {/* Mobile Menu Button */}
                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="lg:hidden text-foreground hover:bg-secondary/80"
                                    aria-label="Open menu"
                                >
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[85%] sm:w-[350px] pt-10">
                                <SheetHeader className="mb-6">
                                    <SheetTitle className="text-primary text-2xl font-bold">
                                        Atinga<span className="text-primary">Solutions</span>
                                    </SheetTitle>
                                </SheetHeader>
                                <nav className="flex flex-col space-y-4">
                                    {navigationLinks.map((link) => (
                                        link.subLinks ? (
                                            <div key={link.name} className="space-y-2">
                                                <div className="px-2 text-base font-semibold">{link.name}</div>
                                                <div className="pl-4 flex flex-col space-y-2">
                                                    {link.subLinks.map((subLink) => (
                                                        <Link
                                                            key={subLink.name}
                                                            href={subLink.href}
                                                            className={`px-2 py-1.5 rounded-md text-sm font-medium transition-colors ${isSubLinkActive(subLink.href)
                                                                ? "bg-primary text-primary-foreground"
                                                                : "hover:bg-secondary/80 hover:text-secondary-foreground"
                                                                }`}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            {subLink.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                className={`px-2 py-2 rounded-md text-base font-medium transition-colors ${isActive(link.href)
                                                    ? "bg-primary text-primary-foreground"
                                                    : "hover:bg-secondary/80 hover:text-secondary-foreground"
                                                    }`}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        )
                                    ))}

                                    {/* Mobile Contact Button */}
                                    <Button
                                        variant="default"
                                        className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                                        onClick={() => {
                                            setIsMobileMenuOpen(false)
                                            // You could also add navigation logic here if needed
                                        }}
                                    >
                                        Get a Quote
                                    </Button>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}