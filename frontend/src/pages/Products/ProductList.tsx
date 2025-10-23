import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchProducts } from "../../store/slices/productSlice";
import ProductCard from "../../components/products/ProductCard";
import Loader from "../../components/common/Loader";

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-600 text-center">{error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Shop Products
      </h1>

      {/* Filters (simple placeholders for now) */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          className="border rounded-lg px-3 py-2 w-60"
        />
        <select className="border rounded-lg px-3 py-2">
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Home</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.length > 0 ? (
          items.map((p) => <ProductCard key={p.id} {...p} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
