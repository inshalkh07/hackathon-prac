import { useParams } from 'next/navigation';

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="py-20 px-6">
      <h1 className="text-3xl font-bold">Product {id}</h1>
      <div className="flex">
        <img src={`/images/product2.jpeg`} alt="Product" className="w-1/2" />
        <div className="ml-10">
          <p className="text-xl">Product Description</p>
          <p className="text-lg">Rs. 25,000.00</p>
          <button className="mt-6 px-6 py-2 bg-black text-white">Add to Cart</button>
        </div>
      </div>
    </div>
  
  
);
};

export default ProductDetails;
