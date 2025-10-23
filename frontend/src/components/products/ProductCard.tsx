import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image?: string;
}

const ProductCard = ({ id, name, price, image }: ProductCardProps) => {
  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
      <Link to={`/products/${id}`}>
        <img
          src={image || "https://via.placeholder.com/300x200?text=Product"}
          alt={name}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-sm truncate">{name}</h3>
        <p className="text-blue-600 font-bold mt-2">₹{price}</p>
        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
