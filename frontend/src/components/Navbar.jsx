import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-indigo-600 text-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-bold"
        >
          She Can Foundation
        </Link>

        <div className="flex gap-4 items-center">

          <Link
            to="/"
            className="hover:text-gray-200"
          >
            Home
          </Link>

          {token ? (
            <>
              <Link
                to="/contacts"
                className="hover:text-gray-200"
              >
                Dashboard
              </Link>

              <button
                onClick={logout}
                className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-gray-200"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-white text-indigo-600 px-4 py-2 rounded-lg"
              >
                Register
              </Link>
            </>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;