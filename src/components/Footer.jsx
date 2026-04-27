const Footer = () => {
  return (
    <div className="bg-gray-900 text-white px-6 py-10 mt-10">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo + About */}
        <div>
          <h1 className="text-2xl font-bold text-orange-400">Foodie</h1>
          <p className="text-gray-400 mt-2 text-sm">
            Fresh and delicious food delivered straight to your door.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li >
              <a href = '#home' className="hover:text-orange-400 cursor-pointer">Home
                </a>
              </li>
            <li >
              <a href = '#menu' className="hover:text-orange-400 cursor-pointer">Menu
                </a>
              </li>
            <li >
              <a href = '#about' className="hover:text-orange-400 cursor-pointer">About
                </a>
              </li>
            <li >
              <a href = '#contact' className="hover:text-orange-400 cursor-pointer">Contact
                </a>
              </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Contact</h2>
          <p className="text-gray-400 text-sm">📍 Bangalore, India</p>
          <p className="text-gray-400 text-sm">📞 +91 8431391539</p>
          <p className="text-gray-400 text-sm">📧 foodie@email.com</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-8 text-sm border-t border-gray-700 pt-4">
        © 2026 Foodie. All rights reserved.
      </div>

    </div>
  );
};

export default Footer;