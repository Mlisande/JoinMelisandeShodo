'use client';
import localFont from "next/font/local";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from './styles/theme';
//import "./globals.css";

// j'importe les fonts locales avec localFont 
const bluuNext = localFont({
  src: "./fonts/BluuNext-Titling.otf",
  variable: "--font-bluu-next",
  weight: "400 700",
});
const inter = localFont({
  src: "./fonts/Inter-Regular.ttf",
  variable: "--font-inter-regular",
  weight: "200 400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bluuNext.variable} ${inter.variable}`}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
