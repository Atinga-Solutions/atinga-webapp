// src/constants/theme.ts

/**
 * Atinga Solutions Theme Constants
 *
 * This file contains all color and theme-related constants for maintaining
 * consistency across the application.
 */

// Brand Colors
export const BRAND_COLORS = {
  // Primary blue from the Atinga Solutions logo
  primary: {
    50: "#E6F0F5",
    100: "#CCDCE8",
    200: "#99B8D1",
    300: "#6695BA",
    400: "#3371A3",
    500: "#0A3B5C", // Main brand color
    600: "#08304A",
    700: "#062537",
    800: "#041B25",
    900: "#020D12",
  },

  // Teal secondary color
  secondary: {
    50: "#E6F9FC",
    100: "#CCF3F9",
    200: "#99E7F3",
    300: "#66DAED",
    400: "#33CEE7",
    500: "#00B4D8", // Secondary color
    600: "#0090AD",
    700: "#006C82",
    800: "#004856",
    900: "#00242B",
  },

  // Accent colors
  accent: {
    amber: {
      400: "#FFD54F",
      500: "#FFC107", // Primary accent
      600: "#FFB300",
    },
    teal: {
      400: "#009EAF",
      500: "#007486", // Secondary accent
      600: "#00616F",
    },
  },
};

// Neutral Colors
export const NEUTRAL_COLORS = {
  white: "#FFFFFF",
  black: "#000000",
  gray: {
    50: "#F8F9FA",
    100: "#F1F3F5",
    200: "#E9ECEF",
    300: "#DEE2E6",
    400: "#CED4DA",
    500: "#ADB5BD",
    600: "#6C757D",
    700: "#495057",
    800: "#343A40",
    900: "#212529",
  },
};

// Semantic Colors
export const SEMANTIC_COLORS = {
  success: {
    light: "#4ADE80",
    dark: "#22C55E",
  },
  warning: {
    light: "#FBBF24",
    dark: "#F59E0B",
  },
  error: {
    light: "#F87171",
    dark: "#EF4444",
  },
  info: {
    light: "#38BDF8",
    dark: "#0EA5E9",
  },
};

// Theme Configuration
export const THEME_CONFIG = {
  // Light mode configuration
  light: {
    background: NEUTRAL_COLORS.white,
    foreground: NEUTRAL_COLORS.gray[900],
    card: NEUTRAL_COLORS.white,
    cardForeground: NEUTRAL_COLORS.gray[900],
    popover: NEUTRAL_COLORS.white,
    popoverForeground: NEUTRAL_COLORS.gray[900],
    primary: BRAND_COLORS.primary[500],
    primaryForeground: NEUTRAL_COLORS.white,
    secondary: BRAND_COLORS.secondary[500],
    secondaryForeground: NEUTRAL_COLORS.white,
    accent: BRAND_COLORS.accent.amber[500],
    accentForeground: NEUTRAL_COLORS.gray[900],
    muted: NEUTRAL_COLORS.gray[100],
    mutedForeground: NEUTRAL_COLORS.gray[600],
    border: NEUTRAL_COLORS.gray[200],
    input: NEUTRAL_COLORS.gray[200],
    ring: BRAND_COLORS.primary[500],
    mouseEffectColor: "rgba(10, 59, 92, 0.15)", // Primary blue with opacity
  },

  // Dark mode configuration
  dark: {
    background: NEUTRAL_COLORS.gray[900],
    foreground: NEUTRAL_COLORS.gray[100],
    card: NEUTRAL_COLORS.gray[800],
    cardForeground: NEUTRAL_COLORS.gray[100],
    popover: NEUTRAL_COLORS.gray[800],
    popoverForeground: NEUTRAL_COLORS.gray[100],
    primary: BRAND_COLORS.primary[400],
    primaryForeground: NEUTRAL_COLORS.gray[900],
    secondary: BRAND_COLORS.secondary[400],
    secondaryForeground: NEUTRAL_COLORS.gray[900],
    accent: BRAND_COLORS.accent.amber[400],
    accentForeground: NEUTRAL_COLORS.gray[900],
    muted: NEUTRAL_COLORS.gray[800],
    mutedForeground: NEUTRAL_COLORS.gray[400],
    border: NEUTRAL_COLORS.gray[700],
    input: NEUTRAL_COLORS.gray[700],
    ring: BRAND_COLORS.primary[400],
    mouseEffectColor: "rgba(51, 113, 163, 0.25)", // Primary blue lighter shade with opacity
  },
};

// Font settings
export const TYPOGRAPHY = {
  fontFamily: {
    heading: "'Montserrat', sans-serif",
    body: "'Inter', sans-serif",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
  },
};

// Spacing and layout constants
export const LAYOUT = {
  containerPadding: {
    mobile: "1rem", // 16px
    tablet: "2rem", // 32px
    desktop: "4rem", // 64px
  },
  maxWidth: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  sectionSpacing: {
    sm: "2rem", // 32px
    md: "4rem", // 64px
    lg: "6rem", // 96px
    xl: "8rem", // 128px
  },
};

// Animation constants
export const ANIMATIONS = {
  transition: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
  },
  easing: {
    default: "cubic-bezier(0.4, 0, 0.2, 1)", // Material design standard easing
    entrance: "cubic-bezier(0, 0, 0.2, 1)", // Material design deceleration curve
    exit: "cubic-bezier(0.4, 0, 1, 1)", // Material design acceleration curve
  },
};

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// Border radius
export const BORDER_RADIUS = {
  none: "0",
  sm: "0.125rem", // 2px
  md: "0.25rem", // 4px
  lg: "0.5rem", // 8px
  xl: "1rem", // 16px
  "2xl": "1.5rem", // 24px
  full: "9999px",
};

// Shadows
export const SHADOWS = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
};
