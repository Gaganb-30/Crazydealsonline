interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onRemove?: () => void;
}

const CartItem = ({
  id,
  name,
  price,
  quantity,
  image,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) => {
  return (
    <div className="flex items-center gap-4 border-b pb-4">
      <img
        src={image || "https://via.placeholder.com/80x80?text=Item"}
        alt={name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <p className="text-blue-600 font-bold">₹{price}</p>
        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={onDecrease}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            -
          </button>
          <span className="px-2">{quantity}</span>
          <button
            onClick={onIncrease}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            +
          </button>
          <button
            onClick={onRemove}
            className="ml-4 text-red-500 hover:text-red-600 text-sm"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
