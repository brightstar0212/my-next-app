"use client"; // Ensure this is a Client Component

import { AppBar, Toolbar } from "@mui/material";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "./globals.css"; // Import global styles

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      {/* Fixed AppBar */}
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#fff", color: "#000", padding: 0 }}
        className="animate-fade-down"
      >
        <Toolbar>
          <Navigation />
        </Toolbar>
      </AppBar>

      {/* Page Content */}
      <Component {...pageProps} />

      {/* Footer */}
      <Footer />
    </>
  );
}
