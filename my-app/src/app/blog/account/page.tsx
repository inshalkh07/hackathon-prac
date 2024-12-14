const Account = () => {
    return (
      <div className="py-20 px-6">
        <h1 className="text-3xl font-bold mb-6">My Account</h1>
        <div className="grid grid-cols-2 gap-6">
          {/* Login Form */}
          <form className="space-y-4 border p-4">
            <h2 className="text-xl font-bold">Login</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full border px-4 py-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border px-4 py-2"
            />
            <button type="submit" className="px-6 py-2 bg-black text-white">
              Login
            </button>
          </form>
  
          {/* Registration Form */}
          <form className="space-y-4 border p-4">
            <h2 className="text-xl font-bold">Register</h2>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border px-4 py-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border px-4 py-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border px-4 py-2"
            />
            <button type="submit" className="px-6 py-2 bg-black text-white">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Account;
  