

// src/app/shop/page.tsx

"use client"; // To ensure this runs on the client side

import React from "react";
import Image from "next/image";  // Import Image from next/image
//import { useCart } from "../../context/CartContext";  // Import the useCart hook for cart functionality

// Example product data (this can be dynamic or fetched from an API in real-world applications)
const products = [
  {
    id: 1,
    name: "Rocket Single Seater",
    price: 25000,
    image: "/images/rocket-chair.jpeg",
  },
  {
    id: 2,
    name: "Side Table",
    price: 5000,
    image: "/images/side-table02.png",
  },
  {
    id: 3,
    name: "Asgaard Sofa",
    price: 50000,
    image: "/images/asgaard-sofa.jpg",
  },
];

const ShopPage = () => {
  const { addToCart } = useCart();  // Access the addToCart function from the cart context

  // Handle adding a product to the cart
  const handleAddToCart = (product: unknown) => {
    addToCart(product);
  };

  return (
    <div>
      {/* Header */}
      <header style={{ padding: "20px", backgroundColor: "#f8f8f8", borderBottom: "1px solid #ddd" }}>
        <nav>
          <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-between" }}>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </nav>
      </header>

      {/* Shop Content */}
      <main style={{ padding: "20px" }}>
        <h1 className="text-3xl font-bold mb-6">Shop</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg">
              {/* Displaying product image with Next.js Image optimization */}
              <Image
                src={product.image} // Image path in the public folder
                alt={product.name}  // Alt text for accessibility
                width={500}          // Adjust the width as needed
                height={300}         // Adjust the height as needed
                className="mb-4 w-full h-48 object-cover"  // Styling the image
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-500">Rs. {product.price.toLocaleString()}</p>
              <button
                onClick={() => handleAddToCart(product)}  // Adding product to cart
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ padding: "20px", backgroundColor: "#f8f8f8", marginTop: "20px", borderTop: "1px solid #ddd" }}>
        <div style={{ textAlign: "center" }}>
          <ul style={{ listStyle: "none", display: "flex", justifyContent: "center" }}>
            <li style={{ margin: "0 10px" }}><a href="/">Home</a></li>
            <li style={{ margin: "0 10px" }}><a href="/shop">Shop</a></li>
            <li style={{ margin: "0 10px" }}><a href="/about">About</a></li>
            <li style={{ margin: "0 10px" }}><a href="/contact">Contact</a></li>
          </ul>
          <p style={{ marginTop: "10px" }}>&copy; 2024 Your Ecommerce Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ShopPage;

function useCart(): { addToCart: unknown; } {
  throw new Error("Function not implemented.");
}

