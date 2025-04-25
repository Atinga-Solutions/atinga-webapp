// src/components/mouse-move-effect.tsx
"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { THEME_CONFIG } from "@/constants/theme"

export default function MouseMoveEffect() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Get the appropriate mouse effect color based on the theme
    const effectColor = resolvedTheme === 'dark'
        ? THEME_CONFIG.dark.mouseEffectColor
        : THEME_CONFIG.light.mouseEffectColor

    useEffect(() => {
        // Mark as mounted to avoid hydration mismatch
        setMounted(true)

        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    // Don't render anything until after hydration to avoid mismatch
    if (!mounted) {
        return null
    }

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            style={{
                background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, ${effectColor}, transparent 80%)`,
            }}
        />
    )
}