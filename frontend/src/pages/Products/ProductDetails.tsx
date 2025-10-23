import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../components/common/Loader";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
}

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/products/${id}`); // dummy route
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Failed to load product", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <Loader />;
  if (!product)
    return <p className="text-center text-gray-500">Product not found.</p>;

  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      <img
        src={
          product.image || "https://via.placeholder.com/400x300?text=Product"
        }
        alt={product.name}
        className="rounded-xl object-cover w-full h-80"
      />
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">{product.name}</h1>
        <p className="text-blue-600 font-bold text-2xl mt-2">
          ₹{product.price}
        </p>
        <p className="text-gray-600 mt-4">{product.description}</p>

        <div className="flex gap-4 mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Add to Cart
          </button>
          <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-200 transition">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
