import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { clearCurrentOrder } from "../../store/slices/orderSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrderConfirmationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentOrder } = useSelector((state: RootState) => state.order);

  useEffect(() => {
    if (!currentOrder) navigate("/");
    return () => {
      dispatch(clearCurrentOrder());
    };
  }, []);

  if (!currentOrder) return null;

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
      <div className="text-green-600 text-6xl mb-4">✓</div>
      <h1 className="text-2xl font-bold mb-2">Order Placed Successfully!</h1>
      <p className="text-gray-600 mb-6">
        Your order ID is{" "}
        <span className="font-semibold">{currentOrder.id}</span>.
        <br />
        It will be delivered to your address soon.
      </p>

      <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md mb-6">
        <h2 className="font-semibold text-lg mb-2">Order Summary</h2>
        {currentOrder.items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-b py-2 text-gray-700"
          >
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
        <div className="flex justify-between font-bold mt-3">
          <span>Total:</span>
          <span>₹{currentOrder.total}</span>
        </div>
      </div>

      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderConfirmationPage;
