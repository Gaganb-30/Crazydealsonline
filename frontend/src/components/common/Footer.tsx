const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-10">
      <div className="container mx-auto px-4 py-8 grid md:grid-cols-3 gap-8 text-sm text-gray-700">
        {/* About */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">CrazyDeals</h3>
          <p>
            Your one-stop shop for the best online deals. Quality products,
            unbeatable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="/about" className="hover:text-blue-600">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-600">
                Contact
              </a>
            </li>
            <li>
              <a href="/wishlist" className="hover:text-blue-600">
                Wishlist
              </a>
            </li>
            <li>
              <a href="/orders" className="hover:text-blue-600">
                My Orders
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Stay Updated</h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex border rounded-lg overflow-hidden"
          >
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 px-3 py-2 outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 border-t py-4">
        © {new Date().getFullYear()} CrazyDeals. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
