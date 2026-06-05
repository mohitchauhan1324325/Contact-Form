import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/admin";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(formData);

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      if (data.user.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Login Failed"
      );

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-lg"
          >
            Login
          </button>

          {error && (
            <p className="text-red-500">
              {error}
            </p>
          )}

        </form>

      </div>

    </div>
  );
};

export default LoginPage;