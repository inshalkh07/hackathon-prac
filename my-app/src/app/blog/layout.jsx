import React from 'react';
import './globals.css';  // Import global styles

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="text-lg font-bold">Logo</div>
            <nav className="space-x-6 text-gray-700">
              <a href="/" className="hover:text-yellow-600">Home</a>
              <a href="/blog" className="hover:text-yellow-600">Blog</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-100 py-8 mt-12">
          <div className="container mx-auto text-center text-gray-600">
            © 2024 Your Website. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
