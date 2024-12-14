const Checkout = () => {
    return (
      <div className="py-20 px-6">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        <div className="grid grid-cols-3 gap-6">
          {/* Billing Form */}
          <form className="col-span-2 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border px-4 py-2"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full border px-4 py-2"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City"
                className="w-full border px-4 py-2"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full border px-4 py-2"
              />
            </div>
            <input
              type="text"
              placeholder="Country"
              className="w-full border px-4 py-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border px-4 py-2"
            />
            <button type="submit" className="px-6 py-2 bg-black text-white">
              Place Order
            </button>
          </form>
  
          {/* Order Summary */}
          <div className="border p-4">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
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
          </div>
        </div>
      </div>
    );
  };
  
  export default Checkout;
  