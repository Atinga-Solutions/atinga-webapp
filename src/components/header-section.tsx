// src/components/header.tsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Menu, Sun, Moon, ChevronDown } from "lucide-react"
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
            { name: "CRM Systems", href: "/services/crm" },
            { name: "Blockchain", href: "/services/blockchain" },
            { name: "UI / UX", href: "/services/ui-ux" }
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
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <div className="relative overflow-hidden">
                            <Image
                                src={AtingaLogo}
                                alt="Atinga Solutions"
                                width={150}
                                height={100}
                                className="h-12 md:h-20 rounded-full w-auto object-contain transition-transform duration-300 group-hover:scale-200"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navigationLinks.map((link) => (
                            link.subLinks ? (
                                <DropdownMenu key={link.name}>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant={isActive(link.href) ? "default" : "ghost"}
                                            className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${isActive(link.href)
                                                ? "text-primary-foreground bg-primary"
                                                : "hover:bg-secondary/80 hover:text-secondary-foreground hover:scale-105"
                                                }`}
                                        >
                                            {link.name}
                                            <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="center" className="w-48 p-1 animate-in fade-in-80 slide-in-from-top-5">
                                        {link.subLinks.map((subLink) => (
                                            <DropdownMenuItem key={subLink.name} asChild>
                                                <Link
                                                    href={subLink.href}
                                                    className={`w-full rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 ${isSubLinkActive(subLink.href)
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
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive(link.href)
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
                    <div className="flex items-center space-x-2">
                        {/* Theme Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="text-foreground hover:bg-secondary/80 hover:text-secondary-foreground transition-transform duration-300 hover:scale-105"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <Sun className="h-5 w-5 transition-all duration-500 rotate-0 hover:rotate-90" />
                            ) : (
                                <Moon className="h-5 w-5 transition-all duration-500 rotate-0 hover:-rotate-90" />
                            )}
                        </Button>

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
                                    {navigationLinks.map((link) => (
                                        link.subLinks ? (
                                            <div key={link.name} className="space-y-2">
                                                <div className="px-2 text-base font-semibold">{link.name}</div>
                                                <div className="pl-4 flex flex-col space-y-2">
                                                    {link.subLinks.map((subLink) => (
                                                        <Link
                                                            key={subLink.name}
                                                            href={subLink.href}
                                                            className={`px-2 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${isSubLinkActive(subLink.href)
                                                                ? "bg-primary text-primary-foreground"
                                                                : "hover:bg-secondary/80 hover:text-secondary-foreground hover:translate-x-1"
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
                                    <Button
                                        variant="default"
                                        className="w-full mt-4 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground hover:bg-primary/90 hover:shadow-lg transition-all duration-300"
                                        onClick={() => setIsMobileMenuOpen(false)}
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