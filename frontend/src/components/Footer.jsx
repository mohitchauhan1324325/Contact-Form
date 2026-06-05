import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              She Can Foundation
            </h2>

            <p className="text-gray-400">
              Empowering individuals through education,
              opportunities, and community support.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link to="/" className="text-gray-400 hover:text-white">
                Home
              </Link>

              <Link to="/login" className="text-gray-400 hover:text-white">
                Login
              </Link>

              <Link to="/register" className="text-gray-400 hover:text-white">
                Register
              </Link>

              <Link to="/contacts" className="text-gray-400 hover:text-white">
                Dashboard
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Contact
            </h3>

            <p className="text-gray-400">
              Email: support@shecanfoundation.org
            </p>

            <p className="text-gray-400 mt-2">
              India
            </p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} She Can Foundation.
          All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;