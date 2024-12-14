const Cart = () => {
    return (
      <div className="py-20 px-6">
        <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
        <div className="grid grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="col-span-2 space-y-4">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex items-center justify-between border p-4">
                <img src={`/images/product-${index + 1}.png`} alt="Product" className="w-20 h-20" />
                <div className="flex-1 px-4">
                  <h3 className="text-lg">Product Name</h3>
                  <p>Rs. 25,000.00</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 bg-gray-200">-</button>
                  <span>1</span>
                  <button className="px-4 py-2 bg-gray-200">+</button>
                </div>
              </div>
            ))}
          </div>
  
          {/* Summary */}
          <div className="border p-4">
            <h2 className="text-xl font-bold mb-4">Summary</h2>
            <p className="flex justify-between">
              <span>Subtotal</span>
              <span>Rs. 50,000.00</span>
            </p>
            <p className="flex justify-between">
              <span>Shipping</span>
              <span>Rs. 500.00</span>
            </p>
            <hr className="my-4" />
            <p className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>Rs. 50,500.00</span>
            </p>
            <button className="w-full mt-6 px-6 py-2 bg-black text-white">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Cart;
  