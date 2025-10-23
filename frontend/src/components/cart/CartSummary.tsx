interface CartSummaryProps {
  subtotal: number;
  onCheckout: () => void;
}

const CartSummary = ({ subtotal, onCheckout }: CartSummaryProps) => {
  const shipping = subtotal > 0 ? 99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-80">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>₹{subtotal}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>₹{shipping}</span>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>₹{total}</span>
      </div>
      <button
        onClick={onCheckout}
        className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
