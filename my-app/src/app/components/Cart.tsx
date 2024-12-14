// src/components/Cart.tsx

import React, { useState } from 'react';

const Cart = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [cartItems, setCartItems] = useState<any[]>([]); // State to hold cart items

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addToCart = (item: any) => {
    setCartItems((prevItems) => [...prevItems, item]); // Add item to cart
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId)); // Remove item from cart
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addToCart({ id: 1, name: "Product 1", price: 19.99 })}>Add Product 1</button>
      {/* You can call addToCart on product clicks */}
    </div>
  );
};

export default Cart