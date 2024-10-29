import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0b0b0b", // noir
      light: "#ffffff", //blanc
    },
    secondary: {
      main: "#ee1b48", // rose/rouge
    },
    background: {
      default: "#eeb31b", // jaune
      paper: "#ee741b", // orange
    },
  },
  typography: {
    fontFamily: `'var(--font-bluu-next)', 'var(--font-inter-regular)'`,
    h1: {
      fontFamily: "var(--font-bluu-next), sans-serif",
      fontSize: "138px",
      fontWeight: "500",
      lineHeight: "151.8px",
      color: "white",
    },
    h4: {
      fontFamily: "var(--font-bluu-italic), sans-serif",
      fontSize: "138px",
      fontWeight: "500",
      lineHeight: "151.8px",
      fontStyle: "italic",
      color: "white",
    },
    h2: {
      // titres moyens
      fontFamily: "var(--font-bluu-next), sans-serif",
      fontSize: "68px",
      fontWeight: "400",
      lineHeight: "75px",
    },
    h3: {
      // titres plus petits
      fontFamily: "var(--font-bluu-next), sans-serif",
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "23.2px",
    },
    body1: {
      // texte
      fontFamily: "var(--font-inter-regular), sans-serif",
      fontSize: "17px",
      fontWeight: 400,
      lineHeight: "25.5px",
      color: "white",
    },
    body2: {
      fontFamily: "var(--font-inter-regular), sans-serif",
      fontSize: "14px",
      fontWeight: 300,
      lineHeight: "25.5px",
      color: "white",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          maxWidth: "100vw",
          overflowX: "hidden",
          backgroundColor: "#0b0b0b",
          fontFamily: "var(--font-inter), sans-serif",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
        "*": {
          boxSizing: "border-box",
          padding: 0,
          margin: 0,
        },
        a: {
          color: "inherit",
          textDecoration: "none",
        },
      },
    },
  },
});

export default theme;
