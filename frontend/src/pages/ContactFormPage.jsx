import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveContact } from "../api/contact";

const ContactFormPage = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response =
        await saveContact({
          message,
        });

      if (response.success) {

        setSuccess(
          "Message Submitted Successfully"
        );

        setMessage("");
      }

    } catch (error) {

      setSuccess(
        "Something went wrong"
      );

      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-2">
          She Can Foundation
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Welcome {user?.name}
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <textarea
            placeholder="Enter your message..."
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            rows={5}
            className="w-full border rounded-lg p-3"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg"
          >
            Submit Message
          </button>

        </form>

        {success && (
          <p className="mt-4 text-center text-green-600">
            {success}
          </p>
        )}

        {user?.role === "admin" && (
          <button
            onClick={() =>
              navigate("/dashboard")
            }
            className="mt-4 w-full bg-blue-500 text-white py-3 rounded-lg"
          >
            Admin Dashboard
          </button>
        )}

      </div>

    </div>
  );
};

export default ContactFormPage;