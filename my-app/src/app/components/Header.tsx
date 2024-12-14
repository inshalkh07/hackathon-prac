import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-gray-100 shadow">
      <div className="text-2xl font-bold">
        <Link href="/">MyStore</Link>
      </div>
      <nav className="flex items-center space-x-6">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/checkout">Checkout</Link>
        <Link href="/account">Account</Link>
      </nav>
    </header>
  );
};

export default Header;
