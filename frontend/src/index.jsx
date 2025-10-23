import React, { useState, useEffect } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Heart,
  Star,
  TrendingUp,
  BookOpen,
  Award,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const BookStoreHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Sample data - Replace with actual API calls
  const bannerSlides = [
    {
      id: 1,
      title: "Discover Amazing Book Deals",
      subtitle: "Up to 50% OFF on bestsellers",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&h=500&fit=crop",
      cta: "Shop Now",
    },
    {
      id: 2,
      title: "New Arrivals This Week",
      subtitle: "Fresh books just for you",
      image:
        "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=1200&h=500&fit=crop",
      cta: "Explore",
    },
    {
      id: 3,
      title: "Join Our Reading Community",
      subtitle: "Connect with fellow book lovers",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=500&fit=crop",
      cta: "Join Now",
    },
  ];

  const featuredBooks = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      price: 499,
      originalPrice: 699,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      category: "Fiction",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      price: 599,
      originalPrice: 799,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop",
      category: "Self-Help",
    },
    {
      id: 3,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 399,
      originalPrice: 599,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=300&h=400&fit=crop",
      category: "Finance",
    },
    {
      id: 4,
      title: "Ikigai",
      author: "Héctor García",
      price: 349,
      originalPrice: 499,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
      category: "Self-Help",
    },
  ];

  const categories = [
    { name: "Fiction", icon: "📚", count: 1250 },
    { name: "Non-Fiction", icon: "📖", count: 890 },
    { name: "Self-Help", icon: "🌟", count: 456 },
    { name: "Biography", icon: "👤", count: 234 },
    { name: "Science", icon: "🔬", count: 678 },
    { name: "History", icon: "🏛️", count: 345 },
    { name: "Children", icon: "🎨", count: 567 },
    { name: "Romance", icon: "❤️", count: 432 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const toggleWishlist = (bookId) => {
    if (wishlist.includes(bookId)) {
      setWishlist(wishlist.filter((id) => id !== bookId));
    } else {
      setWishlist([...wishlist, bookId]);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        {/* Top bar */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <span>📧 support@crazydeals.com</span>
              <span>📞 +91 1234567890</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Free Shipping on orders above ₹500</span>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-purple-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Crazy Deals Online
              </h1>
            </div>

            {/* Search bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for books, authors, publishers..."
                  className="w-full px-4 py-3 pr-12 rounded-full border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Heart className="w-6 h-6 text-gray-700" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <User className="w-6 h-6 text-gray-700" />
              </button>
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile search */}
          <div className="md:hidden mt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search books..."
                className="w-full px-4 py-2 pr-10 rounded-full border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex items-center gap-8 py-3 overflow-x-auto">
              <li>
                <a
                  href="#"
                  className="text-purple-600 font-semibold hover:text-purple-700"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  All Books
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Bestsellers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Deals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Slider */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="w-full h-full bg-gradient-to-r from-black/70 to-black/30 flex items-center">
                <div className="max-w-7xl mx-auto px-4 text-white">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Browse by Category
          </h2>
          <p className="text-gray-600">
            Explore our vast collection across multiple genres
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 text-center cursor-pointer transition-all transform hover:scale-105 hover:shadow-xl border-2 border-gray-100 hover:border-purple-300"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500">{category.count} books</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Books */}
      <section className="bg-gradient-to-br from-purple-100 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Featured Books
              </h2>
              <p className="text-gray-600">
                Hand-picked selections just for you
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700">
              View All <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <div
                key={book.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button
                    onClick={() => toggleWishlist(book.id)}
                    className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-red-50 transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        wishlist.includes(book.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-600"
                      }`}
                    />
                  </button>
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {Math.round(
                      ((book.originalPrice - book.price) / book.originalPrice) *
                        100
                    )}
                    % OFF
                  </div>
                </div>

                <div className="p-4">
                  <div className="text-sm text-purple-600 font-semibold mb-1">
                    {book.category}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1 line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{book.author}</p>

                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{book.rating}</span>
                    <span className="text-xs text-gray-500 ml-1">
                      (245 reviews)
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-2xl font-bold text-gray-800">
                        ₹{book.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through ml-2">
                        ₹{book.originalPrice}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(book)}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Best Prices</h3>
            <p className="text-sm text-gray-600">
              Unbeatable deals on thousands of books
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Huge Collection</h3>
            <p className="text-sm text-gray-600">
              Over 50,000 books across all genres
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Quality Assured</h3>
            <p className="text-sm text-gray-600">
              100% authentic books guaranteed
            </p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">24/7 Support</h3>
            <p className="text-sm text-gray-600">Always here to help you</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Crazy Deals Online
              </h3>
              <p className="text-gray-400 text-sm">
                Your one-stop destination for all your reading needs. Discover,
                explore, and enjoy.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Shipping Info
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Fiction
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Non-Fiction
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Children's Books
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Academic
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-sm text-gray-400 mb-4">
                Subscribe to get special offers and updates
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none text-sm"
                />
                <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full font-semibold text-sm transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Crazy Deals Online. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookStoreHomepage;
