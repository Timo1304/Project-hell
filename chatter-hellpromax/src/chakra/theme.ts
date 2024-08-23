// 1. Imports 
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import { extendTheme } from "@chakra-ui/react";
import { Button } from "./buttons";

// 2. Call and export values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "orange.100",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: () => ({
        body: {
            bg: "yellow.50",
        }
    })
  },
  components: {
    Button,
  },
});