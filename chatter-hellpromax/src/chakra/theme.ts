// 1. Imports 
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { Button } from "./buttons";

// 2. Theme configuration for light and dark modes
const config: ThemeConfig = {
  initialColorMode: "light",  // Set default theme mode
  useSystemColorMode: true,   // Enable system color mode preference
};

// 3. Define the theme with color schemes for light and dark modes
export const theme = extendTheme({
  config,  // Use the theme configuration for color modes
  colors: {
    brand: {
      100: "#0077b6", // Primary brand color (blue)
    },
    secondary: {
      100: "#ff6b6b", // Secondary color (coral red)
    },
    accent: {
      1: "#ffcb77", // Accent color (amber)
      2: "#6a0572", // Accent color (purple)
    },
    background: {
      light: "#f5f5f5", // Light mode background
      dark: "#1c1c1c",  // Dark mode background
    },
    text: {
      light: "#333333", // Light mode text
      dark: "#f5f5f5",  // Dark mode text
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",  // Global font for the body
  },
  styles: {
    global: (props: { colorMode: string; }) => ({
      body: {
        bg: props.colorMode === "dark" ? "background.dark" : "background.light",  // Dynamic background
        color: props.colorMode === "dark" ? "text.dark" : "text.light",  // Dynamic text color
      },
    }),
  },
  components: {
    Button, // Apply the button configuration with dynamic variants
  },
});
