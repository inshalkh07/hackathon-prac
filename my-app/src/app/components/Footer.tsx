 // src/components/Footer.tsx

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={{ padding: '20px', backgroundColor: '#f8f8f8', marginTop: '20px', borderTop: '1px solid #ddd' }}>
      <div style={{ textAlign: 'center' }}>
        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center' }}>
          <li style={{ margin: '0 10px' }}>
            <Link href="/">Home</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link href="/shop">Shop</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link href="/about">About</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <p style={{ marginTop: '10px' }}>
          &copy; 2024 Your Ecommerce Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

