 // src/app/layout.tsx

// src/app/layout.tsx

// app/layout.tsx

import React from 'react';
import Header from './components/Header';  // Correct path to Header component
import Footer from './components/Footer';  // Correct path to Footer component
import './globals.css';  // Correct path to global styles

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your Ecommerce Website</title>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
