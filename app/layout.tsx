import type { Metadata } from "next";
import "./globals.css";
import {Inter as FontSans} from "next/font/google";
import { cn } from "@/lib/utils";
import siteConfig from "@/config/site";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";
import Footer from "./components/footer";

const fontSans= FontSans({
  subsets:["latin"],
  variable: "--font-sans",
})
 
export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar/>
        {children}
        </ThemeProvider>
        <Footer/>
      </body>
    </html>
  );
}
