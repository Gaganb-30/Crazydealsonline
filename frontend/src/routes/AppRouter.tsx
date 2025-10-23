import { Routes, Route } from "react-router-dom";
import Home from "../pages/Misc/Home";
import About from "../pages/Misc/About";
import Contact from "../pages/Misc/Contact";
import NotFound from "../pages/Misc/NotFound";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ProductList from "../pages/Products/ProductList";
import ProductDetails from "../pages/Products/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Cart/Checkout";
import OrderHistory from "../pages/Orders/OrderHistory";
import Profile from "../pages/User/Profile";
import Wishlist from "../pages/User/Wishlist";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetails />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<OrderHistory />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/order-confirmation" element={<OrderConfirmationPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
