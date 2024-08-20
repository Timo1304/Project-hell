// 1. Import `extendTheme`
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import { extendTheme } from "@chakra-ui/react";

// 2. Call and export `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "rgb(242, 97, 63)",
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
    //buttons:
  }
});