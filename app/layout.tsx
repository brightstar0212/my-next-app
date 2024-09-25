"use client"; // Ensure this is a Client Component

import { AppBar, Toolbar } from "@mui/material";
import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "./globals.css"; // Import global styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material";
interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <AppBar
          position="fixed"
          sx={{ backgroundColor: "#fff", color: "#000", padding: 0 }}
          className="animate-fade-down"
        >
          <Toolbar>
            <Navigation />
          </Toolbar>
        </AppBar>

        {children}
        <Footer />
      </body>
    </html>
  );
}
