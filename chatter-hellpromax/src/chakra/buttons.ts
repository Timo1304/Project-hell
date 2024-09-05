import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "60px",
    fontSize: "10pt",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
    },
  },
  variants: {
    solid: (props) => ({
      color: "white",
      bg: props.colorMode === "dark" ? "brand.100" : "brand.100",
      _hover: {
        bg: props.colorMode === "dark" ? "secondary.100" : "secondary.100",
      },
    }),
    outline: (props) => ({
      color: props.colorMode === "dark" ? "brand.100" : "brand.100",
      border: "1px solid",
      borderColor: props.colorMode === "dark" ? "brand.100" : "brand.100",
      _hover: {
        bg: props.colorMode === "dark" ? "accent.1" : "accent.2",
        color: "white",
      },
    }),
    oauth: {
      height: "34px",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "gray.50",
      },
    },
  },
};
