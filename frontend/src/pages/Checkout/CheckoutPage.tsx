import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { placeOrder } from "../../store/slices/orderSlice";
import { clearCart } from "../../store/slices/cartSlice";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    phone: "",
    paymentMethod: "cod",
  });

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 99 : 0;
  const total = subtotal + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!formData.name || !formData.address || !formData.phone) {
      alert("Please fill all required fields!");
      return;
    }

    const shippingAddress = `${formData.address}, ${formData.city}, ${formData.pincode}`;
    dispatch(
      placeOrder({
        items,
        total,
        shippingAddress,
        paymentMethod: formData.paymentMethod,
      })
    );
    dispatch(clearCart());
    navigate("/order-confirmation");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Shipping Info */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Shipping Information</h2>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
        </div>

        {/* Payment */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Payment & Summary</h2>

          <div className="space-y-3 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={formData.paymentMethod === "cod"}
                onChange={handleChange}
              />
              Cash on Delivery
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={formData.paymentMethod === "card"}
                onChange={handleChange}
              />
              Credit/Debit Card
            </label>
          </div>

          <hr className="my-3" />
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>₹{shipping}</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-2">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
