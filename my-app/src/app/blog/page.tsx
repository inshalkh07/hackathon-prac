import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">Our Blogs</h1>
      <div className="grid grid-cols-3 gap-6">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="bg-white shadow-lg p-4">
              <img src={`/images/blog2-${index + 1}.png`} alt="Blog" className="w-full" />
              <h3 className="text-lg font-bold mt-4">Blog Title {index + 1}</h3>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur...</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blog;
