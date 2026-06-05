import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/admin";

const RegisterPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "user",
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

            await registerUser(formData);

            alert(
                "Registration Successful"
            );

            navigate("/login");

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Registration Failed"
            );

        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">

            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow w-96"
            >

                <h1 className="text-2xl font-bold mb-5">
                    Register
                </h1>

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border w-full p-3 mb-4 rounded"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border w-full p-3 mb-4 rounded"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border w-full p-3 mb-4 rounded"
                />

                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="border w-full p-3 mb-4 rounded"
                >
                    <option value="user">
                        User
                    </option>

                    <option value="admin">
                        Admin
                    </option>
                </select>

                {error && (
                    <p className="text-red-500 mb-4">
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    className="bg-indigo-600 text-white w-full p-3 rounded"
                >
                    Register
                </button>

            </form>

        </div>
    );
};

export default RegisterPage;