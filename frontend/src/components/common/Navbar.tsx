import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Heart, User } from "lucide-react";

const Navbar = () => {
  const activeLink = "text-blue-600 font-semibold";
  const baseLink = "text-gray-700 hover:text-blue-600 transition";

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          CrazyDeals
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-6 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : baseLink)}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? activeLink : baseLink)}
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeLink : baseLink)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeLink : baseLink)}
          >
            Contact
          </NavLink>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <NavLink to="/wishlist" className={baseLink}>
            <Heart className="w-5 h-5" />
          </NavLink>
          <NavLink to="/cart" className={baseLink}>
            <ShoppingCart className="w-5 h-5" />
          </NavLink>
          <NavLink to="/profile" className={baseLink}>
            <User className="w-5 h-5" />
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu (simple static version for now) */}
      <div className="md:hidden flex justify-center gap-6 py-2 border-t text-sm">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeLink : baseLink)}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? activeLink : baseLink)}
        >
          Shop
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? activeLink : baseLink)}
        >
          Cart
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
