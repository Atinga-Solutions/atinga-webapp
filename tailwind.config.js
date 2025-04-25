import { BRAND_COLORS, NEUTRAL_COLORS, SEMANTIC_COLORS, TYPOGRAPHY } from './src/constants/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: BRAND_COLORS.primary,
        secondary: BRAND_COLORS.secondary,
        amber: BRAND_COLORS.accent.amber,
        teal: BRAND_COLORS.accent.teal,
        
        // Neutral colors
        gray: NEUTRAL_COLORS.gray,
        
        // Semantic colors
        success: SEMANTIC_COLORS.success,
        warning: SEMANTIC_COLORS.warning,
        error: SEMANTIC_COLORS.error,
        info: SEMANTIC_COLORS.info,
        
        // Theme colors
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
      },
      fontFamily: {
        heading: TYPOGRAPHY.fontFamily.heading,
        sans: TYPOGRAPHY.fontFamily.body,
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
};