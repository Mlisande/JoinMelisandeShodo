'use client';
import localFont from "next/font/local";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from './styles/theme';
import Header from "./components/Header";
//import "./globals.css";

// j'importe les fonts locales avec localFont 
const bluuNext = localFont({
  src: "./fonts/BluuNext-Titling.otf",
  variable: "--font-bluu-next",
  weight: "400 700",
});

const bluuNextIt = localFont({
  src : "./fonts/BluuNext-Bolditalic.otf",
  variable: "--font-bluu-italic",
  weight: "400 600"
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
      <body 
      className={`${bluuNext.variable} ${inter.variable} ${bluuNextIt.variable}`}
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Header/>
          <main style={{ flex: '1' }}>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
