const About = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 lg:px-20">

      <div className="flex flex-col lg:flex-row items-center gap-10">

        {/* Left Image */}
        <div className="lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="food"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            About <span className="text-orange-500">Us</span>
          </h1>

          <p className="text-gray-600 mb-4">
            We are passionate about bringing you the best food experience.
            Our mission is to deliver fresh, tasty, and affordable meals
            right to your doorstep.
          </p>

          <p className="text-gray-600 mb-6">
            From local favorites to international cuisines, we ensure
            quality, hygiene, and fast delivery every time.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white p-3 rounded-xl shadow">🚀 Fast Delivery</div>
            <div className="bg-white p-3 rounded-xl shadow">🍔 Fresh Food</div>
            <div className="bg-white p-3 rounded-xl shadow">⭐ Top Quality</div>
            <div className="bg-white p-3 rounded-xl shadow">💰 Affordable</div>
          </div>
        </div>

      </div>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 text-center gap-6">
        <div>
          <h2 className="text-2xl font-bold text-orange-500">500+</h2>
          <p className="text-gray-600">Orders</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-orange-500">100+</h2>
          <p className="text-gray-600">Dishes</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-orange-500">4.5⭐</h2>
          <p className="text-gray-600">Rating</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-orange-500">50+</h2>
          <p className="text-gray-600">Restaurants</p>
        </div>
      </div>

    </div>
  );
};

export default About;