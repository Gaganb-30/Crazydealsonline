import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../store/slices/cartSlice";
import CartItem from "../../components/cart/CartItem";
import CartSummary from "../../components/cart/CartSummary";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <h1 className="text-2xl font-bold text-center mb-6">Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {items.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                image={item.image}
                onIncrease={() => dispatch(increaseQuantity(item.id))}
                onDecrease={() => dispatch(decreaseQuantity(item.id))}
                onRemove={() => dispatch(removeFromCart(item.id))}
              />
            ))}
          </div>

          <CartSummary subtotal={subtotal} onCheckout={handleCheckout} />
        </div>
      )}
    </div>
  );
};

export default CartPage;
