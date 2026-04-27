const Contact = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 lg:px-20">

      <h1 className="text-4xl font-bold text-center mb-10">
        Contact <span className="text-orange-500">Us</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left - Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>

          <p className="text-gray-600 mb-4">
            Have questions or want to order something special?
            Feel free to reach out to us anytime.
          </p>

          <div className="space-y-3 text-gray-700">
            <p>📍 Bangalore, India</p>
            <p>📞 +91 8431391539</p>
            <p>📧 support@foodie.com</p>
          </div>

          {/* Social */}
          <div className="flex gap-4 mt-6">
            <span className="bg-white p-3 rounded-full shadow cursor-pointer hover:bg-orange-100"><i class="fi fi-brands-instagram"></i></span>
            <span className="bg-white p-3 rounded-full shadow cursor-pointer hover:bg-orange-100"><i class="fi fi-brands-facebook"></i></span>
            <span className="bg-white p-3 rounded-full shadow cursor-pointer hover:bg-orange-100"><i class="fi fi-brands-twitter"></i></span>
          </div>
        </div>

        {/* Right - Form */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>

            <button
              type="submit"
              className="bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;