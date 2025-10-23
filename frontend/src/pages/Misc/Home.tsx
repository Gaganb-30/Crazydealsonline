const Hero = () => (
  <section className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-10 text-center">
    <h1 className="text-4xl font-extrabold text-blue-700">
      Welcome to CrazyDeals
    </h1>
    <p className="mt-3 text-gray-600">
      Explore trending products with exclusive discounts.
    </p>
    <a
      href="/products"
      className="inline-block mt-5 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Shop Now
    </a>
  </section>
);

export default Hero;
