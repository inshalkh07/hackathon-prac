//import Card from "../../components/card"

// export default function Home() {
//   return ( 
//   <div>
   
//   </div>
//   )}


import React from 'react';


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-yellow-100 py-20 text-center">
        <h1 className="text-4xl font-bold">Rocket Single Seater</h1>
        <button className="mt-6 px-6 py-2 bg-black text-white">Shop Now</button>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <h2 className="text-2xl font-bold text-center mb-10">Top Picks For You</h2>
        <div className="grid grid-cols-4 gap-6 px-6">
          {/* Map through products */}
          {[...Array(4)].map((_, index) => (
            <div key={index} className="shadow-lg p-4">
              <img src={`/images/product-${index + 1}.png`} alt="Product" />
              <h3 className="text-lg mt-4">Product Name</h3>
              <p>Rs. 25,000.00</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-10">Our Blogs</h2>
        <div className="grid grid-cols-3 gap-6 px-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="shadow-lg p-4">
              <img src={`/images/blog-${index + 1}.png`} alt="Blog" />
              <h3 className="text-lg mt-4">Blog Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur...</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
